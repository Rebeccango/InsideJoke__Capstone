import React from 'react';
//Components
import HeaderTextBanner from './Brandelements/HeaderTextBanner';

export default class TriviaCard extends React.Component{
    constructor(){
        super();
        this.state = {
            temp : []
        }
    }
    render(){
        return(
            <div>
                <HeaderTextBanner/>
                Test
            </div>
        )
    }
}