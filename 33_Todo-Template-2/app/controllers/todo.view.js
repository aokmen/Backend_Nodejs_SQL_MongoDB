"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// npm i express-async-errors
require("express-async-errors");

const Todo = require("../models/todo");

const PRIORITY =
  // önceden tanimlanmis sabit degerler büyük hafle yazilir
  {
    1: "High",
    0: "Normal",
    "-1": "Low",
  };
module.exports = {
  list: async (req, res) => {
    // const data = await Todo.findAll()
    // const data = await Todo.findAndCountAll();
    const data = await Todo.findAndCountAll({  //tersten siralama
        order: [
            ['id', 'DESC']
        ],
    })
    // res.status(200).send({
    //     error: false,
    //     result: data
    // })
    // res.render('index',{   // create view as template  >>> index : views/index.ejs

    //     username:'user',
    //     email: 'user@user.com',
    //     isLogin:true
    // })
    res.render("todoList", {
      count: data.count,
      todos: data.rows,
      priority: PRIORITY,
    }); //todos basligi adinda verileri todoList i alarak getirir
  },

  // CRUD METHODS:

  create: async (req, res) => {
    if (req.method == "POST") {
      //Form post

      const data = await Todo.create(req.body);
        res.redirect('/view') // post isleminden sonra anasayfaya dön
    } else {
      //From view
      res.render("todoCreate");
    }
  },

  read: async (req, res) => {
    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
    // const data = await Todo.findOne({ where: { id: req.params.id } })

    const data = await Todo.findByPk(req.params.id);
    res.render('todoRead',{todo:data, priority: PRIORITY})
  },

  update: async (req, res) => {

    if(req.method=='POST'){
    // Model.update({ newData }, { filter })
    const isUpdated = await Todo.update(req.body, {
        where: { id: req.params.id },
      });
      // isUpdated return: [ 1 ] or [ 0 ]
      res.status(202).send({
        error: false,
        body: req.body, // Send Data
        message: "Updated",
        isUpdated: Boolean(isUpdated[0]),
        result: await Todo.findByPk(req.params.id),
      });
    }else{
        const data = await Todo.findByPk(req.params.id);
        res.render('todoUpdate',{todo:data,priority: PRIORITY })  // günceledigim verileri göster
    }

  },

  delete: async (req, res) => {
    // Model.destroy({ filter })
    const isDeleted = await Todo.destroy({ where: { id: req.params.id } });
    res.redirect('/view')
  }
};
