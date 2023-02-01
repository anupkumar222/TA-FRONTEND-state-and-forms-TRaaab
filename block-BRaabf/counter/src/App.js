import React from "react";
import "./style.css"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            step: 5,
            max: 15
        }
    }

     handleIncreament = () => {
        let {counter, max, step} = this.state;
        this.setState({
            counter: counter + step > max ? counter : counter + step
        })
    }
    handleDecreament = () => {
        this.setState({
            counter: this.state.counter - this.state.step
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
                <h2 className="first">Steps</h2>
                <h2 className="second">Max</h2>
             <div className="steps">
                <>
                
            {[5, 10, 15].map((step) => (
                <button
                onClick={() => {
                    this.setState({ step: step})
                }}
                className={this.state.step === step ? 'active-step' : ""}
                >
                    {step}
                </button>
            ))}
            
                </>

                <>
                
            {[15, 100, 200].map((max) => (
                <button
                onClick={() => {
                    this.setState({ max: max})
                }}
                className={this.state.max === max ? 'active-step' : ""}
                >
                    {max}
                </button>
            ))}
                </>

             </div>
            <button onClick={this.handleIncreament}>Increament</button>
            <button onClick={this.handleDecreament}>Decreament</button>
            <button onClick={this.reset}>Reset</button>
            </center>
        )
    }
}

export default App;