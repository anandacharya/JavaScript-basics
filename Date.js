const now = new Date();
const date1 = new Date('June 9 2019 08:00');
const date2 = new Date(2019, 4, 11, 9, 0);
//Jan = 0
//Dec = 11
console.log(now);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.toDateString());
console.log(date1.toDateString());
console.log(now.toISOString());
console.log(date2.toDateString());
console.log(date2.toDateString());