import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("mount even");

    // cleanup function
    return () => console.log("unmount");
  }, []);

  return (
    <>
      <h2>짝수입니다.</h2>
    </>
  );
};

export default Even;
