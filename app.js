const express = require('express');
const app = express();
const librosRouter = require('./router/libros');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());



app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor de libros iniciado en el puerto 3000');
});