import React from 'react';

import TriviaForm from '../Components/Forms/TriviaForm';
import TriviaGame from '../Components/Cards/TriviaGame';

export default class TriviaMode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: "Guest",
            jokelist: ["hello","two"] ,
            playing: 1,
            listMax: 0,
            answer: "hide"
        }
    }

    // ASK why aren't any of my methos showing up
    submitHander = ()=>{
        console.log('test')
    }
    // 
    submitHandler = (list) => {
        this.setState({
            jokelist : list
        })
    }
    nextHandler =(answer)=> {
    //     // this method must do the following 
    //     // check what answer was submitted
    //     // check it against the correct answer
    //     // alert the participants if it is correct /incorrect
    //     // increase state
    //     console.log('Im a little teapot, here is my handler');
        console.log('answer');
        this.setState({
            playing: this.state.playing + 1
        })
    }

    render(){
        return(
            <>
                <TriviaForm submitHandler={this.submitHandler}/>
                <span className={this.state.gamediplay}>
                    <TriviaGame list={this.state.jokelist}
                                playing={this.state.playing}
                                nextQuestion={this.nextHandler}/>
                </span>
            </>
        )
    }
}