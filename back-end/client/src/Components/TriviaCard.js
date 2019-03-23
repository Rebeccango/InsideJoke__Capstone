import React from 'react';
//Components

export default class TriviaCard extends React.Component{
    constructor(){
        super();
        this.state = {
            current : [],
            played: [],
            list: [],
        }
    }
    render(){
        return(
            <div className="playCard">
                <span className="display--question">
                    <h3>Question:</h3>
                    <p>{this.props.question}</p>
                </span>
                <span className="display--options">
                    <h3>chooseone:</h3>
                    <p>{this.props.choices}</p>
                </span>
                <span className="display--answer">
                    <h3>Answer</h3>
                    <p>{this.props.answer}</p>
                </span>
            </div>
        )
    }
}