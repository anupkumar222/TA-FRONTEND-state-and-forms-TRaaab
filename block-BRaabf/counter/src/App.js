import React from "react";
import "./style.css"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

     handleIncreament = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecreament = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    reset = () => {
        this.setState({
            counter: 0
        })
    }
    render() {
        return (
            <center>
                <h1>{this.state.counter}</h1>
                <h2>Steps</h2>
             <div className="steps">
                <span>05</span>
                <span>10</span>
                <span>15</span>
             </div>
            <button onClick={this.handleIncreament}>Increament</button>
            <button onClick={this.handleDecreament}>Decreament</button>
            <button onClick={this.reset}>Reset</button>
            </center>
        )
    }
}

export default App;