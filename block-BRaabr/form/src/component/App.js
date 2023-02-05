import React from "react";
import "./style.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput : "",
            dateInput: "",
            read: "",
            textArea: "",
            error : {
                textInput: "", 
                textArea: ""
            }
        }
    }
    handleInput =({target}) => {
        let { name, value } = target;
        let error = this.state.error;

        switch (name) {
            case "textInput":
                error.textInput = 
                value.includes(Number) ? "textInput can't contain number" : "";
                break;
        
                case "textArea":
                    error.textArea = 
                    value.length < 10 ? "textArea can't less than 10 charecter" : "";
                    break;

            default:
                break;
        }
       this.setState({ error, [name]: value })
    }
    handleSubmit = () => {
        alert(`form submited on ${this.state.dateInput}`)
    }
    render() {
        let {textArea, textInput} = this.state.error;

        return (
            <form onSubmit={this.handleSubmit}>
        {/* text input */}
                <label htmlFor="input">Text Input</label>
                <input
                name="textInput"
                value={this.state.textInput}
                onChange={this.handleInput} 
                type="text" 
                id="input"
                className={textInput && "error"}
                />
                <span>{textInput}</span>
                 
        {/* date */}
                <label htmlFor="date">Date Input</label>
                <input 
                name="dateInput"
                onChange={this.handleInput} 
                type="date" 
                id="date" 
                className="date"/>
        {/* file */}
                <label htmlFor="file">File Input</label>
                <input
                name="file"
                onChange={this.handleInput} 
                type="file" 
                id="file" 
                className="file"
                />
        {/* read only input */}
                <label htmlFor="read" className="read">Read-Only Input</label>
                <input 
                type="read" 
                id="read"  
                placeholder="This can only be copied"
                readOnly
                value={this.state.textInput}/>
        {/* disabled input*/}
                <label htmlFor="disabled" className="disabled">Disabled Input</label>
                <input 
                type="disabled" 
                id="disabled" 
                disabled/>
        {/* textarea */}
        <label htmlFor="textarea" className="textarea">Textarea</label>
                <input 
                name="textarea"
                
                onChange={this.handleInput} 
                type="textarea" 
                id="textarea"
                className={textArea && "error"}
                />
                <span>{textArea}</span>
        {/* disabled textarea */}
                <label htmlFor="textarea" className="textarea">Textarea Disabled</label>
                <input 
                type="textarea" 
                id="textarea" 
                disabled
                
                />
        {/* submit */}
                <input className="submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default App;