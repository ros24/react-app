
// Nested elements creation
const parent = React.createElement(
    "div", {id: "parent"}, React.createElement(
        "div", {id:"child"}, [React.createElement(
            "h1", {}, "Nested h1 tag"),
        React.createElement("h1", {}, "Nested h2 tag")]));

const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

// render will replace the root content in the root element in html
root.render(parent);