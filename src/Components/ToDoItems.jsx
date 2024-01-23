import ToDoItem from "./ToDoItem";

const ToDoItems=({todoitems,onDeleteClick})=>
{
  return(
    <div className="items-container">
      {todoitems.map(item=><ToDoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>)}
     </div>
  ) 

}
export default ToDoItems;

