if (process.env.NODE_ENV != 'production'){ // si es diferente de producción
    require('dotenv').config();//requerimos paquete dotenv (instalarlo desde terminal)
                              // nos permite usar todo lo que coloquemos 
                              // en .env
};

const app = require('./server'); //requerimos archivo server
require('./database');//ejecuta el archivo database directamente 

app.listen(process.env.PORT || 3000,()=>{ //el puerto de escucha es el que nos de el entorno
                                          // si no lo dá , utilice el 3000  ||
    console.log(`Servidor Corriendo`) 
});
