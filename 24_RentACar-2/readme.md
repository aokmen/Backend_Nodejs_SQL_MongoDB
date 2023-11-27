# RENT A CAR API

# JWT ile Token Farklar
1-Token veri tabani üzerinde calisiyor. User in dogru tokeni kullanilip- madigini veri tabani üzerinden kontrol ediyor. JWT de icinde mevcut
2-Klasik Token bir ömrü yok. Ama JWT de 30 dk 3 gün siniri var



# 1.Adim
Her User icin bir Token tablosuna ihtiyacimiz olacak, token olusturacagiz. Header da authorization ile alinan token ile user taninacak

Token Model, Token Controller, Token Route
Sync() ile get users, cars, reservations api kontrolu

# 2.Adim
1- auth controller ile login olusturma  >> user Model ve Token Model den veri aliniyor
2- auth route
3- auth controller ile logout olusturma 


# Authentication ve Authorization

# 3.Adim

middleware > authentication.js

































### ERD:

![ERD](./erdRentACarAPI.png)

--- 

### Rent A Car Project 

- Customers;
  - can select start and end date and see the list of available cars on selected dates. It is not allowed to choose past dates.
  - can choose a car on the list and reserve that car, but can not reserve more than one car on a selected time period,
  - can not reserve cars which are reserved by other customers on selected time period.
  - can see the list of their reservations including past ones.
  - can list, create, read their reservations.
  - can not update, delete reservations.

- Admins;
  - can make CRUD operations on Car table,
  - can make CRUD operations on Customer (User) table,
  - can make CRUD operations on Reservation table,

- It can be createdId and updatedId in Car model.
- There will be searching, sorting and pagination capabilities on list views.


---

###  Araç Kiralama Projesi

* Müşteriler:
  * Tarih aralığı belirtip müsait araç listeleyebilir. Geçmiş tarihler listelenmez.
  * Seçilen tarih aralığında araç rezerve edilebilir, ancak aynı tarih aralığında ikinci bir araç kiralayamaz.
  * Rezerve edilmiş bir aracı, o tarihlerde rezerve edemez.
  * Rezervasyonlarını listeyebilir, ekleyebilir, okuyabilir.
  * Rezervasyonlarını güncelleyemez, silemez.
* Yöneticiler:
  * Araba tablosu CRUD işlemleri
  * Müşteri (User) tablosu CRUD işlemleri
  * Reservasyon tablosu CRUD işlemleri

* Araba tablosunda createdId ve updatedId olabilir.
* Listeleme ekranlarında arama, sıralama ve sayfalama imkanları olacaktır.

---

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    readme.md
    src/
        config/
            dbConnection.js
            swagger.json
        controllers/
            auth.js
            car.js
            reservation.js
            token.js
            user.js
        helpers/
            passwordEncrypt.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            car.js
            reservation.js
            token.js
            user.js
        routes/
            auth.js
            car.js
            document.js
            index.js
            reservation.js
            token.js
            user.js
```