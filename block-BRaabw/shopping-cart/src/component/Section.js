import React from "react";
import "./style.css";

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="product-box">
                <img className="product-img" src="/static/products/100_1.jpg" alt="sample" />
                <span className="tag">Free Shipping</span>

                <div class="product-item-details">
                    <p class="product-item-title">
                        Sphynx Tie Dye Wine T-Shirt
                    </p>
                    <div class="line">
                    </div>
                    <h3 class="product-item-price">
                        $9
                        </h3>
                        <button>Add To Cart</button>
                        </div>
            </div>
        )
    }
}


export default Section;