let date = new Date;
console.log(date);  // Sat Aug 22 2026 01:58:41 GMT+0300
console.log(date.getFullYear()); // 2026 (year)
console.log(date.getDate()); // 22 (day)
console.log(date.getMonth()); // 7
console.log(date.setFullYear(2007)) // 1187739272748 (milli seconed)
console.log(date.getFullYear(1187739272748)); // 2007
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
console.log(`the Hour : ${hours} , The Minute : ${minutes}`);




