import React from "react";
import "./style.css";
import Data from "./data.json";
import Info from "./Info";

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            activeMovie: {}
        }
    }

handleInfo = (movie) => {
    this.setState({
        toggle: true,
        activeMovie: movie
    })
}
handleClose = () => {
    this.setState({
        toggle: false,
        activeMovie: {}
    })
}

    render() {
        if(this.state.toggle) {
            return <Info 
            activeMovie = {this.state.activeMovie} 
            handleClose = {this.handleClose}
            />
        }
        return(
            <section>
               {Data.map((movie) => (
                    <article>
                        <figure className="figure">
                        <img className="img" src={movie.Images[0]} alt="avtar" />
                        </figure>
               
                <h1>{movie.Title}</h1>
                <p>{movie.Released}</p>
                <button onClick={() => this.handleInfo(movie) } >
                    More Info
                </button>
                
            </article>
                ))}
        </section>
        )
    }
}

export default Section;