import React from 'react';
import './App.css';

function FooterItems(props) {
    return (
        <span className="App-footer-items">
                {props.footerBarItem}
        </span>
    );
}

export default FooterItems;
