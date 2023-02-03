import React from "react";
import "./style.css";
import Aside from "./Aside";
import Section from "./section";

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="flex">
                <div className="aside">
                <Aside />
                </div>
                <div className="section">
                <Section />
                </div>
                
            </div>
            
        )
    }
}

export default App;