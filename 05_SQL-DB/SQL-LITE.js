
SELECT * FROM employees;
// Select employees in a specific department:

SELECT * FROM employees WHERE department = 'Sales';
// Select employees in a specific salary range:

SELECT * FROM employees WHERE salary BETWEEN 30000 AND 50000;
// Selecting orders after a specific date:

SELECT * FROM orders WHERE order_date > '2023-01-01';
// Selecting orders from a specific customer:

SELECT * FROM orders WHERE customer_id = 12345;
// Selecting customers from a specific city:

SELECT * FROM customers WHERE city = 'New York';
// Selecting only products above a certain quantity in stock:

SELECT * FROM products WHERE stock_quantity > 50;
// Select products belonging to a specific category:

SELECT * FROM products WHERE category = 'Electronics';


-- BNF Form

/* SELECT fields/column names FROM tablename */
-- songle line comment

Select Title 
FROM albums;

SELECT FirstName, LastName
FROM employees;

-- tüm colonlar
SELECT * FROM employees;
SELECT * FROM albums;

-- DISTINCT  >> Benzer olanlari almiyor

SELECT DISTINCT Country,City FROM customers;

-- WHERE >> Belli sarta uyanlar

SELECT * FROM customers WHERE Country = "Brazil";
SELECT * FROM customers WHERE Country != "Brazil";  
SELECT * FROM customers WHERE Country <> "Brazil";  -- != ile <> ayni anlama geliyor

SELECT * FROM invoices WHERE Total > 17;
SELECT Composer,Name from tracks where Composer ="AC/DC";

-- LIMIT  >> satir sayisi limiti

SELECT * FROM tracks limit 3;
SELECT Composer,Name from tracks where Composer ="AC/DC" limit 5;
 
-- order by >> siralama

SELECT * FROM tracks order by name;  -- default kücükten büyüge
SELECT * FROM tracks order by name desc;  -- default  büyükten kücüge

-- AND / OR / NOT

SELECT * FROM invoices WHERE BillingCountry = "Germany" and BillingCity = "Berlin";
SELECT * FROM invoices WHERE BillingCountry = "Germany" or BillingCity = "Paris";

-- BETWEEN / NOT BETWEEN

SELECT * FROM invoices WHERE Total >= 5 AND Total <= 10;
SELECT * FROM invoices WHERE Total >= 10 AND Total <= 5; -- Mantik hatasinda hicbir sey gözükmez- Veri yok
SELECT * FROM invoices WHERE Total BETWEEN 5 and 10;
SELECT * FROM invoices WHERE Total BETWEEN 10 and 5; -- Mantik hatasinda hicbir sey gözükmez- Veri yok
SELECT * FROM invoices WHERE Total NOT BETWEEN 5 and 10;

--IN / NOT IN

SELECT * FROM invoices WHERE BillingCountry  IN("Berlin", "Germany");     -- SELECT * FROM invoices WHERE BillingCountry = "Germany" or BillingCity = "Berlin";
SELECT * FROM invoices WHERE BillingCountry  NOT IN("Berlin", "Paris");  -- Berlin ve paris disinda kesilen faturalar

-- LIKE  >> _ tek karakter % birden cok karakter

SELECT * FROM artists WHERE Name like "A%"; -- A ile baslayanlar
SELECT * FROM artists WHERE Name like "%A"; -- Sonu A ile bitenler
SELECT * FROM artists WHERE Name like "%zep%"; -- icinde zep olan
SELECT * FROM artists WHERE Name like "%zep%"; -- icinde zep olan
select * from artists where name like "_ccept"; -- tek karakter eksik _ ile baslayan 
select * from artists where name like "Ac_ept";
select * from artists where name like "Ac_e%";


--------------------------------------------------------------------------------------------------------------------------------------------------------------


 -- SELECT Aggregate_functions(column_name) from tablename
-- Bu fonksiyonlar tek bir deger döndürür
-- SUM, AVG, MIN, MAX, COUNT

SELECT total FROM invoices;
SELECT SUM(total) FROM invoices;
SELECT SUM(total), BillingCity FROM invoices; -- bu sekilde mantiksiz, en üsteki sehir ismini getirdi
SELECT SUM(total) as Toplam_Fatura_Tutari FROM invoices;
SELECT name as artistName from artists; -- as ile tablo ismini kendimiz verebiliyoruz
SELECT min(total) from invoices;
SELECT SUM(total) as toplamFatura, MIN(total) as enDüsükFatura, MAX(total) as enYüksekFatura, AVG(total) as ortalamaFatura from invoices;
SELECT count(BillingAddress) from invoices; -- Toplam satir sayisi
SELECT count(BillingState) from invoices; -- Null degerler varsa o sütun icinde, count o satirlari saymaz
SELECT avg(total) from invoices;
SELECT round(avg(total),3) from invoices  -- round ..,5 yukariya yuvarlama, ..,4 asagiya yuvarlama



