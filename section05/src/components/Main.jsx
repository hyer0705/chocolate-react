import "./Main.css";

const Main = () => {
  const user = {
    name: "Lucy",
    isLoggedIn: true,
  };

  if (user.isLoggedIn) {
    return <div className="logout">Logout</div>;
  } else {
    return <div>Login</div>;
  }

  //   return <main>{user.isLoggedIn ? <div>Logout</div> : <div>Login</div>}</main>;
};

export default Main;
