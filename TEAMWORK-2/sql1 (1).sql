-- Cevap 1
-- SELECT Name, Composer
-- SELECT *
-- FROM Track;

-- Cevap 2
-- SELECT *
-- FROM Track;

-- Cevap 3
-- SELECT DISTINCT Composer
-- FROM Track;

-- Cevap 3
-- SELECT DISTINCT AlbumId, MediaTypeId
-- FROM Track;

-- Cevap 4
-- SELECT DISTINCT AlbumId, MediaTypeId
-- FROM Track;

-- Cevap 5
-- SELECT Name, TrackId, Composer
-- FROM Track
-- WHERE Composer = "Jorge Be";

-- Cevap 6
-- SELECT *
-- FROM Invoice
-- WHERE total > 25;

-- Cevap 7
-- SELECT *
-- FROM Invoice
-- WHERE total < 15
-- LIMIT 5;

-- Cevap 8
-- SELECT *
-- FROM Invoice
-- WHERE total > 10
-- ORDER BY total DESC
-- LIMIT 2;

-- Cevap 9
-- SELECT *
-- FROM Invoice
-- WHERE BillingCountry not in ('Canada')
-- ORDER BY total ASC
-- LIMIT 10;

-- Cevap 10
-- SELECT InvoiceId, CustomerId, total
-- FROM Invoice
-- ORDER BY CustomerId ASC, Total DESC;

-- Cevap 11
-- SELECT Name
-- FROM Track
-- WHERE Name like 'b%s';

-- Cevap 12
-- SELECT MAX(InvoiceDate) AS NEWSDATE
-- FROM Invoice
-- WHERE InvoiceDate >=  '2008-01-01' AND InvoiceDate <=  '2011-12-31';
-- WHERE  InvoiceDate  BETWEEN '2008-01-01' AND '2011-12-31';

-- Cevap 13
-- SELECT FirstName, LastName, Country
-- FROM Customer
-- WHERE Country = 'Norway' or Country = 'Belgium';

-- Cevap 14
-- SELECT FirstName, LastName, Country
-- FROM Customer
-- WHERE Country = 'Norway' or Country = 'Belgium';

-- Cevap 15
-- SELECT Composer
-- FROM Track
-- WHERE Composer like '%ZAPPA%';

-- Cevap 15
-- SELECT count (*)
-- FROM Track;
-- SELECT count (*)
-- FROM Invoice;

-- SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album 
-- FROM Artist AS t1 
-- INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli' ORDER BY t1.ArtistId 


-- Cevap 16
-- SELECT count (CustomerId)
-- FROM Customer;

-- Cevap 17
-- SELECT AlbumId, count(TrackId) as parca_sayisi
-- FROM Track
-- GROUP by AlbumId
-- ORDER by parca_sayisi DESC;

-- Cevap 18
-- SELECT name, min(Milliseconds) AS  min , max(Milliseconds) as max
-- FROM Track;

-- Cevap 19
-- oratalama biliniyorsa
-- SELECT *
-- FROM track
-- WHERE Milliseconds < 393599.212103911;
--  
-- SELECT * 
-- FROM track
-- WHERE Milliseconds < (
-- SELECT AVG(Milliseconds) 
-- FROM track);

 -- Cevap 20
-- SELECT Composer, COUNT(*) 
-- FROM track 
-- GROUP BY Composer; 
--  
-- SELECT Composer, COUNT(Composer)
-- FROM track
-- GROUP BY Composer; 
--  
-- SELECT Composer, COUNT(Composer) 
-- FROM track
-- WHERE Composer IS NOT NULL
-- GROUP BY Composer;

 -- Cevap 21
-- SELECT track.Name, genre.Name 
-- FROM track
-- JOIN genre
-- ON track.GenreId = genre.GenreId; 
--  
-- SELECT t.Name, g.Name 
-- FROM track t 
-- JOIN genre g 
-- ON t.GenreId = g.GenreId;

 -- Cevap 22
-- SELECT * 
-- FROM artist 
-- LEFT JOIN album
-- ON album.ArtistId = artist.ArtistId;

 -- Cevap 23
 
--  SELECT track.AlbumId, album.Title, 
-- MIN(track.Milliseconds) AS min_duration 
-- FROM track 
-- JOIN album
-- ON track.AlbumId = album.AlbumId 
-- GROUP BY track.AlbumId, album.Title 
-- ORDER BY min_duration DESC;
 
 -- Cevap 24
-- SELECT album.Title, SUM(track.Milliseconds) AS total_duration 
-- FROM track
-- JOIN album ON track.AlbumId = album.AlbumId 
-- GROUP BY track.AlbumId 
-- HAVING total_duration > 3600000
-- ORDER BY total_duration DESC;

 -- Cevap 25
SELECT Trackid, Name, Albumid 
FROM track
WHERE albumid IN ( 
SELECT AlbumId 
FROM album
WHERE Title IN ('Prenda Minha', 'Heart of the Night', 'Out Of Exile'));