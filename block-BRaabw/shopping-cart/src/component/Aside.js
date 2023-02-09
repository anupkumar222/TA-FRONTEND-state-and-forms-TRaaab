import React from "react";
import "./style.css";

class Aside extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className=" container">
                <ul className="flex wrap size-box">
                    <li className="size">
                        S
                    </li>
                    <li className="size">
                        XS
                    </li>
                    <li className="size">
                        M
                    </li>
                    <li className="size">
                        X
                    </li>
                    <li className="size">
                        L
                    </li>
                    <li className="size">
                        XL  
                    </li>
                    <li className="size">
                        XXL
                    </li>
                </ul>
            </div>
        )
    }
}

export default Aside;