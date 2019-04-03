import React from 'react';

import construction from '../images/construction.png';

const SkillButtonBar=()=>{
    return(
        <div className="ui icon buttons">
            <button className="ui button"><i className="construction icon"></i></button>
            <button className="ui button"><i className="cooking icon"></i></button>
            <button className="ui button"><i className="crafting icon"></i></button>
            <button className="ui button"><i className="herblore icon"></i></button>
            <button className="ui button"><i className="prayer icon"></i></button>
            <button className="ui button"><i className="smithing icon"></i></button>
            <button className="ui button"><i className="firemaking icon"></i></button>
        </div>
    );
}

export default SkillButtonBar;