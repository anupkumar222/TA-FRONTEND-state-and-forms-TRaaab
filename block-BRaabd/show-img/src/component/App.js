import React from "react";
import Style from "./style.css"

export default  class Image extends React.Component {
    constructor(props) {
        super(props);
        this.imageNames = ['basketball', 'cricket', 'laptop', 'phone', 'pubg', 'tiger'];
        this.state = {
            currentImage: `/assets/basketball.jpg`
        } 
    }
handleClick = (event) => {
    this.setState({
        currentImage: `/assets/${event.target.innerText}.jpg`
    })
}

    render() {
        return (
            <>
            <div className="container">
            <div>
        {this.imageNames.map((name) => (
            <button className={this.state.currentImage === `/assets/${name}.jpg` ? 'active' : 'margin'} onClick={this.handleClick}>{name}</button>
        ))}
    </div>
           <div>
        <img className="img" src={this.state.currentImage} alt={this.state.currentImage}/>
           </div>

            </div>
     
            </>
 
        )
    }
}