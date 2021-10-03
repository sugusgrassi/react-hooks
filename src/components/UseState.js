import React, { useState } from 'react';
import Link from '@mui/material/Link';

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
                <p>Se utiliza para agregar un estado local al componente de función para declarar una “variable de estado”. Retorna un array con el estado actual y una función para modificarla. El único argumento que recibe es el estado inicial.</p>
                <p>La sintáxis de <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_arreglos" target="_blank" rel="noopener noreferrer"> Desestructuración de arreglos</Link> permite utilizar diferentes nombres a las variables de estado declaradas cuando se llama al useState().</p>
                <h4>Sintáxis:</h4>
                <pre>
                    {`
const [ estadoActual, funciónActualizadora ] = useState(estadoInicial o función)
                    `}
                </pre>
                <h4>Ejemplo (código y uso):</h4>
                <pre>
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
