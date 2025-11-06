const Button = ({ children, text, color = "black" }) => {
  return (
    <button>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
