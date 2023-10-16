
SELECT * FROM employees;
// Belirli bir departmanda çalışanları seçme:

SELECT * FROM employees WHERE department = 'Sales';
// Belirli bir maaş aralığındaki çalışanları seçme:


SELECT * FROM employees WHERE salary BETWEEN 30000 AND 50000;
// Belirli bir tarihten sonraki siparişleri seçme:

SELECT * FROM orders WHERE order_date > '2023-01-01';
// Belirli bir müşterinin siparişlerini seçme:


SELECT * FROM orders WHERE customer_id = 12345;
// Belirli bir şehirdeki müşterileri seçme:


SELECT * FROM customers WHERE city = 'New York';
// Stokta sadece belirli bir miktarın üzerinde ürünleri seçme:


SELECT * FROM products WHERE stock_quantity > 50;
// Belirli bir kategoriye ait ürünleri seçme:

SELECT * FROM products WHERE category = 'Electronics';
