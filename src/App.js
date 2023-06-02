import React from "react";
import {Footer, Header, Whatgpt3,Possibility, Features,  Blog} from './containers';
import {Brand, Navbar , CTA} from './Components';
import  './app.css';

const App = () =>{
    return (
        <div className="App">
            <div className="gradient__bg">
            <Navbar/>
            <Header/>
            </div>
            <Brand/>
            <Whatgpt3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
            </div>
    );
}
   export default App;