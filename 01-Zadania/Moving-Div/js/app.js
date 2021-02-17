import React, {Component} from "react";
import ReactDOM from "react-dom";
import MovingDiv from "./MovingDiv";

const App =() => {
    return (

        <MovingDiv/>
    )

}

ReactDOM.render(<App/>, document.getElementById("app"));
