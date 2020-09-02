import React from "react";
import ReactDOM from "react-dom";
import Component from "component";

const Template = () => (
    <div style={{ fontSize: 64, width: 1200, margin: "auto" }}>
        <Component />
        <div align="center">Hello from Template!</div>
    </div>
);

ReactDOM.render(<Template />, document.getElementById("app"));

module.exports = Template;