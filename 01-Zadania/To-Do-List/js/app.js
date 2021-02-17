import React from "react";
import ReactDOM from "react-dom";
import ToDoList from './ToDoList';


const data = [
    {
        id: 1,
        name: "Opłacić rachunki",
        done: false
    },
    {
        id: 2,
        name: "Posprzątać mieszkanie",
        done: true
    },

];


const App = () => {
    return <ToDoList tasks={data}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
