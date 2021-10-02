import React, { useState } from 'react';

function InitialState() {
    console.log("run InitialState")
    return 0
}

function UseState() {

    const [count, setCount] = useState(() => InitialState())

    const handleMin = () => {
        count > 0 ? setCount(prevCount => prevCount -1) : setCount(count)
    }

    const handlePlus = () => {
        setCount(prevCount => prevCount +1)
    }

    return (
            <div>
                <h2>useState()</h2>
                <p>Se utiliza para agregar un estado local al componente de función. Declara una “variable de estado”. Retorna un array con el estado actual y una función para modificarlo. El único argumento que recibe es el estado inicial.</p>
                <h4>Fórmula:</h4>
                <p>const [ estadoActual, funciónActualizadora ] = useState(estadoInicial o función)</p>
                <h4>Ejemplo (código y uso):</h4>
                <pre style={{fontsize: "14px", overflowX: "scroll", width: "80vw"}}>
                <code>
                    {`
import React, { useState } from 'react';

function InitialState() {
    console.log("run InitialState")
    return 0
}

function UseState() {

    const [count, setCount] = useState(() => InitialState())

    const handleMin = () => {
        count > 0 ? setCount(prevCount => prevCount -1) : setCount(count)
    }

    const handlePlus = () => {
        setCount(prevCount => prevCount +1)
    }

    return (
            <div>
                <button onClick={(handleMin)}>-</button>
                <span> {count} </span>
                <button onClick={(handlePlus)}>+</button>
            </div>
    )
}

export default UseState;
                    `}
                </code>
                </pre>

                <button onClick={(handleMin)}>-</button>
                <span> {count} </span>
                <button onClick={(handlePlus)}>+</button>
            </div>
    )
}

export default UseState;
