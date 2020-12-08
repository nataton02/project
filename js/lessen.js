"use strict";
/* Переменные
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
  a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';

{
  var result = 50;
}
console.log(result);
*/


// Типы данных--------------------------------------------
/*
let number = 4;   //number
console.log(4/0);
console.log('string' * 9);

const persone = "Alex";   //string

const bool = true;//false  //boolean

//console.log(something);  null

let und;
console.log(und); //undefined

const obj = {  //обьект
  name: "John",
  age: 25,
  isMarried: false
};
console.log(obj.name); //1 способ свойства обьекта
//console.log(obj["name"]); // 2 способ

let arr = ['plum.pmg', 'orange.jpg', 6, 'apple.bmp', {}, []];  //массив
console.log(arr[1]);
*/


/*
//Простое общение с пользователем---------------------------------

//alert('Hello!');

//const result = confirm("Are you here?"); //дает ответ на вопрос в виде да/нет
//console.log(result);

//const answer = +prompt("Вам есть 18?", "18");// запрашивает конкретный ответ; команда + меняет тип данных
//console.log(typeof(answer)); узнать тип данных
//console.log(answer + 5);

const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");
//document.write(answers); //покажет ответы в браузере(старая версия)
console.log(typeof(answers));
*/

/*
// Интерполяция------------------------------------------------------------------
const category = 'toys';
//console.log('https://someurl.come/' + category + '/' + '5');//простая запись
console.log(`https://someurl.com/${category}/5`);// интерполяция(косые ковычки)

const user = 'Ivan';
alert(`Привет, ${user}`);
*/

/*
// 9. Опепаторы в JS--------------------------------------------------------------
let incr = 10,
    decr = 10;
//incr++; //оператор инкеримента - увеличит значение на 1; постфиксная форма
//decr--; //оператор декримента - уменьшит значение на 1; постфиксная форма
//++incr; префиксная форма
//--decr; префиксная форма
//console.log(incr);
//console.log(decr);

//console.log(incr++);// отображаем сразу инкримент (не меняется значение)
//console.log(decr--);// отображаем сразу декримент (не меняется значение)

console.log(++incr);// отображаем сразу инкримент (меняется значение)
console.log(--decr);// отображаем сразу декримент (меняется значение)

console.log(5%2); //возвращает остаток от деления двух чисел

//console.log(2*4 == 8); //оператор равенства
console.log(2*4 == '8'); //можно сравнивать с числовым значением строки
console.log(2*4 === '8');// строгое равенство (===), только число с числом

//const isChecked = true,
      //isClose = true;
//console.log(isChecked && isClose);// true орепатор и - все значения верны

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);// false орепатор и - какое-то значение не верно
console.log(isChecked || isClose);//true оператор или - одно из значениий true
console.log(!isChecked || isClose);//оператор отрицания-меняет значения на противоположные
console.log(2 + 2 * 2 != 8);// оператор неравенства
console.log(2 + 2 * 2 !=='6');// строгое сравнение и по типу данных
*/


//Система контроля версий Git и сервис GitHub-------------------------------------



//-----------------------13. Условия-----------------------------------------
/*if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error');
}

const num = 50;
if (num < 50) {
  console.log('Error!');
} else if (num > 50) {
  console.log('Много!');
} else {
  console.log('Ok!');
}
(num === 50) ? console.log('Ok!') : console.log('Error!'); //термальный оператор

const num2 = 60;
switch (num2) {
  case 59:
    console.log('Неверно!');
    break;
  case 100:
    console.log('Неверно!');
    break;
  case 60:
    console.log('В точку!');
    break;
  default:
    console.log('Не в этот раз!');
    break;
}
*/

/*
//---------------------------------14. Циклы -----------------------------------
let num = 50;          // 1 option
while (num <= 55) {
  console.log(num);
  num++;
}

let num2 = 60;      // 2 option
do {
  console.log(num2);
  num2++;
}
while (num2 <= 65);

for (let i = 1; i < 8; i++) {
  console.log(num);
}

let num3 = 100;
for (let i = 2; i < 8; i++) {
  console.log(num3);
  num3++;
}

for (let i = 1; i < 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}
*/


//---------------16. Функции, стрелочные функции (ES6)------------------------------
/*
function schowFirstMessage() {
  console.log('Hello world!');
}
schowFirstMessage();

let num = 20;                    // глобальная переменная
function schowFirstMessage2(text) {
  console.log(text);
  num = 10;                      // изменяем значение глобальной переменной
}
schowFirstMessage2('Hello World!');
console.log(num);

function schowFirstMessage3(text) {
  console.log(text);
  let num = 10;                 // локальная переменная   
}
console.log(num);

function calc(a, b) {
  return (a + b);              //заканчивает функцию и возвращает результат наружу
}
console.log(calc(3, 4));
console.log(calc(6, 5));
console.log(calc(10, 8));

function ret() {              // function declaration
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {    // function expression
  console.log('Hello!');
};
logger();

const calc2 = (a, b) => a + b;   //стрелочная функция 

const calc3 = (a, b) => {     //стрелочная функция с множеством дейсвий
  console.log('1');
  return a + b;
};
*/

