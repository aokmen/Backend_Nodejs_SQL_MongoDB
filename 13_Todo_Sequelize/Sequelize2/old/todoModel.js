'use strict'
//? SEQUALIZE needs
// npm install sequelize sqlite3
const {Sequelize, DataTypes}=require('sequelize')

// connect to sqlite db
const sequelize=new Sequelize('sqlite:./db.sqlite3')

// connect postgre 
//npm install pg pg-hstore
// const sequelize = new Sequelize('postgres://postgres:11@localhost:5432/todo')

//create model
//const ModelName=sequelize.define('TabelName',{ columnNames })
const Todo=sequelize.define('todo',{
    // id created automatic
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    //     allowNull:false,
    //     comment: 'description about this field',
    //     field:'change / new coulumn name',
    //     // defaultValue:

    // },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    // description:{
    //     type:DataTypes.TEXT,
    //     allowNull:true
    // },
    description: DataTypes.TEXT,      

    priority:{
        type:DataTypes.INTEGER,
        allowNull:false,
        // 2 high, 1 mid, 0 normal 
        defaultValue: 1
    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    // createdAt and updatedAt fields generating aoutomatic
    // createdDate:{
    //     type:DataTypes.DATE,
    //     allowNull:false,
    // },
    // updatedDate:{
    //     type:DataTypes.DATE,
    //     allowNull:false,
    // }
})

//? syncronise with db
// sequelize.sync() // create DB according to model

// if db structure changed 
// sequelize.sync({force:true})

// ! if you want to change model structure and you have data 
// !run and convert to comment line

// sequelize.sync({alter:true})

//? connext to db
//authenticate async function
sequelize.authenticate()
    .then(()=>console.log('Connected to DB'))
    .catch((err)=>console.log('Not connected',err))

module.exports=Todo