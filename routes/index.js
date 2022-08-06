const express = require('express');

const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
    //añado un router a la version a todos mis endpoints
    const router = express.Router();
    app.use('/api/v1', router);


    //aqui es donde hago el enlace entre la ruta ("products" y los router")
    router.use('/products', productsRouter);
    
}



//finalmente exporto todo, luego esto es lo que ejecuté en el index.js del repositorio root del proyecto.

module.exports = routerApi;