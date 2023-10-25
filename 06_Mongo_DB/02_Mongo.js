
/* - 1. Kaç tür SQL dili vardır ve hangisi hangi tür komutları çalıştırmak içindir? - */


// SQL Yapılandırılmış Sorgu Dili "Structured Query Language", farklı komutları çalıştırmak için başta olmak üzere çeşitli tiplerde gelir:
// Veri Sorgu Dili "Data Query Language" (DQL): Veritabanlarından veri sorgulamak için kullanılır. DQL'deki ana komut SELECT'tir.
// Veri Tanımlama Dili "Data Definition Language" (DDL): Veritabanı yapılarını tanımlamak ve yönetmek için kullanılır. CREATE, ALTER ve DROP gibi komutlar DDL'ye dahildir.
// Veri İşleme Dili "Data Manipulation Language" (DML): Veritabanındaki verileri yönetmek için kullanılır. INSERT, UPDATE ve DELETE gibi komutlar DML'nin bir parçasıdır.
// Veri Kontrol Dili "Data Control Language" (DCL): Veritabanında erişimi ve izinleri kontrol etmek için kullanılır. GRANT ve REVOKE gibi komutlar DCL'nin bir parçasıdır.


/* ----------------------- 2. NOSQL'in açılımı nedir? ----------------------- */


// NoSQL, "Sadece SQL Değil" anlamına gelir. Bu, geleneksel ilişkisel veritabanı yönetim sistemine (RDBMS) dayanmayan bir veritabanı yönetim sistemlerinin türüdür. NoSQL veritabanları, yapısal olmayan veya yarı yapısal verileri işlemek üzere tasarlanmıştır ve çeşitli veri depolama ve alım ihtiyaçları için uygundur.


/* ----- 3. Express.js neden mongoDB kullanıyor, nedenleri ne olabilir? ----- */


// Express.js, popüler bir Node.js web uygulama çerçevesi, çeşitli nedenlerle MongoDB'i kullanır:

// JSON Uyumluluğu: MongoDB'in belge odaklı doğası ve BSON (Binary JSON) desteği, JavaScript ve Express.js ile doğal bir uyum içindedir, çünkü bu teknolojiler JSON verileriyle iyi çalışırlar.

// Ölçeklenebilirlik: MongoDB, artan veri yüklerini ve trafiği işlemek için yatay olarak kolayca ölçeklenebilen bir NoSQL veritabanıdır, bu da Express.js ile oluşturulan web uygulamaları için uygundur.

// Esneklik: MongoDB'in şema eksikliği, geliştiricilere uygulamanın evrildikçe veri yapısını kolayca adapte etmelerine olanak tanır, bu da hızlı geliştirme döngüsüne sahip web uygulamalarında faydalıdır.

// Hız: MongoDB, yüksek okuma ve yazma performansıyla bilinir, bu da verilerin hızlı bir şekilde alınmasının ve depolanmasının önemli olduğu web uygulamaları için önemlidir.

// Topluluk ve Ekosistem: MongoDB, güçlü bir topluluğa ve araçlarla kütüphanelerin zengin bir ekosistemine sahiptir, bu da Express.js kullanan web geliştiricileri için popüler bir tercih haline getirir.



/* -------- 5. MVC yapısını aşağıdaki hikayeyle eşleştirebilir misiniz? -------- */


// Hangisi denetleyici, hangisi model, hangisi görünüm?
// Bir restorana gittiğinizi varsayalım. Her ne kadar bunu yapabiliyor olsanız bile, mutfakta yemek pişirmeyeceksiniz.
// Ev. Bunun yerine işletmeyi ziyaret edip garsonun gelmesini beklersiniz.
// Garson şimdi yanınıza yaklaşıyor ve siz de akşam yemeği siparişinizi veriyorsunuz. Sunucu yalnızca şunu yazdı:
// yemek siparişinizin ayrıntıları; sizin kim olduğunuzun ve ne arzuladığınızın farkında değil.
// Garson daha sonra mutfağa doğru ilerliyor. Sunucu yemeğinizi mutfakta hazırlamıyor.
// Yemeğiniz aşçı tarafından hazırlanır. Siparişiniz ve masa numaranız garsona verilmektedir.
// Yemek yap, sonra senin için yemek hazırla. Yemek kendisi tarafından malzemeler kullanılarak hazırlanır. diyelim ki sen
// sebzeli sandviç seçeneğini seçin. Daha sonra ekmeği, domatesi, patatesi almak için buzdolabını kullanıyor.
// ihtiyacı olan kırmızı biber, soğan, biraz ve peynir.
// Şef, yemeğin son parçasını garsona verir. Bu yemeği mutfağın dışına taşımak artık garsonun işi
// sorumluluk.
// Sunucu artık sipariş ettiğiniz yiyeceklerin ve bunların nasıl servis edileceğinin farkındadır.

