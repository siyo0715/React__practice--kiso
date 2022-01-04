import React, { useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onCickSwichFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>HelloWorld</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です</ColofulMessage>
      <button onClick={onClickCountUp}> + 1</button>
      <br />
      <button onClick={onCickSwichFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
