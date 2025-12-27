import { useState, useRef, memo, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../contexts/TodoContext";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const { onCreate } = useContext(TodoDispatchContext);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeydown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} type="text" placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default memo(Editor);
// export default Editor;
