import React from 'react';
import defaultUserGroups from '../../Assets/data_defaultUsers';
import TriviaGame from '../TriviaGame';
import axios from 'axios';
import ScoreBoard from '../ScoreBoard';
import jokeTypes from '../../Assets/data_joketypes';


import Header from '../layout/HeaderNav';
import Footer from '../layout/Footer';

import soundfile from '../../Assets/Sounds/the_dating_game_1965.mp3';
import Sound from 'react-sound';

import TruthyFalseyCard from '../Cards/TruthyFalseyCard';
import MultipleChoiceCard from '../Cards/MultipleChoiceCard';
import AutoCompleteCard from '../Cards/AutoCompleteCard';



export default class TriviaForm extends React.Component{ 
    constructor(){
        super();
        this.state = {
            formdisplay: "show",
            gamedisplay: "hide"
        }
        this.triviaForm = React.createRef();
    }

    playMode = (e) => {
        e.preventDefault();

        axios.get(`/jokes/${e.target.playgroup.value}`)
        .then((res)=>{
            var jokelist = res.data;
            this.setState({
                playingGroup: e.target.playgroup.value,    
                jokelist: jokelist,
                listMax: jokelist.length - 1,
                playing: 0
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    startgame = () => {
        console.log('start');
        this.setState({
            formdisplay: "hide",
            gamedisplay: "show",
        })
    }

    nextQuestion = ( prevState )=>{
        var playing = this.state.playing; 

        if(playing < this.state.listMax){
            this.setState({playing: playing  + 1 })
        }
        else{
            return null;
        }
    }

    render(){
        function cardType(type) {
            switch(type){  
                case jokeTypes[0]:
                    return <TruthyFalseyCard/>;
                case jokeTypes[1]:
                    return <MultipleChoiceCard/>;
                case jokeTypes[2]:
                    return <AutoCompleteCard />;
                default:
                    return null;
            }
        }
        return(
        <>
        <Header user={this.props.user}/>
        <main className="triviaForm">
            <form ref={this.triviaForm}
                onSubmit={this.playMode}
                className={this.state.formdisplay}>
            <h1>Play Time!</h1>
                <fieldset>
                    <label> Select the group of friends you're playing with: 
                            <select name="playgroup" type="select">
                                {defaultUserGroups.map((group=>{return <option value = {group}
                                                                        key = {defaultUserGroups.findIndex( x=> x=== group)}>{group}
                                                                        </option>}))}
                            </select>
                    </label>
                    <label> Select the number of teams/players participating: 
                            <select name="teams" type="select">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                    </label>
                    <input type="submit" 
                            className="next--btn"
                            onClick={this.startgame}/>
                </fieldset>
            </form>
            <span className={this.state.gamedisplay}>
                <div className="scoreboard">
                    <ScoreBoard/>
                </div>
                <div className="triviaCard">
                    {cardType(jokeTypes[0])}
                </div>
            </span>
        </main>
        <Footer/>
        </>
        )
    }
}