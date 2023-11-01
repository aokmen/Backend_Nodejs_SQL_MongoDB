'use strict'

/*  TODO DB connection */

// npm install sequelize sqlite3
const {Sequelize, DataTypes}=require('sequelize')

// connect to sqlite db
const sequelize=new Sequelize('sqlite:./db.sqlite3')

// connect postgre 
//npm install pg pg-hstore
// const sequelize = new Sequelize('postgres://postgres:11@localhost:5432/todo')

//? syncronise with db
const dbConnection=()=>{

    // sequelize.sync() // create DB according to model

    // if db structure changed 
    // sequelize.sync({force:true})

    // ! if you want to change model structure and you have data 
    // !run and convert to comment line

    sequelize.sync({alter:true})

    //? connext to db
    //authenticate async function
    sequelize.authenticate()
        .then(()=>console.log('Connected to DB'))
        .catch((err)=>console.log('Not connected',err))

}   
module.exports={sequelize, DataTypes, dbConnection}   