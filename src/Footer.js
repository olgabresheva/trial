import React from 'react';
import './App.css';
import FooterItems from "./FooterItems";

function Footer(props) {
    return (
        <div className="App-footer">
            <span>
                {props.footerBarItems.map(el => <FooterItems key={el} footerBarItem={el}/>)}
            </span>
        </div>
    );
}

export default Footer;
