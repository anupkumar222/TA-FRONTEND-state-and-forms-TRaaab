import React from "react";
import "./style.css"
import data from "../data.json"

class Header extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="box">
                <div class="products-filter flex space-between">
                    <p>16 Products found. </p>
                    <div class="sort">Order by
                    <select>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to highest</option>
                        <option value="highest">Highest to lowest</option>
                    </select>
                        </div>
                        </div>
            </div>

        )
    }
}


export default Header;