import React from "react";
import Header from "./Header";
import Item from "./Item";
import Tags from "./Tags";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            
            <Header />
            <Tags />
            </>
        )
    }
}

export default App;