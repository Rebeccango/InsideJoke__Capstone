import React from 'react';

export default class ScoreBoard extends React.Component{
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
                <div className="scoreboard--teams">
                    <div className="scoreboard--team">
                        <h3>TEAM {this.state.teams}</h3>
                        <h3>{this.state.score.team1}</h3>
                    </div>
                    <div  className="scoreboard--team">
                        <h3>TEAM {this.state.teams - 1}</h3>
                        <h3>{this.state.score.team2}</h3>
                    </div>
                </div>
            </div>
        )
    }
}