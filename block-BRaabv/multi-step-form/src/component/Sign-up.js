import React from "react";
import "./style.css"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            DOB: "",
            email: "",
            address: ""
        }
    }

    handleInput = ({target}) => {
        let {name, value} = target
        this.setState({
            [name] : value
        })
    }

    render() {
        const {handleStep} = this.props
        return(
            <>
            <h2>
                Sign UP
            </h2>
            <div>
            <div className="flex space-between child-box">
                <div>
                <label htmlFor="fName">First Name</label>
                <input 
                name="firstName"
                onChange={this.handleInput}
                className="primary"
                id="fName"
                type="text"
                />
                </div>
                <div>
                <label htmlFor="lName">Last Name</label>
                <input 
                name="lastName"
                onChange={this.handleInput}
                className="primary"
                id="lName"
                type="text"
                />
                </div>

                
            </div>

            <div className="flex space-between child-box">
                <div>
                <label htmlFor="date">Date of Birth</label>
                <input 
                name="DOB"
                onChange={this.handleInput}
                className="primary"
                id="date"
                type="date"
                />
                </div>
                <div>
                <label htmlFor="email">Email Address</label>
                <input 
                name="email"
                onChange={this.handleInput}
                className="primary"
                id="email"
                type="email"
                />
                </div>

                
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input 
                name="address"
                onChange={this.handleInput}
                className="primary"
                id="address"
                type="text"
                />
                </div>
                <input
                onClick={() => handleStep(2)}
                type="button"
                value="Next Step"
                className="first-step" 
                />
            </div>

            </>

        )
    }
}

export default SignUp