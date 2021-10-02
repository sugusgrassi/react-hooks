import React, { useMemo } from 'react'

const UseMemo = () => {
    return (
        <div>
            <h2>useMemo()</h2>
            <p>Utiliza el método o técnica de <a href="https://es.wikipedia.org/wiki/Memoizaci%C3%B3n" target="_blank" rel="noopener noreferrer">Memoización</a>, almacenando los resultados de la llamada a una subrutina en una memoria y devolviendo esos mismos valores cuando se llame de nuevo a la función con los mismos parámetros de entrada.</p>
            <p>Es recomendable utilizar el hook useMemo() en los siguientes casos:</p>
            <p>1- Cuando hay una función que requiere más tiempo useMemo() la computa cuando se monta el compoentne y luego al ser llamada nuevamente ante la misma entrada de datos utiliza el valor de salida ya guardado.</p>
            <p>2- Cuando hay igualdad referencial</p>
        </div>
    )
}


export default UseMemo
