import React from 'react';

export default class ScoreBoard extends React.Component{
    render(){
        return(
            <div className="scoreboard">
                {/* <h3>SCORE</h3> */}
                <h5>Correct: {this.props.correct}</h5>
                <h5>InCorrect: {this.props.incorrect}</h5>
            </div>
        )
    }
}