import React from "react";
import ReactDOM from "react-dom/client";
import Booklist from "./components/books/Booklist";
import "./index.css";

// function Greeting() {
//   return <h2> My First Component</h2>;
// }

// const Greeting = () => {
//   return (
//     <div>
//       <h2>My First Component</h2>
//       <Example />
//     </div>
//   );
// };

const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId);
root.render(<Booklist />);
