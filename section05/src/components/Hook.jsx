import { useState } from "react";
import useInput from "../hooks/useInput";

const Hook = () => {
  const [value, onChange] = useInput();
  const [date, onDateChange] = useInput();

  console.log(value, date);

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <input type="date" value={date} onChange={onDateChange} />
    </>
  );
};

export default Hook;
