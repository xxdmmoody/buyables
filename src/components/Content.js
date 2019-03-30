import React from 'react';
import SkillCostContainer from './SkillCostContainer';
import ItemPricesContainer from './ItemPricesContainer';

class Content extends React.Component {

    render(){
        return (
            <div className="ui two columned stackable padded grid">
                <div className="ui eight wide column">
                    <SkillCostContainer />
                </div>
                <div className="ui eight wide column">
                    <ItemPricesContainer />
                </div>
                
            </div>
        );
    }
}

export default Content;