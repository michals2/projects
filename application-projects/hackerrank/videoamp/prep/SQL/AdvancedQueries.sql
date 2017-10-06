-- Compare columns and performing logic on value
SELECT 
CASE 
  WHEN A+B>C AND A+C>B AND B+C>A THEN
    CASE
      WHEN A=B AND B=C THEN 'Equilateral'
      WHEN A=B OR B=C OR A=C THEN 'Isosceles'
      WHEN A!=B OR B!=C OR A!=C THEN 'Scalene'
    END
  ELSE 'Not A Triangle'
END
FROM TRIANGLES;

SELECT
CASE
  WHEN Occupation='Actor' THEN CONCAT(Name, "(A)")
  WHEN Occupation='Doctor' THEN CONCAT(Name, "(D)")
  WHEN Occupation='Professor' THEN CONCAT(Name, "(P)")
  WHEN Occupation='Singer' THEN CONCAT(Name, "(S)")
END
FROM OCCUPATIONS
ORDER BY Name ASC;

SELECT
CONCAT("There are a total of ", COUNT(OCCUPATION), " ", LOWER(OCCUPATION),"s.")
FROM OCCUPATIONS
GROUP BY OCCUPATION
ORDER BY COUNT(OCCUPATION) ASC, OCCUPATION ASC;