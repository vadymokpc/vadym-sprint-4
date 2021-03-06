/* Exercise 1: Tendrás que implementar un bucle.map que recorra todo el array de películas, extrayendo sólo el campo director de cada una
 (no olvides que cada película es un objeto, que contiene el campo que nos interesa "director" ). */

/* const directors = movies.map((getAllDirectors) => {
  return `${getAllDirectors.director}`;
});
console.log("EXERCICE 1 ->", directors); */

function getAllDirectors(array) {
  return array.map(objeto => objeto.director);
}

// Exercise 2: Consigue las películas de cierto director.

/* const peliculasFiltradasPorDirector = movies.filter((getMoviesFromDirector) => getMoviesFromDirector.director === 'Frank Darabont');
console.log(peliculasFiltradasPorDirector); */

function getMoviesFromDirector(array, nombre) {
  const filtrarPeliculas = array.filter(movie => {

    return movie.director === nombre;
  })
  return filtrarPeliculas
};

// Exercise 3: Calcular la media de las películas de un director determinado.

function moviesAverageOfDirector(array, director) {
  const filtrarMedia = array.filter(movie => {
    return movie.director === director;
  })
  let sumaPuntuacion = 0
  for (let index = 0; index < filtrarMedia.length; index++) {
    sumaPuntuacion += filtrarMedia[index].score
  }
  return sumaPuntuacion / filtrarMedia.length
}

// Exercise 4:  Orden alfabético por título 

function orderAlphabetically(array) {
  /*  return array.sort((a, b) => {
     return a.title - b.title;
   }) */
  const titulos = array.map(item => item.title).sort().slice(0, 20);
  return titulos;
};

// Exercise 5: Orden por año, ascendente
function orderByYear(array) {
  const arrayCopy = array.slice();
  const peliculesOrdenadasPorTitulo = arrayCopy.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const peliculasOrdenadasPorAno = peliculesOrdenadasPorTitulo.sort((a, b) => a.year - b.year);

  return peliculasOrdenadasPorAno;
};

// Exercise 6: Calcular el promedio de las películas en una categoría
function moviesAverageByCategory(array, category) {
  const peliculasFiltradas = array.filter(item => item.genre.includes(category))
  let sumaPuntuacion = 0
  for (let index = 0; index < peliculasFiltradas.length; index++) {
    sumaPuntuacion += peliculasFiltradas[index].score
  }
  return sumaPuntuacion / peliculasFiltradas.length

};

//Nivel II

// Exercise 7: Modificar la duración de las películas a minutos
function hoursToMinutes(array) {
  return array.map(item => {
    const [hours, m1 = 0, m2 = 0] = item.duration.split('').map(i => parseInt(i)).filter(i => !!i);
    const hoursToMinutes = hours * 60;
    const resultado = Object.assign(item, {
      duration: hoursToMinutes + m1 + m2
    });
    console.log(resultado);
    return resultado
  })
};

// Exercise 8: Consigue la mejor película de un año
function bestFilmOfYear() {

};



// Se requiere lo siguiente para que las pruebas unitarias funcionen.
/* Configuración del entorno. No modifique el siguiente código. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}