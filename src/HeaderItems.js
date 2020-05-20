import React from 'react';
import './App.css';

function HeaderItems(props) {
    return (
        <span className="App-header-items">
                {props.headerBarItem}
        </span>
    );
}

export default HeaderItems;
