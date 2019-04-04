import React from 'react';

import construction from '../images/construction.png';
import cooking from '../images/cooking.png';
import herblore from '../images/herblore.png';
import prayer from '../images/prayer.png';
import smithing from '../images/smithing.png';
import firemaking from '../images/firemaking.png';
import crafting from '../images/crafting.png';

const SkillButtonBar=()=>{
    return(
        <div className="ui fluid buttons">
            <button className="ui icon button" src={construction} onClick={()=>console.log("swag")}>CO</button>
            <button className="ui icon button" src={cooking} onClick={()=>console.log("swag")}>CK</button>
            <button className="ui icon button" src={herblore} onClick={()=>console.log("swag")} >HB</button>
            <button className="ui icon button" src={smithing} onClick={()=>console.log("swag")} >SM</button>
            <button className="ui icon button" src={crafting} onClick={()=>console.log("swag")} >CF</button>
            <button className="ui icon button" src={firemaking} onClick={()=>console.log("swag")} >FM</button>
            <button className="ui icon button" src={prayer} onClick={()=>console.log("swag")} >PR</button>       
        </div>
    );
}

export default SkillButtonBar;