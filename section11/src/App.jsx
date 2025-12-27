import "./App.css";
import { useRef, useReducer, useCallback } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { mockTodos } from "./data/mockData";
import reducer, { ACTIONS } from "./reducers/todoReducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, mockTodos);
  const nextId = useRef(3);

  const onCreate = useCallback((content) => {
    const newTodo = {
      id: nextId.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    dispatch({
      type: ACTIONS.CREATE,
      data: newTodo,
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: ACTIONS.UPDATE,
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: ACTIONS.DELETE,
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
