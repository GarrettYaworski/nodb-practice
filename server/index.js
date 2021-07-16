const express = require("express");
const { getCars, addCars, updateCar, deleteCar } = require('./controllers/carController')

const app = express();
app.use(express.json());

app.get('/api/cars', getCars)

app.post('/api/cars', addCars)

app.put('/api/cars/:id/:name', updateCar)

app.delete('/api/cars', deleteCar)

app.listen(5050, () => console.log('listening on 5050'))