"use strict";
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

/* Option 2
const movies = {
  [`'${lastFilm1}'`]: filmRating1, // с интерполяцией
  [lastFilm2]: filmRating2
};
personalMovieDB.movies = movies;
console.log(personalMovieDB);
*/

/* На примере семьи
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