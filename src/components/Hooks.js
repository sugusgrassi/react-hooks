import React from 'react'

import reactlifecycle from '../images/reactlifecycle.jpg';

function Hooks() {
    return (
        <div>
            <h2>React Hooks</h2>
            <p>Lo llamamos dentro de un componente de función.</p>
            <p>Los Hooks proporcionan una API más directa a los conceptos que ya conoces de React: props, estado, contexto, referencias, y ciclo de vida.</p>
            <p>Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.</p>
            <p>React proporciona algunos Hooks incorporados.</p>
            <p>Son funciones que te permiten “conectarte” a las características de React desde componentes de función.</p>
            <h3>Reglas de Hooks</h3>
            <p>Los Hooks son funciones de JavaScript, pero imponen dos reglas adicionales. Solo llamar Hooks:</p>
            <ul>
                <li>En el nivel superior. No llames Hooks dentro de loops, condiciones o funciones anidadas.</li>
                <li>Desde componentes de función de React. Otro lugar válido para llamar Hooks: personalizados. </li>
            </ul>
            <figure>
                <img src={reactlifecycle} style={{width: '100%'}} alt="Diagrama del ciclo de vida de un componente de react" />
                <figcaption style={{textAlign: "left"}}>Fuente: <a href="https://github.com/Wavez/react-hooks-lifecycle">github.com/Wavez/react-hooks-lifecycle</a></figcaption>
            </figure>
        </div>
    )
}

export default Hooks
