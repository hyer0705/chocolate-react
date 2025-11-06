import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);

  return (
    <div>
      <h1 style={{ backgroundColor: light === "OFF" ? "gray" : "orange" }}>{light}</h1>
      <button onClick={() => setLight(light === "OFF" ? "ON" : "OFF")}>{light === "OFF" ? "Turn ON" : "Turn OFF"}</button>
    </div>
  );
};

export default Bulb;
