
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
