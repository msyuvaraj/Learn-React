import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => <h1 className="heading">Namste React using jsx</h1>;

const Heading = () => (
  <div>
    {JsxHeading()}
    <JsxHeading />
    <JsxHeading></JsxHeading>
    <h1 className="heading"> React using Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
