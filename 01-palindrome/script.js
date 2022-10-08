 function palindrome(str) {
     str = str.toLowerCase();
     return str === str.split('').reverse().join('');

 }


 // Протестируйте решение, вызывая функцию с разными аргументами:

 // должно быть true
 // true
 console.log(palindrome('топот'));
 console.log(palindrome('Saippuakivikauppias'));
 console.log(palindrome('привет')); // false

 /*
  * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
  * но пробелы и знаки препинания не учитывает. Например:
  * 
  * palindrome('О, лета тело!'); // true
  * 
  */