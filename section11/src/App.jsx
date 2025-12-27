import "./App.css";
import { useRef, useReducer, useCallback, useMemo } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { mockTodos } from "./data/mockData";
import reducer, { ACTIONS } from "./reducers/todoReducer";
import { TodoStateContext, TodoDispatchContext } from "./contexts/TodoContext";

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

  const memoizedTodosController = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedTodosController}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
