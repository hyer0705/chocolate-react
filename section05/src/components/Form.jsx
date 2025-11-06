import { use } from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState("kr");
  const [bio, setBio] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onNationalityChange = (e) => setNationality(e.target.value);
  const onBioChange = (e) => setBio(e.target.value);

  return (
    <form>
      <div>
        <input type="text" placeholder="이름" value={name} onChange={onNameChange} />
      </div>
      <div>
        <input type="date" value={date} onChange={onDateChange} />
      </div>
      <div>
        <select value={nationality} onChange={onNationalityChange}>
          <option value=""></option>
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="it ">이탈리아</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onBioChange} />
        {bio}
      </div>
    </form>
  );
};

export default Form;
