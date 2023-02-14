import { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");

    function addTodo(evt) {
        evt.preventDefault()

        props.onClick({
            id: crypto.randomUUID(),
            text: input,
            checked: false
        })
        setInput('')
    }

    function handleChange(evt) {
        setInput(evt.target.value)
    }

    return (
        <div >
            <input value={input} onChange={handleChange} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default TodoForm
