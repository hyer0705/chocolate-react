import { useSearchParams } from "react-router";

const Home = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("value"));

  return <h1>Home!</h1>;
};

export default Home;
