import React from "react";
import { render } from "react-dom";
import Home from "./page/Home";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
const node = document.createElement("div");
node.setAttribute("id", "root");
document.querySelector("body").appendChild(node);
render(<Home />, document.getElementById("root"));
