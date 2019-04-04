import React from 'react';
import SkillButtonBar from './SkillButtonBar';
import InformationTable from './InformationTable';

const SkillCostContainer=()=>{
    return (
        <div className="ui raised padded container segment">
            <SkillButtonBar />
            <InformationTable />
        </div>
    )
}

export default SkillCostContainer;