// Model: Hikayede "aşçı," Model'i temsil eder. Aşçı, yemeği hazırlamaktan sorumludur, bu da bir uygulamadaki veri ve iş mantığına karşılık gelir. Model, veri depolama, alımı ve işlemeyi ele alır.

// View: "Garson," Görünüm ile ilişkilendirilebilir. Garson, müşteriden siparişi alır, aracı rol oynar ve yemeği müşteriye servis eder. Benzer şekilde, MVC mimarisinde Görünüm, veriyi kullanıcıya sunma ve kullanıcı etkileşimlerini ele alma sorumluluğundadır.

// Controller: Bu benzetimde "müşteri," Denetleyici'yi temsil edebilir. Müşteri, siparişi vererek etkileşimi başlatır, bu da kullanıcı girişi ve eylemlerle uyumlu bir rol oynar. Müşteri yemeği doğrudan hazırlamaz (aşçı gibi) veya servis etmez (garson gibi) ancak neler olacağını belirlemede rol oynar ve etkileşimin akışını kontrol eder.

// Bu nedenle, MVC yapısında:

// Model (Aşçı), veri ve iş mantığını yönetir.
// View (Garson), veriyi kullanıcıya sunar ve kullanıcı etkileşimlerini ele alır.
// Controller (Müşteri), eylemleri başlatır ve etkileşimin akışını kontrol eder.


 /* ---------- 4. Aşağıdaki tablolardaki verileri MongoDb'de olustur --------- */

// Table name "post"

// post_id    title
// 1          amazing duo Express.js and MongoDb
// 2          MVC architecture

// Table name "comment"

// comment_id post_id author content
// 1 1 Qadir I agree with you
// 2 1 Victor Their communities are very good
// 3 2 Rafe Django use MVT
// 4 1 Cedric Good post



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
  db.people.insertMany([{ "id": 1, "user_id": "user1", "age": 25, "status": "A" },{ "id": 2, "user_id": "user2", "age": 30, "status": "B" },{ "id": 3, "user_id": "user3", "age": 35, "status": "A" },{ "id": 4, "user_id": "user4", "age": 40, "status": "C" },{ "id": 5, "user_id": "user5", "age": 45, "status": "A" }])


/* -------------------------------------------------------------------------- */
/*               1. MongoDB equivalent of SELECT * FROM people:               */
/* -------------------------------------------------------------------------- */
 
db.people.find({})


/* -------------------------------------------------------------------------- */
/*      2. MongoDB equivalent of SELECT id, user_id, status FROM people:      */
/* -------------------------------------------------------------------------- */
 
db.people.find({}, { "id": 1, "user_id": 1, "status": 1, "_id": 0 })


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
 
db.people.find({ "user_id": /.*bc.*/ })

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

/* -------------------------------------------------------------------------- */
/*         16.MongoDB equivalent of SELECT COUNT(user_id) FROM people:        */
/* -------------------------------------------------------------------------- */
 
db.people.countDocuments({ "user_id": { $exists: true } })

/* -------------------------------------------------------------------------- */
/*    17.MongoDB equivalent of SELECT COUNT(*) FROM people WHERE age > 30:    */
/* -------------------------------------------------------------------------- */
 
db.people.countDocuments({ "age": { $gt: 30 } })

/* -------------------------------------------------------------------------- */
/*        18.MongoDB equivalent of SELECT DISTINCT(status) FROM people:       */
/* -------------------------------------------------------------------------- */
 
db.people.distinct("status")

/* -------------------------------------------------------------------------- */
/*           19.MongoDB equivalent of SELECT * FROM people LIMIT 1:           */
/* -------------------------------------------------------------------------- */
 
db.people.find({}).limit(1)

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
//   P 


db.createCollection("people")
db.people.createIndex({ "id": 1 }, { unique: true })

db.people.insertOne({
   "user_id": "YourUserID",
   "age": 30,
   "status": "A"
})



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