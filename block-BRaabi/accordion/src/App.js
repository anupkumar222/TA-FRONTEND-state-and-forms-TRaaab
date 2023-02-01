import React from "react";
import "./style.css"
import Questions from "./data";

class App extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            activeIndex: null,
        }
    }

    render() {
        return(
            
            <>
            <h1>FAQ</h1>
            <div className="container">
            <ul>
            {Questions.map((ques, index) => (
 
                <li onClick={this.open} >
                    <div  className={this.state.activeIndex === index ? 'active flex li' : 'flex li color'}>
                    <div onClick={() => {this.setState({activeIndex: index})}} className="ques">{ques.Q} 
                    </div>
                    <div>📂</div>
                    </div>
                    {
                        index === this.state.activeIndex && <p>{ques.A}</p>
                    }
               
             </li>
            ))}
            </ul>
            </div>

            </>
     
        )
    }
}
export default App;