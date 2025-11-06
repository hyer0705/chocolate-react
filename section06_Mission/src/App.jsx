import { useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

const EXCHANGE_RATE = 1300;
function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (name, value) => {
    if (name === "krw") {
      setCurrency({
        krw: value,
        usd: parseInt(value) / EXCHANGE_RATE,
      });
    } else {
      setCurrency({
        krw: parseInt(value) * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput label={"krw"} currency={currency.krw} onChange={onChange} />
      <CurrencyInput label={"usd"} currency={currency.usd} onChange={onChange} />
    </>
  );
}

export default App;
