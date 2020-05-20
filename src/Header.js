import React from 'react';
import HeaderItems from "./HeaderItems";
import cat from "./cat.png";

function Header(props) {
    return (
        <div className="App-header">
           <span>
               <img src={cat} alt="" width="60"/>
               {props.headerBarItems.map(el => <HeaderItems key={el} headerBarItem={el}/>)}
           </span>
        </div>
    );
}

export default Header;
