const Car = (props) => {
    return (
        <div className={`car-container-${props.carIndex}`}>
            <div className="car">{props.car.name}</div>
        </div>
    )
}

export default Car;