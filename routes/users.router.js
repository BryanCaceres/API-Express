const express = require("express");
const faker = require("faker");

// creamos una aplicación
const router = express.Router();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

app.get('/', (req, res) => {
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