
const btn = document.querySelector('.btn');
btn.addEventListener('click', getDays);
function getDays() {
   const birthday = document.getElementById('date');
   const birthdayMilliseconds = Date.parse(birthday.value);
   const currentDate = +new Date();
   const resultMilliseconds = currentDate - birthdayMilliseconds;
   let daysPassed = Math.floor(resultMilliseconds / (1000 * 3600 * 24));
   if (resultMilliseconds >= 0) {
      daysPassed = 365 - daysPassed;
   }
   else {
      daysPassed = Math.abs(daysPassed);
   }
   const resultOut = document.querySelector('.result');



   let days;
   let last_num = daysPassed % 10;
   if (last_num == 1) {
      days = 'день'
   };
   if ([2, 3, 4].includes(last_num)) { days = 'дня' };
   if ([5, 6, 7, 8, 9, 0].includes(last_num)) { days = 'дней' };
   if (daysPassed == 11 || daysPassed == 12 || daysPassed == 13 || daysPassed == 14 || daysPassed == 111 || daysPassed == 112 || daysPassed == 113 || daysPassed == 114 || daysPassed == 211 || daysPassed == 212 || daysPassed == 213 || daysPassed == 214 || daysPassed == 311 || daysPassed == 312 || daysPassed == 313 || daysPassed == 314) {
      { days = 'дней' };
   }
   resultOut.textContent = `До вашего дня рождения ${daysPassed} ${days}`;

   if (birthday.value == "") {
      resultOut.classList.add('red');
      resultOut.textContent = `Пожалуйста, введите дату вашего рождения`
   }
   else {
      resultOut.classList.remove('red');
   }
}
