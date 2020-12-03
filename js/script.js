"use strict";
/* 12. Создание приложения по учету просмотренных фильмов--------------------------
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilm1 = prompt('Один из ваших просмотренных фильмов?', '');
const filmRating1 = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из ваших просмотренных фильмов?', '');
const filmRating2 = prompt('На сколько оцените его?', '');
// Option 1
personalMovieDB.movies[`'${lastFilm1}'`] = filmRating1; //с интерполяцией
personalMovieDB.movies[lastFilm2] = filmRating2;
console.log(personalMovieDB);

// Option 2
const movies = {
  [`'${lastFilm1}'`]: filmRating1, // с интерполяцией
  [lastFilm2]: filmRating2
};
personalMovieDB.movies = movies;
console.log(personalMovieDB);
*/

 /*На примере семьи
const family = {
  father: 'Alex',
  mother: 'Natalia',
  children: {}
};
const childGender1 = prompt("Какого пола ваш ребенок?", ""),
      childName1 = prompt("Как зовут вашего ребенка?", ""),
      childGender2 = prompt("Какого пола ваш ребенок?", ""),
      childName2 = prompt("Как зовут вашего ребенка?", "");

// 1 option
const children = {
  [childGender1]: childName1,
  [childGender2]: childName2
};
family.children = children;
console.log(children);

// 2 option
family.children[childGender1] = childName1;
family.children[childGender2] = childName2;
console.log(family.children);
*/

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