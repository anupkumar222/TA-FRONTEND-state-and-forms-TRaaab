import React from "react";
import "./style.css"
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
             <div className=" flex space-between">
                <ul className="flex space-between">
                    <li className="steps flex space-between">
                        <strong>1</strong>
                    <span>Sign Up</span>
                    
                    </li>
                    <li className="steps flex space-between">
                        <strong>2</strong>
                    <span>Message</span>
                    
                    </li>
                
                    <li className="steps flex space-between">
                        <strong>3</strong>
                    <span>Checkbox</span>
                    
                    </li>
                
                
                    </ul>

            </div>
            </>

        )
    }
}

export default Header