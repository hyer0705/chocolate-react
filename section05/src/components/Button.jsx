const Button = ({ children, text, color = "black" }) => {
  const clickEventHandler = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={clickEventHandler}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
