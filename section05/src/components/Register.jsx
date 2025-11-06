// useRef가 필요한 이유
//  1. 리렌더링이 발생하지 않는 상태 관리
//  2. 특정 DOM 접근

import { useRef } from "react";
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log("렌더링 횟수:", countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <form>
      <div>
        <input ref={inputRef} name="name" type="text" placeholder="이름" value={input.name} onChange={onChange} />
      </div>
      <div>
        <input name="birth" type="date" value={input.birth} onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="it ">이탈리아</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>click</button>
    </form>
  );
};

export default Register;
