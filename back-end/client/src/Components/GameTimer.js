import React from 'react';

export default class GameTimer extends React.Component{
state = {
    teams: 2,
    score: {
        team1: 0,
        team2: 0
        }
    }
    render(){
        return(
            <div className="scoreboard">
                <div className="timer">
                    <h3>TIMER</h3>
                        5:00
                </div>            
            </div>
        )
    }
}