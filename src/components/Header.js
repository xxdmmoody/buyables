import React from 'react';

const Header=()=>{
    return (
        <div className="ui attached inverted menu" >
            <div className="header item">
                <i className="tachometer alternate icon huge" />
                RSDB
            </div>
            
            <a className="item">About</a>
            <a className="item">FAQ</a>
        </div>
    )
}

export default Header;