




// mongosh
use("tw") // create database
show("dbs") // show databases
db.createCollection("posts") // create table named "posts"

db.posts.insertMany([{ "başlık": "İlk Gönderi", "içerik": "Bu, bir...", "oluşturulma_tarihi": new Date("2023-10-21T09:00:00Z") }, { "başlık": "İkinci Gönderi", "içerik": "Başka bir...", "oluşturulma_tarihi": new Date("2023-10-21T10:30:00Z") }, { "başlık": "Üçüncü Gönderi", "içerik": "Bir başka...", "oluşturulma_tarihi": new Date("2023-10-21T14:45:00Z") }])
db.posts.find()  //

// +----+------------+-------------------+---------------------+
// | ID | Başlık     | İçerik            | Oluşturulma Tarihi  |
// +----+------------+-------------------+---------------------+
// | 1  | 1. Gönderi | Bu, bir...        | 2023-10-21 09:00:00 |
// | 2  | 2. Gönderi | Başka bir...      | 2023-10-21 10:30:00 |
// | 3  | 3. Gönderi | Bir başka...      | 2023-10-21 14:45:00 |
// +----+------------+-------------------+---------------------+

db.posts.drop()  // remove table

 /* ----------------------------------- --- ---------------------------------- */

db.createCollection("post")
db.post.insertMany([{ "post_id": 1, "title": "amazing duo Express.js and MongoDb" },{ "post_id": 2, "title": "MVC architecture" }])
db.comment.insertMany([{ "comment_id": 1, "post_id": 1, "author": "Qadir", "content": "I agree with you" },{ "comment_id": 2, "post_id": 1, "author": "Victor", "content": "Their communities are very good" },{ "comment_id": 3, "post_id": 2, "author": "Rafe", "content": "Django uses MVT" },{ "comment_id": 4, "post_id": 1, "author": "Cedric", "content": "Good post" }])

/* Controller: The waiter in the restaurant serves as the controller. The controller takes your food order and communicates it to the kitchen (model). The controller handles the interaction between the user (you) and the system (kitchen and chef).

Model: The kitchen and the chef represent the model in this analogy. The model is responsible for processing the request and preparing the data or, in this case, the food. The kitchen is where the food is actually prepared based on the order specifications. The chef handles the logic of preparing the meal.

View: In this analogy, the view is you, the customer. You are the one receiving the final product (the meal) but are not involved in its preparation. The view is responsible for displaying the results to the user without worrying about how the data (food) is generated.

So, in summary:

Controller (Waiter): Accepts and manages user requests, interacts with the model (kitchen and chef).
Model (Kitchen and Chef): Processes and handles the request, prepares the data (food) based on specifications.
View (Customer/You): Receives and interacts with the final product, without being concerned with its preparation. */

/* ----------------------------------- --- ---------------------------------- */
 

db.createCollection("people")

db.people.insertMany([
    { "id": 1, "user_id": "user1", "age": 25, "status": "A" },
    { "id": 2, "user_id": "user2", "age": 30, "status": "B" },
    { "id": 3, "user_id": "user3", "age": 35, "status": "A" },
    { "id": 4, "user_id": "user4", "age": 40, "status": "C" },
    { "id": 5, "user_id": "user5", "age": 45, "status": "A" }
  ])
  db.st.insertMany([{ "id": 1, "user_id": "user1", "age": 25, "status": "A" },{ "id": 2, "user_id": "user2", "age": 30, "status": "B" },{ "id": 3, "user_id": "user3", "age": 35, "status": "A" },{ "id": 4, "user_id": "user4", "age": 40, "status": "C" },{ "id": 5, "user_id": "user5", "age": 45, "status": "A" }])


/* -------------------------------------------------------------------------- */
/*               1. MongoDB equivalent of SELECT * FROM people:               */
/* -------------------------------------------------------------------------- */
 
db.people.find({})


/* -------------------------------------------------------------------------- */
/*      2. MongoDB equivalent of SELECT user_id, status FROM people:      */
/* -------------------------------------------------------------------------- */
 
db.people.find({}, { "id": 1, "user_id": 1, "status": 1, "_id": 0 })
db.people.find({}, { "user_id": 1, "status": 1, "_id": 0 })

/* -------------------------------------------------------------------------- */
/*         3.MongoDB equivalent of SELECT user_id, status FROM people:        */
/* -------------------------------------------------------------------------- */
 
db.people.find({}, { "user_id": 1, "status": 1, "_id": 0 })

