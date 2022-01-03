import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>HelloWorld</h1>
      <p>お元気ですか？</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
