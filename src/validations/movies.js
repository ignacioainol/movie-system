const moment = require('moment');


const saveMovie = (movie) => {
    const errors = {
        name: [],
        releaseDate: [],
        genre: []
    };

    const { name, releaseDate, genre } = movie;

    if (!name) {
        errors.name.push('El nombre de la película es requerido');
    }

    if (!releaseDate) {
        errors.releaseDate.push('La fecha de estreno es requerida');
    } else {
        let result = moment(releaseDate, 'MM/DD/YYYY', true).isValid();
        if (!result) {
            errors.releaseDate.push('Debe ingresar una fecha válida (DD/MM/YYYY)');
        }
    }

    if (!genre) {
        errors.genre.push('El género de la pelicula es requerida');
    }

    if (errors.name.length > 0 ||
        errors.releaseDate.length > 0 ||
        errors.genre.length > 0) {
        return errors;
    } else {
        return undefined;
    }
}

module.exports = {
    saveMovie
}