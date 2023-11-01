'use strict'
//? SEQUALIZE needs
const {sequelize, DataTypes}=require('../todoConnection')

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


module.exports=Todo