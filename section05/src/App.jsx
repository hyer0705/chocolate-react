import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const buttonProps = {
    text: "메뉴",
    color: "green",
    a: 1,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"스토어"} />
      <Button text="지도">
        <Header />
      </Button>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