--------------------------------------------------------------------------------------------------------------------------------------------------------------

 
-- GROUP BY / Gruplama
SELECT BillingCountry,sum(total) as Ulke_Icin_Fatura_Toplami from invoices group by BillingCountry; -- Herbir bestecinin toplam parca sayisi

SELECT name,count(name) as toplamBesteciSayisi from tracks group by Composer;

-- where and groupby  -- ilk once where, sonra gruplama calisti

SELECT * FROM tracks where Milliseconds;

SELECT BillingCity, sum(total) FROM invoices WHERE BillingCountry="Germany" group by BillingCity; -- Almanya da herbir sehir icin kesilen toplam fatura

-- HAVING >> WHERE gibi sart kosulu olusturma Ama where ile gruplamadan once

SELECT * from invoices where total > 10;
SELECT BillingCity, count(*) FROM invoices group by BillingCity HAVING sum(total)>50;
-- 3 den fazla müsteriye sahip sehirler
SELECT Country FROM customers group by Country HAVING count(FirstName) > 3; 


--------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Subquery -- Ic ice tablo erisimi

-- en yüksek faura keslien müsterinin bilgisi

SELECT CustomerId, max(total) from invoices;
SELECT CustomerId from invoices order by total desc limit 1;

SELECT * from customers where CustomerId=(SELECT CustomerId from invoices order by total desc limit 1);

-- customer icinde roberto ile ayni ülkeden olan müsteriler
SELECT Country FROM customers WHERE FirstName="Roberto";

SELECT * FROM customers WHERE Country IN (SELECT Country FROM customers WHERE FirstName="Mark");

-- tracks icinde kac tane sarki pop müzik türünde

SELECT GenreId from genres where name="Pop";

SELECT count(*) from tracks where GenreId=(SELECT GenreId  from genres where name="Pop");

 -- pop müzigindeki parcalarin albüm isimleri

SELECT DISTINCT(AlbumId) from tracks where GenreId=(SELECT GenreId  from genres where name="Pop");

SELECT * from albums where AlbumId IN (SELECT DISTINCT(AlbumId) from tracks where GenreId=(SELECT GenreId  from genres where name="Pop"));

-------------------------------------------------------------------------------------------------------------------------------------

-- INNER JOIN

SELECT * FROM albums JOIN artists on albums.ArtistId = artists.ArtistId;
SELECT * FROM artists JOIN albums on albums.ArtistId = artists.ArtistId;

-- Fatura kime kesildi
SELECT customers.FirstName, invoices.total from invoices join customers on invoices.CustomerId=customers.CustomerId;

--her parcanintürünü getir
SELECT tracks.Name,genres.Name from tracks join genres on tracks.GenreId = genres.GenreId;

-- playlist tablosuna dahil edilmis parcalar hangi playlistte

SELECT *from playlist_track join playlists on playlists.PlaylistId = playlist_track.PlaylistId;

--playlist_tracktaki parcalarin isimleri

SELECT playlist_track.PlaylistId, tracks.name from playlist_track join tracks on tracks.TrackId = playlist_track.TrackId;

--playlist_tracktaki hem playlist hem de parca isimlerini getir

SELECT tracks.Name, playlists.name from playlist_track
join playlists on playlist_track.PlaylistId = playlists.PlaylistId 
JOIN tracks on playlist_track.TrackId=tracks.TrackId;

--her bir parcanin album isimini ve tür ismini getirin
SELECT tracks.Name as Parca_Ismi, albums.Title, genres.Name as Tür_Adi from tracks 
join albums on tracks.AlbumId = albums.AlbumId 
JOIN genres on tracks.GenreId=genres.GenreId 
join media_types on tracks.MediaTypeId=media_types.MediaTypeId;

--LEFT JOIN

select customers.FirstName,customers.LastName, invoices.InvoiceId from customers LEFT JOIN invoices on customers.CustomerId = invoices.CustomerId;

--20 den büyük faturalarin müsteri isimleri

SELECT customers.FirstName, invoices.InvoiceId, invoices.total FROM invoices JOIN customers on invoices.CustomerId = customers.CustomerId where total > 20;


-- INSERT / KAYIT EKLEME

INSERT INTO genres (GenreId,Name) VALUES (27, "Turk POP");
INSERT INTO genres VALUES (29, "Turk Sanat");
INSERT INTO genres VALUES (30, "Germen Volk"),(31, "Germen Pop");

-- UPDATE / güncelleme

UPDATE genres SET Name = "Turk Halk" WHERE GenreId = 28;
UPDATE genres SET Name = "Arabesk" WHERE GenreId = 29;
UPDATE employees SET Address="Karl Marks Strasse"  where FirstName="Andrew" ; -- Where kismi yazilmazsa tüm satiri ayni deger atiyor

--DELETE / Silme

DELETE from genres where GenreId=31;
