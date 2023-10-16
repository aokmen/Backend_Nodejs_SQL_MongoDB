
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
