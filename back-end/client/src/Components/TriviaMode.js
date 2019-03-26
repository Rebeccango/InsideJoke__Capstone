import React from 'react';
import jokeTypes from '../Assets/data_joketypes';
import sampleData from '../Test/Data/sampleData';

import TriviaForm from '../Components/Forms/TriviaForm';
import TriviaGame from '../Components/Cards/TriviaGame';

export default class TriviaMode extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: "Guest",
            jokelist: [],
            playing: 0,
            listMax: 0,
            answer: "hide"
        }
    }

    submitHandler = (list)=>{
        this.setState({
            jokelist : list
        })
    }

    render(){
        return(
            <>
                <TriviaForm submitHandler={this.submitHandler}/>
                <TriviaGame list={this.state.jokelist}
                            playing={this.state.playing}/>
            </>
        )
    }
}