import React from 'react';
import axios from 'axios';
import jokeTypes from '../Assets/data_joketypes';

import ScoreBoard from './ScoreBoard';
import SampleData from '../Test/Data/sampleData';

import TruthyFalseyCard from '../Components/Cards/TruthyFalseyCard';
import MultipleChoiceCard from '../Components/Cards/MultipleChoiceCard';
import AutoCompleteCard from '../Components/Cards/AutoCompleteCard';

export default class Playmode extends React.Component {
    state = {
        group: "" ,       
        jokelist: [],
        playing: 0,
        listMax: 0,
        sampledata : SampleData
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

    componentWillMount(){
        axios.get('/jokes')
        .then((res)=>{
            console.log(res.data)
            var jokelist = res.data;
            this.setState({
                jokelist: jokelist,
                listMax: jokelist.length - 1
            })
        })
        .catch((err)=>{
            console.log(err)
        })
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
        // const {answer, auth_group, author, choices, question, type} = this.state.playlist
        const list = this.state.jokelist;
        var index = this.state.playing;
        
                if (list.length === 0){
                    return null;
                }
        //ask IAN about this, why is the object returned 
        console.log('the question we are accessing is');
        console.log(list[list.length-1]);
        console.log(list[list.length-1].choices[0]);
        console.log(list[list.length-1].choices[3]);

        const sampledata = this.state.sampledata;
        return(
            <section className="PlaylistPage">
                {/* <ScoreBoard/> */}
                <div className="triviaCard">
                    {cardType(jokeTypes[1])}
                </div>
            </section>
        )
    }
}