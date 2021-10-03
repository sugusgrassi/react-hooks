import { Typography, TextField, Button, Link } from '@mui/material';
import React, { useState, useMemo } from 'react'
import useStyles from './styles';


const UseMemo = () => {
    const classes = useStyles();
    const [number, setNumber] = useState(0);
    const [ dark, setDark] = useState(false);
    // const doubleNumber = slowFunction(number);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: 10,
        marginTop: 10
    }

    function slowFunction(num) {
        console.log('Calling Slow function')
        for (let i = 0; i <= 1000000000; i++){}
        return num * 2;
    }

    return (
        <div>
            <h2>useMemo()</h2>
            <p>Utiliza el método o técnica de <Link href="https://es.wikipedia.org/wiki/Memoizaci%C3%B3n" target="_blank" rel="noopener noreferrer">Memoización</Link>, almacenando los resultados de la llamada a una subrutina en una memoria y devolviendo esos mismos valores cuando se llame de nuevo a la función con los mismos parámetros de entrada.</p>
            <p>Es recomendable utilizar el hook useMemo() en los siguientes casos:</p>
            <p>1- Cuando hay una función que requiere más tiempo useMemo() la computa cuando se monta el compoentne y luego al ser llamada nuevamente ante la misma entrada de datos utiliza el valor de salida ya guardado.</p>
            <p>2- Cuando hay igualdad referencial</p>
            <h4>Sintáxis:</h4>
                <pre>
                    {`
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
                    `}
                </pre>
            <h4>Ejemplo de uso de useMemo() para renderizar el estado de la función lenta solo cuando es necesario:</h4>
            <Button size="large" sx={{ mr: 3 }} onClick={() => setDark(prevDark => !prevDark)}>Cambiar modo</Button>
            <TextField
                id="standard-number"
                label="Número"
                type="number"
                value={number} 
                onChange={e => setNumber(parseInt(e.target.value))}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                className: classes.exampleInput,
                }}
                variant="standard"
            />
            <div style={themeStyles}>
                <Typography variant="body1">{doubleNumber}</Typography>
            </div>
            <Typography sx={{ mt: 3 }}>En lugar de utilizar:</Typography>
            <pre>
{`const doubleNumber = slowFunction(number)`}
                </pre>
            <Typography>Igualamos la variable necesaria a useMemo() que tiene como primer parámentro al llamado de la función lenta y al segundo el array de elementos que cuando se modifiquen, que renderice. En este caso es un solo elemento (number). </Typography>
            <pre>
                <code>
                    {`
const [number, setNumber] = useState(0);
const [ dark, setDark] = useState(false);

const doubleNumber = useMemo(() => {
    return slowFunction(number)
}, [number]);
const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: 10,
    marginTop: 10
}

function slowFunction(num) {
    console.log('Calling Slow function')
    for (let i = 0; i <= 1000000000; i++){}
    return num * 2;
}
                    `}
                </code></pre>
        </div>
    )
}


export default UseMemo
