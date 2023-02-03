import React from "react";
import "./style.css"

class Info extends React.Component {

 
    render() {
        const {activeMovie, handleClose} = this.props
        return(
            <section>
              <article>
                {activeMovie.Images.map((img) => (
                  <img className="img" src={img} alt="avtar" />
                ) )}
                <div className="detail">
                <h1>{activeMovie.Title}</h1>
             <p>{activeMovie.Released}</p>
             <p>{activeMovie.Genre}</p>
             <p>{activeMovie.Year}</p>
             <p>Director: {activeMovie.Director}</p>
             <p>Actors: {activeMovie.Actors}</p>
             <p>Language: {activeMovie.Language}</p>
             <button onClick={handleClose}>Close</button>

                </div>

            </article>
             

     </section>
        )
    }
}

export default Info