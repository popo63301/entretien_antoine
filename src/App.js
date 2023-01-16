import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/slices/todosSlice";
import "./App.css";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const todos = useSelector((state) => state.todos.allTodos);
  const dispatch = useDispatch();

  const allTodos = todos.map((e, i) => <div key={i}>{e}</div>);

  return (
    <div className="mainApp">
      <div>
        <input
          type="name"
          name="name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTodo(todoName));
            setTodoName("");
          }}
        >
          Add todos
        </button>
      </div>
      <div>{allTodos}</div>
    </div>
  );
};

export default App;
