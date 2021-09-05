import React, {useState, useRef} from 'react'

function UseRef() {

    const [ stateObj, setStateObj] = useState({theme: "yellow"})
    const theme = stateObj.theme 

    const todoTaskRef = useRef();

    let colorStyle = {
        color: theme
    }

    const handleTheme = () => {
        const task = todoTaskRef.current.value;

        if(task === '') return;

        setStateObj((prevstateObj) => {
            return {...prevstateObj, theme: task }
         })
    }

    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` apunta al elemento de entrada de texto montado
      inputEl.current.focus();
    };

    return (
        <div>
            <h2>useRef()</h2>
            <input ref={todoTaskRef} type='text' placeholder='color'  />
            <button onClick={handleTheme}>Change theme</button>
            <br />
            <span className={{}} style={colorStyle}>{theme}</span>
            <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
            </div>
        </div>
    )
}

export default UseRef
