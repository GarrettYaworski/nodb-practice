import Car from "./Car";

const CarList = (props) => {
    return (
        props.cars.map((car, index) => {
            return (
              <Car car={car} carIndex={index}/>
            )
          })
    )
}

export default CarList;