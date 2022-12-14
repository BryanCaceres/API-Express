const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;


app.use(express.json());

routerApi(app);

// app.get('/', (req, res) => {
//   res.send('Hola mi server en express');
// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });




// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parametros');
//   }
// });

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// })

app.listen(port, () => {
  console.log('El puerto donde estoy funcando maravillosamente es ' +  port);
});