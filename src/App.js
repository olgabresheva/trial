import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    //const version = '0.2.321';
    const headerBarItems = ['About', 'Products', 'Price'];
    const footerBarItems = ['Contacts', 'About Us', 'Just a footer item'];

    return (
        <div className="App">
            <Header headerBarItems={headerBarItems}/>
            <Content/>
            <Footer footerBarItems={footerBarItems}/>
        </div>
    );
}

export default App;
