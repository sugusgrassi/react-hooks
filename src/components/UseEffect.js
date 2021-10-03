import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [ count, setCount ] = useState(0);
    const [ resourceType, setResourceType ] = useState("posts")
    const [ items, setItems ] = useState([])
    
    useEffect(() => {
        document.title=`${count}`
        console.log(count)
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        .catch(error => console.log(error))
    }, [resourceType])

    useEffect(() => {
        console.log("El recurso cambia")

        return () => {
            console.log("Limpia")
        }
    }, [resourceType]) 

    let filterArr = items.filter((el) => el.id < 5)

    const [name, setName] = useState('');

    useEffect(function persistForm() {
        // 👍 No vamos a romper la primera regla nunca más.
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });

    const handleInput = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
                <h2>useEffect()</h2>
                <p>Agrega la capacidad de realizar efectos secundarios desde un componente de función.</p>
                <p>Los efectos también pueden especificar opcionalmente cómo “limpiar” después de ellos devolviendo una función.</p>
                <h4>Ejemplo cuando se monta y renderiza con cualquier cambio dentro del componente:</h4>
                <span>Cambia el título: </span>
                <button onClick={() => setCount(prevState => prevState -1)}>-</button>
                <button onClick={() => setCount(count+1)}>+</button>
                <pre>
                <code>
                    {`
useEffect(() => {
    document.title=${`${count}`}
})
                    `}
                </code></pre>
                <h4>Ejemplo cuando se monta y actualiza solo cuando cambia el recurso:</h4>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("todos")}>todos</button>
                <button onClick={() => setResourceType("comments")}>comments</button>
                {
                    filterArr.map(item => <p key={item.id}>{JSON.stringify(item)}</p>)}
                    <pre>
                <code>
                    {`
useEffect(() => {
    fetch(${`https://jsonplaceholder.typicode.com/${resourceType}`})
    .then(response => response.json())
    .then(json => setItems(json))
    .catch(error => console.log(error))
}, [resourceType])
                    `}
                </code></pre>
                <h4>Ejemplo cuando se monta y se desmonta (ver en consola):</h4>
                <pre>
                <code>
                    {`
useEffect(() => {
    console.log("El recurso cambia")

    return () => {
        console.log("Limpia")
    }
}, [resourceType]) 
                    `}
                </code>
                </pre>
                <h4>Si queremos ejecutar un efecto condicionalmente, podemos poner esa condición dentro de nuestro Hook: </h4>
                <span>Escribe el valor para “name”: </span><input onChange={handleInput}/>
                <br />
                <Typography variant="body2">Desde Google Chrome, el valor se podrá visualizar en DevTools > Application > Storage > Local Storage</Typography>
                {/* <button onClick={}>Cambiar nombre</button> */}
                <pre>
                <code>
                    {`
const [name, setName] = useState('');

useEffect(function persistForm() {
    // 👍 No vamos a romper la primera regla nunca más.
    if (name !== '') {
        localStorage.setItem('formData', name);
    }
});
                    `}
                </code></pre>
        </div>
    )
}

export default UseEffect
