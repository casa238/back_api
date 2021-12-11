//REQUIRE almacena en variable los framework a utilizar
const express = require('express');
// variable app para las rutas
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req, res, next) => {
    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');    
    next();
})



app.use(cors());

//Rutas

app.use(require('./src/routers/main.route'));
app.use(require('./src/routers/usuario.route'));
app.use(require('./src/routers/habitacion.route'));
app.use(require('./src/routers/reserva.route'));
/* variable port - puerto del servidor
const port = 3000;

SERVIDOR req - peticion y res - respuesta

app.get('/hola', (req, res) => {
    res.send('hola mundo!');
});

app.get('/', (req, res) => {
    res.json();
});


*/



module.exports = app;