-- Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
SELECT
SUM(CITY.POPULATION)
FROM CITY INNER JOIN COUNTRY
ON CITY.COUNTRYCODE = COUNTRY.CODE
WHERE COUNTRY.CONTINENT = "Asia";

/*
Given the CITY and COUNTRY tables, query the names of all the continents
(COUNTRY.Continent) and their respective average city populations
(CITY.Population) rounded down to the nearest integer.
*/
SELECT
COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION))
FROM CITY INNER JOIN COUNTRY
ON CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT;

/*
Ketty gives Eve a task to generate a report containing
  -three columns: Name, Grade and Mark.
  -The report must be in descending order by grade -- i.e. higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically.
  -Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.
*/

SELECT
IF(GRADES.GRADE<8,
   CONCAT("NULL ", GRADES.GRADE, " ", STUDENTS.MARKS),
   CONCAT(STUDENTS.NAME, " ", GRADES.GRADE, " ", STUDENTS.MARKS)
)
FROM STUDENTS INNER JOIN GRADES
ON STUDENTS.MARKS<=GRADES.MAX_MARK AND STUDENTS.MARKS>=GRADES.MIN_MARK
ORDER BY GRADES.GRADE DESC, STUDENTS.NAME;