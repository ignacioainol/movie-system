const express = require('express');

//Initializations
const app = express();
require('./database');

// Setting
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas de la API
app.use(require('./routes'));


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
});