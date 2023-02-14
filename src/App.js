import "./index.css";
import TodoList from "./components/TodoList";

export default function App() {
  // let [todo, setTodo] = useState([]);
  // let [input, setInput] = useState("");
  // let [listType, setListType] = useState("all");

  // function handleChange(e) {
  //   setInput(e.target.value);
  // }

  // function handleClick(arr) {
  //   // todo.push(input)
  //   // const newArr = [...todo]
  //   // newArr.push(input)
  //   // setTodo(newArr)

  //   // setTodo([...todo, input]);

  //   let item = {
  //     id: crypto.randomUUID(),
  //     text: input,
  //     checked: false
  //   };

  //   setTodo([...todo, item]);
  //   setInput("");

  //   localStorage.setItem("todo", JSON.stringify([...todo, item]));
  // }

  // function handleClickDelete(index) {
  //   //method 1
  //   //setTodo(todo.filter((_, i) => i !== index));

  //   //method 2
  //   // const newarr =  [...todo]
  //   // let deleteIndex =  newarr.findIndex((item) => item.id === index)
  //   // newarr.splice(deleteIndex,1)

  //   //method 3
  //   let newarr = todo.filter((item) => item.id !== index);

  //   setTodo(newarr);
  //   setInput("");
  // }

  // function handleClickCheck(index) {
  //   //method 1
  //   //const newarr =  [...todo]
  //   // let checkIndex =  newarr.findIndex((item) => item.id === index)
  //   // newarr[checkIndex].checked = !newarr[checkIndex].checked

  //   //method 2
  //   // const newarr = todo.map((item) => {
  //   //   if (item.id === index) {
  //   //     item.checked = !item.checked;
  //   //   }
  //   //   return item;
  //   // });
  //   // setTodo(newarr);

  //   //method 3
  //   const newarr = todo.map((item) =>
  //     item.id === index ? { ...item, checked: !item.checked } : { ...item }
  //   );
  //   setTodo(newarr);
  // }
  // // method 4

  // const updateList = (index, isChecked) => {
  //   const updatedList = [...todo];
  //   updatedList[index].checked = isChecked;
  //   setTodo(updatedList);
  // };

  // before the JSX, use the listType to filter our todo

  // let setAll = todo.filter((item) => {
  //   if (listType === "all") {
  //     return true;
  //   } else if (listType === "complete") {
  //     if (item.checked === true) {
  //       return true;
  //     }
  //   } else {
  //     if (item.checked === false) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });

  //add remove button
  // add check box and checked todo item prop that is set to false by default
  // add few buttons for filtering the list to show all items are checked or not
  return (
    <div className="App">
      <h1>To Do App </h1>
      {/* <input value={input} onChange={handleChange} />
      <button onClick={handleClick}>Enter</button> */}
      {/* <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button> */}

      {/* <ul>
        {setAll.map((item, index) => (
          <li key={item.id} style={{ listStyle: "none" }}>
            {/* <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleClickCheck(item.id)}
            /> 

            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => updateList(index, !item.checked)}
            />

            {item.text}
            <button onClick={() => handleClickDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul> 
    */}
    <TodoList/>
    </div>
  );
}
