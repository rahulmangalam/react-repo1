import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "div", { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", { className: "heading" }, "hello world"),
            React.createElement("h2", { className: "heading" }, "jai ram ji kikk iiiiii"),
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);