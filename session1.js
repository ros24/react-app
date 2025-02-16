import React from "react";
import ReactDOM from "react-dom/client";

// Nested elements creation
const parent = React.createElement(
    "div", {id: "parent"}, React.createElement(
        "div", {id:"child"}, [React.createElement(
            "h1", {}, "My App 🚀"),
        React.createElement("h1", {}, "This is a learning App")]));

const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

// render will replace the root content in the root element in html
root.render(parent);