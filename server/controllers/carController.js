const data = require('../cars');
let cars = [...data.cars];

function addCars(req, res){
    const { name } = req.body;
    cars.push({ name });

    res.status(200).send(cars);
    // SAME AS THIS
    // const newCar = {
    //     name: req.body.name
    // }
    // cars.push(newCar)
}

function getCars(req, res){
    res.status(200).send(cars);
}

function updateCar(req, res){
    let newCarArr = cars.map(car => {
        if(req.params.id === car.id){
            return { name: req.params.name };
        } else {
            return car;
        }
    })

    cars = newCarArr;
    res.status(200).send(cars);
}

function deleteCar(req, res){
    //const deleteId = req.query.deleteId IS SAME AS BELOW
    const { deleteId } = req.query;
    console.log({ deleteId })
    const deleteIndex = cars.findIndex(car => car.id === deleteId)
    cars.splice(deleteIndex, 1);

    // const updatedCars = cars.filter(car => car.id !== deleteId);
    // cars = updatedCars;

    res.status(200).send(cars);
}

module.exports = {
    addCars,
    getCars,
    updateCar,
    deleteCar,
}