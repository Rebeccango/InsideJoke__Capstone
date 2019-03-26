import React from 'react';
import jokeTypes from '../Assets/data_joketypes';

import ScoreBoard from './ScoreBoard';

import TruthyFalseyCard from './Cards/TruthyFalseyCard';
import MultipleChoiceCard from './Cards/MultipleChoiceCard';
import AutoCompleteCard from './Cards/AutoCompleteCard';

export default class TriviaGame extends React.Component {
    state = {
        playingroup: this.props.playingGroup,       
        jokelist: [],
        playing: 0,
        listMax: 0,
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
                    return <AutoCompleteCard/>;
                default:
                    return null;
            }
        }
        const list = this.props.list;
        var index = this.state.playing;
        
                if (list.length === 0){
                    return null;
                }
        return(
            <section className="PlaylistPage">
                {/* <ScoreBoard/> */}
                <div className="triviaCard">
                    {cardType(list[index].type)}
                </div>
            </section>
        )
    }
}