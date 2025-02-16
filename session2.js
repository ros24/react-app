import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

//jsx(Html like syntax) - is not HTML in js
//jsx transpiled before it reaches the js- parcel does this using babel library.
// jsx => React.createElement => object => HTMLElement(render)
const jsxHeading = <h1 id="heading"> Hello from JSX🚀</h1>;

//React component
//class based component(uses js classes to create components) - old
//Functional component (uses js functions to create components)- New

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello from title.
  </h1>
);

//component composition (Injecting one component inside another)
//we can use any js code in {} inside the component.
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{100 + 2000}</h2>
    <h1>Hello from React functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);
