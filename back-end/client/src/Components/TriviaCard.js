import React from 'react';
//Components

export default class TriviaCard extends React.Component{
    constructor(){
        super();
        this.state = {
            temp : []
        }
    }
    render(){
        return(
            <div className="playCard">
                <span className="question">
                    <h3>Question:</h3>
                </span>
                <span className="answer">
                    <h3>Answer</h3>
                </span>
            </div>
        )
    }
}