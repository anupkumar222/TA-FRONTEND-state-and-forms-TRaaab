import React from "react";
import "./style.css"

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    handleChange = ({target}) => {
        let {name, value} = target
        this.setState({
            [name] : value
        })
    }

    render () {
        const {handleStep} = this.props
        return (
            <>
            <h2>Message</h2>
            <div>
                <label htmlFor="message">
                Message
                </label>
                <textarea 
                className="message"
                id="message" 
                onChange={this.handleChange}
                name="message"
                rows="4" cols="50"
                />
                <input
                type="button"
                value="Back"
                className="button"
                
                onClick={() => handleStep(1)}
                />
                <input
                type="button"
                value="Next Step"
                className="button"
                onClick={() => handleStep(3)}
                />
            </div>
            </>

        )
    }
}

export default Message;