/* -------------------------------------------------------------------------- */
/*      4.MongoDB equivalent of SELECT * FROM people WHERE status = "A":      */
/* -------------------------------------------------------------------------- */
 
 ,{id:1,user_id:1,age:1,status:1,_id:0}
db.people.find({ "status": "A" })

 /* ---------------------------------------------------------------------- */
 /*   5.MDB equ of SELECT user_id, status  FROM people WHERE status = "A": */         
 /* -----------------------------------------------------------------------*/
 
db.people.find({ "status": "A" }, { "user_id": 1, "status": 1, "_id": 0 })

/* -------------------------------------------------------------------------- */
/*      6.MongoDB equivalent of SELECT * FROM people WHERE status != "A":     */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "status": { $ne: "A" } }) // not equal

/* -------------------------------------------------------------------------- */
/* 7.MongoDB eq of SELECT * FROM people WHERE status  = "A" AND age = 50:     */
/* -------------------------------------------------------------------------- */

db.people.find({ "status": "A", "age": 50 })

/* -------------------------------------------------------------------------- */
/*    8.MongoDB eq of SELECT * FROM people WHERE status = "A" OR age = 50:    */
/* -------------------------------------------------------------------------- */
 
db.people.find({ $or: [{ "status": "A" }, { "age": 50 }] })

/* -------------------------------------------------------------------------- */
/*        9.MongoDB equivalent of SELECT * FROM people WHERE age > 25:        */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "age": { $gt: 25 } }) // greater-than

/* -------------------------------------------------------------------------- */
/*        10.MongoDB equivalent of SELECT * FROM people WHERE age < 25:       */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "age": { $lt: 25 } }) //  less-than

/* -------------------------------------------------------------------------- */
/*     11.MongoDB eq of SELECT * FROM people WHERE age > 25 AND age <= 50:    */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "age": { $gt: 25, $lte: 50 } })

/* -------------------------------------------------------------------------- */
/*   12.MDB eq of S * FR people WHERE user_id like "%bc%" (reg. expression)   */
/* -------------------------------------------------------------------------- */

db.people.find( { user_id: /bc/ } ) 
db.people.find({ "user_id": /.*bc.*/ })
db.people.find( { user_id: { $regex: /^bc/ } } )

/* -------------------------------------------------------------------------- */
/*     13.MDB eq of S * FR people WHERE status = "A" ORDER BY user_id ASC:    */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "status": "A" }).sort({ "user_id": 1 })

/* -------------------------------------------------------------------------- */
/*    14.MDB equ of S * FR people WHERE status = "A" ORDER BY user_id DESC:   */
/* -------------------------------------------------------------------------- */
 
db.people.find({ "status": "A" }).sort({ "user_id": -1 })

/* -------------------------------------------------------------------------- */
/*            15.MongoDB equivalent of SELECT COUNT(*) FROM people:           */
/* -------------------------------------------------------------------------- */
 
db.people.countDocuments({})
db.people.count()
db.people.find().count()

/* -------------------------------------------------------------------------- */
/*         16.MongoDB equivalent of SELECT COUNT(user_id) FROM people:        */
/* -------------------------------------------------------------------------- */
 
db.people.count({ "user_id": { $exists: true } })

/* -------------------------------------------------------------------------- */
/*    17.MongoDB equivalent of SELECT COUNT(*) FROM people WHERE age > 30:    */
/* -------------------------------------------------------------------------- */
 
db.people.count({ "age": { $gt: 30 } })

/* -------------------------------------------------------------------------- */
/*        18.MongoDB equivalent of SELECT DISTINCT(status) FROM people:       */
/* -------------------------------------------------------------------------- */
 
db.people.distinct("status")

/* -------------------------------------------------------------------------- */
/*           19.MongoDB equivalent of SELECT * FROM people LIMIT 1:           */
/* -------------------------------------------------------------------------- */
 
db.people.find({}).limit(1)
db.people.findOne()

/* -------------------------------------------------------------------------- */
/*       20.MongoDB equivalent of SELECT * FROM people LIMIT 5 SKIP 10:       */
/* -------------------------------------------------------------------------- */
 
db.people.find({}).skip(10).limit(5)

/* -------------------------------------------------------------------------- */
/*   21. MDB collection "people" with a similar structure to the SQL table:   */
/* -------------------------------------------------------------------------- */
// CREATE TABLE people (
//   id MEDIUMINT NOT NULL
//   AUTO_INCREMENT,
//   user_id Varchar(30),
//   age Number,
//   status char(1),
//   PRIMARY KEY (id)
//   ) 


db.createCollection("people")
db.people.createIndex({ "id": 1 }, { unique: true })
db.people.insertOne({
   "user_id": "YourUserID",
   "age": 30,
   "status": "A"
})
db.people.insertOne({"user_id": "YourUserID","age": 30,"status": "A"})


