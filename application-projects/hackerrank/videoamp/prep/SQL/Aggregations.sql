-- Query a count of the number of cities in CITY having a Population larger than 100,000.
SELECT 
COUNT(ID)
FROM CITY
WHERE POPULATION>100000;

-- Query the total population of all cities in CITY where District is California.
SELECT 
SUM(POPULATION)
FROM CITY
WHERE  District="California";

-- Query the average population of all cities in CITY where District is California.
SELECT 
AVG(POPULATION)
FROM CITY
WHERE  District="California";

-- Query the average population for all cities in CITY, rounded down to the nearest integer.
SELECT 
FLOOR(AVG(POPULATION))
FROM CITY;

-- Query the difference between the maximum and minimum populations in CITY.
SELECT 
MAX(POPULATION) - MIN(POPULATION)
FROM CITY;

-- Remove all 0's and see what the error would be
SELECT
AVG(Salary) - AVG(CONVERT(REPLACE(CONVERT(Salary,char), "0", ""),unsigned integer))
from EMPLOYEES;