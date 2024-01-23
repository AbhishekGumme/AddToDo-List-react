// import AddToDo from "./Components/AddToDo"
// import AppName from "./Components/AppName"
// import "./App.css";
// import { useState } from "react";
// import ToDoItems from "./Components/ToDoItems";

// function App() {

//   const initialToDoItems=[];

//   const [todoitems,setTodoItems]=useState(initialToDoItems);

//   const handleNewItem=(itemName,itemDueDate)=>
//   {
//       console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
//   }
//   return <center className="todo-container">
//     <AppName/>
//     <AddToDo onNewItem={handleNewItem}/>
//     <ToDoItems todoitems={todoitems}/>
//     {/* <ToDoItems todoitem={todoitems}/> */}
//   </center>
// }

// export default App


// App.js
import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import "./App.css";
import { useState } from "react";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const initialToDoItems = [];
  const [todoitems, setTodoItems] = useState(initialToDoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // Update state to include the new item
    const newToDoItems=[...todoitems,{name: itemName, dueDate: itemDueDate },];
    setTodoItems(newToDoItems);
    //setTodoItems((prevItems) => [
    //   ...prevItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  const handleDeleteItem=(toDoItemName)=>{

    const newToDoItems=todoitems.filter(item=>item.name!==toDoItemName);
    setTodoItems(newToDoItems);
    console.log(`item deleted :${toDoItemName}`);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoitems.length<=0 && <WelcomeMessage />}
      <ToDoItems todoitems={todoitems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}

export default App;