// { id: 1, user_id: 'user1', age: 25, status: 'A' },
// { id: 2, user_id: 'user2', age: 30, status: 'B' },
// { id: 3, user_id: 'user3', age: 35, status: 'A' },
// { id: 4, user_id: 'user4', age: 40, status: 'C' },
// { id: 5, user_id: 'user5', age: 45, status: 'A' }


// db.people.createIndex({ "id": 1 }, { unique: true }) ifadesiyle oluşturulan benzersiz indeks, "id" alanındaki değerlerin yinelenmeden yalnızca bir kez kullanılmasını zorlar. Örneğin, koleksiyonda yalnızca bir "id: 1" olabilir, yani aynı "id" değerine sahip iki belge eklenemez.

// Bu nedenle, "id: 1" değeriyle bir belge ekledikten sonra başka bir belgeyi "id: 1" değeriyle eklemeye çalışırsanız, MongoDB bir benzersizlik hatası verecektir. Ancak, "id: 2", "id: 3" gibi diğer farklı "id" değerleri kullanılabilir ve bu belirli değerlere sahip belgeler koleksiyonda birer kez bulunabilir.

// Diyelim ki db.people.createIndex({ "id": 1 }, { unique: true }) ifadesiyle oluşturulan indeksi kullanarak aşağıdaki işlemleri gerçekleştiriyorsunuz:

// İlk belgeyi eklediniz: { id: 1, user_id: 'user1', age: 25, status: 'A' }
// Bu işlem başarılı olur çünkü koleksiyonda henüz "id: 1" değerine sahip başka bir belge yok.

// İkinci belgeyi eklemeye çalıştınız: { id: 1, user_id: 'user2', age: 30, status: 'B' }
// Bu işlem benzersizlik kuralına aykırıdır ve MongoDB bu belgeyi eklerken bir hata fırlatır. Çünkü "id: 1" zaten koleksiyonda bulunan bir belgeye aittir ve aynı "id" değeri tekrar kullanılamaz.

// Üçüncü belgeyi eklersiniz: { id: 2, user_id: 'user3', age: 35, status: 'A' }
// Bu işlem başarılıdır çünkü "id: 2" değeri daha önce kullanılmamıştır ve indeks, yeni bir "id" değerine izin verir.

// Bu nedenle, bu indeksi kullanarak MongoDB koleksiyonunda "id" alanını benzersiz bir anahtar olarak kullanabilirsiniz. Her belge "id" alanıyla bir kez temsil edilir, ve aynı "id" değerine sahip başka bir belge eklemeye çalışırsanız MongoDB bu işlemi reddeder ve benzersizlik ihlali hatası verir.


// db.people.createIndex({ "id": 1 }, { unique: true })
// db.people.insertOne({id: 1, user_id: 'user1', age: 25, status: 'A'})




 /* -------------------------------------------------------------------------- */
 /*                22.ALTER TABLE people ADD join_date DATETIME                */
 /* -------------------------------------------------------------------------- */

 db.people.updateMany({}, { $set: { "join_date": new Date() } })

/* -------------------------------------------------------------------------- */
/*                 23.MongoDB equivalent of DROP TABLE people:                */
/* -------------------------------------------------------------------------- */
 
db.people.drop()

/* -------------------------------------------------------------------------- */
/* 24.INSERT INTO people(user_id, age, status)  VALUES ("bcd001", 45, "A"):  */
/* ------------------------------------------------------------------------- */

db.people.insert({ "user_id": "bcd001", "age": 45, "status": "A" })

/* -------------------------------------------------------------------------- */
/*         25.Updating documents in MongoDB is done using updateMany:         */
/* -------------------------------------------------------------------------- */
 
db.people.updateMany({ "age": { $gt: 25 } }, { $set: { "status": "C" } })

/* -------------------------------------------------------------------------- */
/*    26. MDB eq of UPDATE people SET age = age + 3 WHERE status = "A":       */
/* ------------------------------------------------------------------------- */
 
db.people.updateMany({ "status": "A" }, { $inc: { "age": 3 } })

/* -------------------------------------------------------------------------- */
/*       27.MongoDB equivalent of DELETE FROM people WHERE status = "D":      */
/* -------------------------------------------------------------------------- */
 
db.people.deleteMany({ "status": "D" })

/* -------------------------------------------------------------------------- */
/*                28.MongoDB equivalent of DELETE FROM people:                */
/* -------------------------------------------------------------------------- */
 
db.people.deleteMany({})