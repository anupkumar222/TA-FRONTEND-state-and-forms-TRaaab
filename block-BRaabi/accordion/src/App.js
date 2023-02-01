import React from "react";
import "./style.css"
import Questions from "./data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Q: "JavaScript",
            A:  'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.'
        }
    }

    open = () => {
        Questions.map((ans, i) => {
            <p>
                {ans.A}
            </p>
        })
    }
    render() {
        return(
            <>
            <h1>Article</h1>
            <div className="container">
            <ul>
            {Questions.map((ques) => (
                <li className="flex color">
                <div className="ques">{ques.Q}</div>
                <button onClick={this.open}>📂</button>
             </li>
            ))}
            </ul>
            </div>

            </>
     
        )
    }
}
export default App;