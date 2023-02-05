import React from "react";
import Billing from "./billing";
import Shipping from "./shipping";
import "./style.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zip: "",
            city: "",
            country: "",
            errors: {
                address: "",
            }
        }
    }

    handleInput = ({target}) => {
        let {name, value} = target
        let errors = this.state.errors;

        switch (name) {
            case "address":
                errors.address =
                value.length < 8 ? "You need to enter at-least 8" : ""
                break;
        
            default:
                break;
        }

        this.setState({
            errors,
            [name] : value
        })
    }

    render() {
        console.log(this.state, "app page")
        return(
            
            <>
            <div className="flex">
            <Shipping 
            parentProps = {this.state}
            handleInput = {this.handleInput}
            />
            
            <Billing  
             parentProps = {this.state}
            handleInput = {this.handleInput}
            />

            </div>
            
            </>
            
        )
    }
}

export default App;