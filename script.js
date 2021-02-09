function getSeason(date) {
  date = new Date(date);
  console.log(date);
  let month = date.getMonth()
  console.log(month);
    
    if (month >=0 && month < 3) console.log('winter');
    if (month >= 3 && month < 6) console.log('spring');
    if (month >= 6 && month < 9) console.log('summer');
    if (month >= 9 && month < 12) console.log('authom');

    return false;
};

console.log(typeof new Date(1, 6, 13, 23, 45, 11, 500));