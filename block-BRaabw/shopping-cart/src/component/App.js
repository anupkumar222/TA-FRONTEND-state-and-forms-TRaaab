import React from "react";
import Aside from "./Aside";
import Section from "./Section";
import Header from "./Header";
import Cart from "./Cart";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: ""
        }
    }

    render() {
        return (
            <div className="flex space-between">
                <Aside />
                <div className="box">
                    <Header />
                    <Section />
                </div>
                <Cart />
            </div>


        )
    }
}

export default App