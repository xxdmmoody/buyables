import React from 'react';

const InformationTable=()=>{
    return (
        <div className="ui vertically divided grid">
            <div className="four column row">
                <div className="seven wide column">Item</div>
                <div className="three wide column">Cost</div>
                <div className="three wide column">Exp</div>
                <div className="three wide column">GP/XP</div>
            </div>
            <div className="four column row">banana</div>
            <div className="four column row">banana</div>
            <div className="four column row">banana</div>
        </div>
    );
}

export default InformationTable;