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

// ---------- 15. Практика ч.2. Применяем условия и циклы---------------------------
/* 
1. Автоматизировать вопросы пользователю про фильмы при помощи цикла
2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
  str.length - и получить ее длину.)
  3. При помощи условий проверить personalMovieDB.count, и если он меньше 10,
  вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - 
  "Вы классический зритель!", а если больше - "Вы киноман!". А если не подошел 
  ни один вариант - "Произошла ошибка".
*/
/*
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов!');
} 
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель!');
} 
else if (personalMovieDB.count >= 30) {
  alert('Вы киноман!');
} 
else {
  alert('Произошла ошибка');
}


for (let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из ваших просмотренных фильмов?', '');
  const filmRating = prompt('На сколько оцените его?', '');

  if (lastFilm != null && filmRating != null && lastFilm != '' && 
  filmRating != '' && lastFilm.length <= 50 && filmRating.length <= 50) {
    personalMovieDB.movies[lastFilm] = filmRating;
    console.log('Done!');
  } else {
    console.log('error');
    i--;
  }
}
console.log(personalMovieDB);
*/

