const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
    //aqui es donde hago el enlace entre la ruta ("products" y los router")
    


    app.use('/products', productsRouter);
    //  app.use('/users', productsRouter);
    //  app.use('/categories', productsRouter);
}

//finalmente exporto todo, luego esto es lo que ejecuté en el index.js del repositorio root del proyecto.

module.exports = routerApi;