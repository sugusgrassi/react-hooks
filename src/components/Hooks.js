import React from 'react'

function Hooks() {
    return (
        <div>
            <h2>React Hooks</h2>
            <p>Lo llamamos dentro de un componente de función.</p>
            <p>Los Hooks proporcionan una API más directa a los conceptos que ya conoces de React: props, estado, contexto, referencias, y ciclo de vida</p>
            <p>Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.</p>
            <p>React proporciona algunos Hooks incorporados.</p>
            <p>Son funciones que te permiten “conectarte” a las características de React desde componentes de función.</p>
            <h3>Reglas de Hooks</h3>
            <p>Los Hooks son funciones de JavaScript, pero imponen dos reglas adicionales. Solo llamar Hooks:</p>
            <ul>
                <li>en el nivel superior. No llames Hooks dentro de loops, condiciones o funciones anidadas.</li>
                <li>desde componentes de función de React. No Otro lugar válido para llamar Hooks: tus propios Hooks personalizados. </li>
            </ul>
        </div>
    )
}

export default Hooks
