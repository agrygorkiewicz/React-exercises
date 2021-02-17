import React, {Component} from "react";
import ReactDOM from "react-dom";
import LoadingData from "./LoadingData";

class App extends Component {
    render() {
        return <LoadingData/>;
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

export default App;