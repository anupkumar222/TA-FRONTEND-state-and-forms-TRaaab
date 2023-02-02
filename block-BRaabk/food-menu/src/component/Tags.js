import "./style.css";
import Item from "./Item"
import React from "react";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "all",
        }

    }

    handleClick = (category) => {
        this.setState({
            activeCategory: category,
        })
    }

    render() {
        return(
            <div className="container">
            <div className="category-box">
            {["all", "breakfast", "lunch", "shakes"].map((category) => (
                
                    <button className= { category === this.state.activeCategory ? "active" : "category"} onClick= {() => { this.handleClick(category) }} > { category } </button>
                
            ))}
            </div>
            <Item activeCategory= { this.state.activeCategory } />
            </div>
            
        )
    }
}

export default Tags;