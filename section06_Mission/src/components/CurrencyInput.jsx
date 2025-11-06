const CurrencyInput = ({ label, currency, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <input name={label} type="number" value={currency} onChange={(e) => onChange(label, e.target.value)} />
    </div>
  );
};

export default CurrencyInput;
