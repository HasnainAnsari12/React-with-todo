import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("")
  const [editTodoValue, setEditTodoValue] = useState("");

  const addTodo = () => {

    console.log(addTodo);

    console.log("todoValue", todoValue);

    const userObj = {

      value: todoValue,
      isEdit: false,

    };

    todos.push(userObj)
    setTodos([...todos])
    setTodoValue("");

  };


  console.log("todos", todos);


  const deleteAllTodo = () => {
    console.log("deleteAllTodo");
    setTodos([]);
  };

  const editTodo = (index) => {

    todos.forEach((todo) => {
      todo.isEdit = false;

    });

    todos[index].isEdit = true;
    setTodos([...todos]);
    setEditTodoValue(todos[index].value)

  };


  const deleteTodo = (index) => {
    console.log("deleteTodo", index);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const saveTodoValue = (index) => {

   console.log("editTodoValue" , editTodoValue);
   todos[index].value = editTodoValue;
   todos[index].isEdit = false;
   setTodos([...todos]);
 
  };


  return (
    <>
      <Header />



      <div className="flex justify-center  items-center mt-5 flex-col">
        <div className='w-[70%]'>
          <input
            type="text"
            placeholder='ENTER YOUR NAME'
            className='border w-full rounded-lg outline-none border-gray-600'
            id='todoInput'
            onChange={(e) => {
              setTodoValue(e.target.value)
            }}

          />
        </div>

        <div className='flex mt-10'>
          <Button title='Add todo' clickTrigger={addTodo} />

          <Button
            title="Delete All"
            clickTrigger={deleteAllTodo}
            customClass="bg-red-500"
          />
        </div>
      </div>


      <div className='w-[70%] mx-auto mt-5'>
        <ul className="">
          {todos &&
            todos?.map((todo, index) => {
              console.log("todo", todo);
              return todo.isEdit ? (
                <div className='flex mx-auto' key={index}>
                  <input
                    type="text"
                    className='border w-full rounded-lg p-3 outline-none border-gray-600'
                    onChange={(e) => setEditTodoValue(e.target.value)}
                    value={editTodoValue}
                  />
                  <Button
                   title="Save"
                   clickTrigger = {() => saveTodoValue(index)}
                  
                  />
                </div>
              ) : (
                <li
                  key={index}
                  className='text-xl p-3 border rounded-lg flex justify-items-center'

                >
                  {todo.value}
                  <div>
                    <Button title="EDIT" clickTrigger={() => editTodo(index)} />
                    <Button
                      title="Delete"
                      clickTrigger={() => deleteTodo(index)}
                      customClass="bg-red-500"

                    />
                    
                    </div>

                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}


export default App




