import React, { useState, useRef } from 'react';

function UseRef() {
  const [stateObj, setStateObj] = useState({ theme: 'blue' });
  const theme = stateObj.theme;

  const todoTaskRef = useRef();

  let colorStyle = {
    color: theme,
  };

  const handleTheme = () => {
    const task = todoTaskRef.current.value;

    if (task === '') return;

    setStateObj((prevstateObj) => {
      return { ...prevstateObj, theme: task };
    });
  };

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` apunta al elemento de entrada de texto montado
    inputEl.current.focus();
  };

  return (
    <div>
      <h2>useRef()</h2>
      <p>
        Devuelve un objeto ref mutable cuya propiedad.current se inicializa con
        el argumento pasado (initialValue). El objeto devuelto se mantendrá
        persistente durante la vida completa del componente.
      </p>
      <p>Un caso de uso común es para acceder a un hijo imperativamente</p>
      <h4>Ejemplos:</h4>
      <input ref={todoTaskRef} type="text" placeholder="color" />
      <button onClick={handleTheme}>Escribe un color en inglés</button>
      <br />
      <span className={{}} style={colorStyle}>
        {theme}
      </span>
      <br />
      <br />
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>
          Al hacer click pone foco en el input
        </button>
      </div>
    </div>
  );
}

export default UseRef;
