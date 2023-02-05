import React from "react";

class Shipping extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     address: "",
        //     zip: "",
        //     city: "",
        //     country: "",
        //     errors: {
        //         address: "",
        //     }
        // }
    }

    // handleInput = ({target}) => {
    //     let {name, value} = target
    //     let errors = this.state.errors;

    //     switch (name) {
    //         case "address":
    //             errors.address =
    //             value.length < 8 ? "You need to enter at-least 8" : ""
    //             break;
        
    //         default:
    //             break;
    //     }

    //     this.setState({
    //         errors,
    //         [name] : value
    //     })
    // }

    render() {
        let {parentProps, handleInput} = this.props
        console.log(this.props, "billing")
        let {address} = parentProps.errors
        return(
            <>
            <div className="column main-heading" >
            <h1 className="is-size-3 has-text-primary">Shipping Address</h1>
            <form>
            <div className="field">
                <label className="label">Address</label>
                <div className="control">
                    <input 
                    name="address" 
                    className={address && "error"}
                    type="text" 
                    onChange={handleInput} 
                    placeholder="e.g New Delhi Vasnat Vihar"/>
                </div>
            </div>
            <div className="field">
                <label className="label">ZIP/Postal Code</label>
                <div className="control">
                    <input name="zip" className="input" 
                    type="text" 
                    onChange={handleInput} 
                    placeholder="e.g. 176057"/>
                </div>
            </div>
            <div className="field">
                <label className="label">City</label>
                <div className="control">
                    <input name="city" 
                    className="input" 
                    type="text" 
                    onChange={handleInput}
                     placeholder="e.g New Delhi"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Country</label>
                <div className="control">
                    <input className="input" 
                    name="country" 
                    type="text" 
                    onChange={handleInput} 
                    placeholder="e.g India"/>
                </div>
            </div>
           </form>

        </div>
        </>
        )
    }
}

export default Shipping