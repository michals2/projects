function timeConversion(s) {
  // Complete this function
  // console.log(s);
  const PM = s.slice(8) === "PM";
  // console.log(PM);
  const hour = parseInt(s.slice(0, 2));
  // console.log(hour);
  if (PM) return `${(hour + 12).toString()}${s.slice(2, 8)}`;
  return s.slice(0, 8);
}

console.log(timeConversion("12:05:45AM"));
