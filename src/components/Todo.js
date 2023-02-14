import { useState } from 'react'
import TodoForm from './TodoForm'

function Todo({ todo, checkTodo, removeTodo, editTodo }) {
    const [listType, setListType] = useState("all");
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    let setAll = todo.filter((item) => {
        if (listType === "all") {
            return true;
        } else if (listType === "complete") {
            if (item.checked === true) {
                return true;
            }
        } else {
            if (item.checked === false) {
                return true;
            }
        }
        return false;
    });


    function submitEdit(value) {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }

    return <div>
    <br/>
        <div>
            <button onClick={() => setListType("all")}>All</button>
            <button onClick={() => setListType("complete")}>Completed</button>
            <button onClick={() => setListType("incomplete")}>Incomplete</button>
        </div>
        <ul>
            {setAll.map((item, index) => (
                <li key={item.id} style={{ listStyle: "none" }}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkTodo(index, !item.checked)}
                    />
                    {item.text}
                    <button onClick={() => removeTodo(item.id)}>Delete</button>
                    <button onClick={() => { setEdit({ id: item.id, value: item.text }) }}>Edit</button>
                </li>
            ))}
        </ul>
    </div>
}

export default Todo
