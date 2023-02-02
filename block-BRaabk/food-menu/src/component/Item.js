import "./style.css";
import React from "react";
import data from "../data.json";

class Item extends React.Component {
    render() {
        let items;
        let activeCategory = this.props.activeCategory;
        if(activeCategory === "all") {
            items = data
        } else {
            items = data.filter((item) => item.category === activeCategory)
        }
        return (
            <>
    {items.map((item) => (
                        <div className="container color parent flex">
                        <div className="item flex space">
                            <aside>
                                <img width="100%" src={item.img} alt={item.title}  />
                            </aside>
                            <article className="article">
                                <div className="flex space">
                                    <h2>{item.title}</h2>
                                    <p>${item.price}</p>
                                </div>
                                <hr />
                                <p>{item.desc}</p>
                            </article>
    
                        </div>
    
                    </div>
    ))}

            </>

        )
    }
}

export default Item;