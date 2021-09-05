import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [ count, setCount ] = useState(0);
    const [ resourceType, setResourceType ] = useState("posts")
    const [ items, setItems ] = useState([])
    
    useEffect(() => {
        document.title=`${count}`
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        .catch(error => console.log(error))
    }, [resourceType])

    useEffect(() => {
        console.log("resource change")

        return () => {
            console.log("clean")
        }
    }, [resourceType]) 

    let filterArr = items.filter((el) => el.id < 5)

    return (
        <div>
                <h2>useEffect()</h2>
                <p>Agrega la capacidad de realizar efectos secundarios desde un componente de función</p>
                <p>Los efectos también pueden especificar opcionalmente cómo “limpiar” después de ellos devolviendo una función</p>
                <span>Title number </span>
                <button onClick={() => setCount(count+1)}>+</button>
                <button onClick={() => setCount(prevState => prevState -1)}>-</button>
                <br /><br />
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("todos")}>todos</button>
                <button onClick={() => setResourceType("comments")}>comments</button>
                {
                    filterArr.map(item => <p key={item.id}>{JSON.stringify(item)}</p>)}
        </div>
    )
}

export default UseEffect
