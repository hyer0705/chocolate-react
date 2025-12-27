import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter(({ content }) => content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredTodos();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List ✅</h4>
      <div>
        <div>{totalCount}</div>
        <div>{doneCount}</div>
        <div>{notDoneCount}</div>
      </div>
      <div className="todo_wrapper">
        <input value={search} onChange={onChangeSearch} className="search" type="text" placeholder="검색어를 입력하세요" />
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default List;
