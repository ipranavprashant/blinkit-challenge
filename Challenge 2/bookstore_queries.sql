--Retrieve Top-Selling Books:
SELECT b.title, a.author_name, SUM(od.quantity) AS total_sold
FROM Books b
JOIN Order_Details od ON b.book_id = od.book_id
JOIN Authors a ON b.author_id = a.author_id
GROUP BY b.title, a.author_name
ORDER BY total_sold DESC
LIMIT 10; -- to retrieve the top 10 best-selling


--Total Sales Revenue for a Given Period:
SELECT SUM(od.quantity * od.unit_price) AS total_revenue
FROM Orders o
JOIN Order_Details od ON o.order_id = od.order_id
WHERE o.order_date >= '2024-01-01' AND o.order_date < '2024-02-01';  --dates are again hypothetical, can be changed based on the requirements

