import React from "react";
import data from "./data";


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            range: 0
        }
    }
    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    rangeChange = (event) => {
        console.log(event.target.value)
        this.setState({
            range: event.target.value
        })
    }
    render() {
        return (
            <>
            <div className="flex container">
                <input onChange={this.onChange} type="text" placeholder="Type something" />
                <input onChange={this.rangeChange} type="range" value={this.state.range} />
            </div>
            <div className="cards">
                {Object.keys(data).map((style) => (
                <div className="single-card">
                     <h1>{data[style]}</h1>
                     <h2 style={{fontFamily : data[style], fontSize: `${this.state.range}px`}}>{this.state.value}</h2>
                 </div>
                ))}
               
            </div>
            </>

        )
    }
}

export default Input;