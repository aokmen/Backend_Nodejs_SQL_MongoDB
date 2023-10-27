'use strict'
// SEQUELIZE needs >>> npm install sequelize sqlite3

const {Sequelize,DataTypes} = require('sequelize')

/* --------------------------- connect to database -------------------------- */

const sequelize = new Sequelize('sqlite:./db.sqlite3')

/* ------------------------------ create model ------------------------------ */

const Todo = sequelize.define('todo',{   // table's name and column's name
    
    id:{                      // biz id vermezsek db kendisi otomatik id olusturur
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    //     comment:'description about this field',
    //     field:'change / new column name'
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    priority:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:1  // öncelik sirasi belirtilmezse default olarak deger ver. Examp: 2 high, 1 middle, 0 normal
    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false  
    }
    //createdAT abd updatedAT fields generated automatic by db.slite3
    // createdDate:{
    //     type:DataTypes.DATE,
    //     allowNull:false,
    // },
    // updatedDate:{
    //     type:DataTypes.DATE,
    //     allowNull:false,
    // }
})

    /* ------------------------ Synchronize with database ----------------------- */

    // sequelize.sync() >> create DB according to model

     // sequelize.sync({force:true}) // tabloda bir degisiklik yaptigimizda bu kod ile güncellemeyi zorla yaptirir ve ayarlari burada yazilan degerlere göre basa döndürür.

   // sequelize.sync({alter:true}) // bu dosyayi her kaydettigimizde degisikligi tekrar ekler. Buyüzden verilerde bir degisiklik yapacaksak burasi yorumda kalsin

   
   /* ------------------------------ connect to db ----------------------------- */
   // authenticate async function
   sequelize.authenticate()
      .then(() => console.log('Connected to DB'))
      .catch(() => console.log('Not connected',err))

module.exports=Todo      