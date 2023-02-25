import useClimate from "../hooks/useClimate"

const Result = () => {
    const { result } = useClimate();

    const { name, main } = result;

    return (
        <div className="container climate">
            <h2>El clima de {name} es:</h2>
            <p>{parseInt(main.temp)} <span>&#x2103;</span></p>
            <div className="temp_min_max">
                <p>Min: {parseInt(main.temp_min)} <span>&#x2103;</span></p>
                <p>Max: {parseInt(main.temp_max)} <span>&#x2103;</span></p>
            </div>

        </div>
    )
}

export default Result