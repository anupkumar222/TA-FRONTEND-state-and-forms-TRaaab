import React from "react";
import "./style.css"

class Message extends React.Component {
    constructor(props) {
        super(props);
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
                name="message"
                rows="4" cols="50"
                />
                <input
                type="button"
                value="Back"
                className="button"
                />
                <input
                type="button"
                value="Next Step"
                className="button"
                onClick={handleStep}
                />
            </div>
            </>

        )
    }
}

export default Message;