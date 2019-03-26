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
            answer: "hide",
            nWrong: 0,
            nRight: 0
        }
    }

    submitHandler = (list) => {
        this.setState({
            jokelist : list,
            listMax: list.length -1
        })
    }

    questionHandler =(answer)=> {
    //     // this method must do the following 
        console.log(this)
    if(answer === this.state.jokelist[this.state.playing].answer){
         this.setState({
             nRight: this.state.nRight + 1
         })
         window.alert("correct you are");
     }
     else{
         console.log('incorrect answer');
         this.setState({
             nWrong: this.state.nWrong + 1
         })
         window.alert("incorrect");
     }
        console.log('answer');

        this.setState({
            playing: this.state.playing + 1
        })
    }

    render(){
        return(
            <>
            {/* {this.state.playing === this.stat   e.listMax &&  <h1>You're done!</h1> } */}
                <TriviaForm submitHandler={this.submitHandler}/>
                <span className={this.state.gamediplay}>
                    <TriviaGame list={this.state.jokelist}
                                playing={this.state.playing}
                                nextQuestion={this.questionHandler}/>
                </span>
            </>
        )
    }
}