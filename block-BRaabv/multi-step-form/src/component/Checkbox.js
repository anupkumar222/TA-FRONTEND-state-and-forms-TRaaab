import React from "react";
import "./style.css";

class Checkbox extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            checkbox: false
        }
     }

     handleChecked = () => {
        this.setState({checkbox: true})
     }

     render() {
        const {handleStep} = this.props
        return (
            <>
            <h2>Checkbox</h2>
            <label> 
            <input
            onClick={this.handleChecked}
            type="checkbox"
            />I want to add this option
            </label>

           <input
           type="button"
           value="Back"
           onClick={() => handleStep(2)}
           />
           <input
           type="button"
           value="Submit"
           />
            </>

        )
     }
}

export default Checkbox;