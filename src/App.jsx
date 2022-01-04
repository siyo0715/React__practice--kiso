import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>HelloWorld</h1>
      <ColofulMessage />
      <p style={contentLedyStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
