import React from "react";

class Billing extends React.Component {
    constructor(props) {
        super(props)
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

    handleCopy = (event) => {
        if(event.target.checked) {
            this.setState(this.props.parentProps)
        } else {
            this.setState({
                address: "",
                zip: "",
                city: "",
                country: "",
                errors: {
                    address: "",
                }
            })
        }
    }

    render() {
        let {address} = this.state.errors
        return (
            <>
                <div class="column main-heading" >
                    <div class="field">
                        <h1 class="is-size-3 has-text-primary">Billing Address</h1>
                        <div class="control">
                            <label class="checkbox">
                            <input type="checkbox"
                            onChange={this.handleCopy}
                            />
                            Same as the Shipping
                            Address?
                            </label>
                            </div>
                    </div>
                    <div class="field">
                        <label class="label">Address</label>
                        <div class="control">
                            <input 
                            name="address"
                            type="text" 
                            placeholder="e.g New Delhi Vasnat Vihar"
                            className={address && "error"}
                            onChange={this.handleInput}
                            value={this.state.address} 
                           />
                            </div>
                    </div>
                    <div class="field">
                        <label class="label">
                            ZIP/Postal Code
                        </label>
                        <div class="control">
                            <input class="input"
                            name="zip"
                             type="text" 
                             placeholder="e.g. 176057" 
                             value={this.state.zip} 
                             onChange={this.handleInput} 
                             />
                            </div>
                    </div>
                    <div class="field">
                        <label class="label">
                            City
                            </label>
                        <div class="control">
                            <input class="input"
                            name="city"
                             type="text" 
                             placeholder="e.g New Delhi" 
                             value={this.state.city} 
                             onChange={this.handleInput} 
                              />
                             </div>
                    </div>
                    <div class="field">
                        <label class="label">
                            Country
                            </label>
                        <div class="control">
                            <input class="input"
                            name="country"
                             type="text" 
                             placeholder="e.g India"
                             value={this.state.country} 
                              onChange={this.handleInput} 
                              />
                              </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Billing