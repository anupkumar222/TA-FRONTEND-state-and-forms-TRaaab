import React from "react";

class Aside extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="flex ">
                <aside>
                    <ul>
                        <li>
                            HOME
                        </li>
                        <hr/>
                        <li>
                            Contact
                        </li>
                        <hr/>
                        <li>
                            About
                        </li>
                        <hr/>
                    </ul>
                </aside>

            </div>
        )
    }
}

export default Aside;