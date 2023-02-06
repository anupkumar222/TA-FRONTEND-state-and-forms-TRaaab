import React from "react";
import Header from "./Header";
import SignUp from "./Sign-up";
import Message from "./Message";
import Checkbox from "./Checkbox";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    handleStep = (step) => {
        this.setState({
            step
        })
    }

    render () {
        const {step} =this.state
        return (
            <>
            <div className="container">
                <Header />
            {step === 1 && 
            <SignUp 
            handleStep = {this.handleStep}
            />}
            {step === 2 && 
            <Message
            handleStep = {this.handleStep}
            />}
            {step === 3 &&
             <Checkbox
             handleStep = {this.handleStep}
             />}
            
            </div>
            
            </>
            
        )
    }
}

export default App