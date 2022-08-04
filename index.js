// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("Se viene CTM");
});

app.get('/products/:id' , (req,res)=>{
  const {id} = req.params
  res.json({
    id,
    name:'Jabon',
    price:2000,
    available:true
  })
} )

app.get('/categories/:id' , (req,res)=>{
  const {id} = req.params
  res.json({
    id,
    name:'Limpieza',
    products:13
  })
} )

app.get('/clients/:id' , (req,res)=>{
  const {id} = req.params
  res.json({
    id,
    firstName:'Nicolas',
    lastName:'Molina'
  })
} )

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("Mi puerto es " + port);
});

