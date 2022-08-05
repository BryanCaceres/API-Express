// traemos a express
const express = require("express");
const faker = require("faker");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/products', (req, res) => {
  // Indico que en los query parameter me llegará uno que es de size, 
  //uego abajo digo que si no viene nada, tome por defecto 10
  const { size } = req.query;
  const limit = size || 10;

  const products = {
    size: limit,
    items: []
  };

  for (let index = 0; index < limit; index++) {
    products.items.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  
  res.json(products);
});

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("Mi puerto es " + port);
});

