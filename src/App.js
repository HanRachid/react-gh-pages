import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Addproduct from "./pages/AddProduct";

class App extends Component {
    constructor(props) {
      super(props);
      
    }

    render(){
        console.log("oui")
        return (
            <div className="App">
                <BrowserRouter>
                <Routes>
                <Route path="/" element ={ <Home/>} />
                <Route path="/addproduct" element ={ <Addproduct/>} />
                </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;