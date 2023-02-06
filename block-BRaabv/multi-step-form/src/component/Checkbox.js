import React from "react";
import "./style.css";

class Checkbox extends React.Component {
     constructor(props) {
        super(props)
     }

     render() {
        
        return (
            <>
            <h2>Checkbox</h2>
            <label> 
            <input
            type="checkbox"
            />I want to add this option
            </label>

           <input
           type="button"
           value="Back"
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