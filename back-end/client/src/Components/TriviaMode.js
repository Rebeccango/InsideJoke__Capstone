import React from 'react';

import TriviaForm from '../Components/Forms/TriviaForm';
import TriviaGame from '../Components/Cards/TriviaGame';
import ScoreBoard from '../Components/ScoreBoard';

export default class TriviaMode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: "Guest",
            jokelist: ["hello","two"] ,
            gamedisplay: "hide",
            playing: 1,
            listMax: 0,
            nWrong: 0,
            nRight: 0
        }
    }

    submitHandler = (list) => {
        this.setState({
            jokelist : list,
            listMax: list.length -1,
            gamedisplay: "show"
        })
    }

    questionHandler =(answer)=> {
        // console.log(this)
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
        this.setState({
            playing: this.state.playing + 1
        })
    }

    render(){
        return(
            <>
            {/* {this.state.playing === this.stat   e.listMax &&  <h1>You're done!</h1> } */}
                <TriviaForm submitHandler={this.submitHandler}/>
                <span className={this.state.gamedisplay}>
                    <div className="triviaGameDisplay">
                        <TriviaGame list={this.state.jokelist}
                                    playing={this.state.playing}
                                    nextQuestion={this.questionHandler}/>
                    </div>
                    <span className={this.state.gamedisplay}>
                        <ScoreBoard correct={this.state.nRight}
                                    incorrect={this.state.nWrong}/>
                    </span>
                </span>
            </>
        )
    }
}