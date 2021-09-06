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

    return (
        <div>
                <h2>useEffect()</h2>
                <p>Agrega la capacidad de realizar efectos secundarios desde un componente de función</p>
                <p>Los efectos también pueden especificar opcionalmente cómo “limpiar” después de ellos devolviendo una función</p>
                <h4>Ejemplo cuando se monta y renderiza con cualquier cambio dentro del componente:</h4>
                <span>Cambia el título</span>
                <button onClick={() => setCount(prevState => prevState -1)}>-</button>
                <button onClick={() => setCount(count+1)}>+</button>
                <pre style={{fontsize: "14px", overflowX: "scroll", width: "80vw"}}>
                {`
    useEffect(() => {
        document.title=${`${count}`}
    })
                `}</pre>
                <h4>Ejemplo cuando se monta y actualiza solo cuando cambia el recurso:</h4>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("todos")}>todos</button>
                <button onClick={() => setResourceType("comments")}>comments</button>
                {
                    filterArr.map(item => <p key={item.id}>{JSON.stringify(item)}</p>)}
                    <pre style={{fontsize: "14px", overflowX: "scroll", width: "80vw"}}>
                {`
useEffect(() => {
    fetch(${`https://jsonplaceholder.typicode.com/${resourceType}`})
    .then(response => response.json())
    .then(json => setItems(json))
    .catch(error => console.log(error))
}, [resourceType])
                
                `}</pre>
                <h4>Ejemplo cuando se monta y se desmonta (ver en consola):</h4>
                <pre style={{fontsize: "14px", overflowX: "scroll", width: "80vw"}}>
                {`
useEffect(() => {
    console.log("El recurso cambia")

    return () => {
        console.log("Limpia")
    }
}, [resourceType]) 
                `}
                </pre>
        </div>
    )
}

export default UseEffect
