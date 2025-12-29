import { useParams } from "react-router";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return <h1>{id}번 일기!</h1>;
};

export default Diary;
