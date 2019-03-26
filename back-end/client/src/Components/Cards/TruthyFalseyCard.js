import React from 'react';


export default class TruthyFalseyCard extends React.Component{

    submitanswer = (answer) => {
        console.log('answer from true false card');
        console.log(answer);
        this.props.nextQuestion(answer);
    }

    render(){
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                    <h1>{this.props.joketype}</h1>
                    <span className="yellow">{this.props.question}</span>
                </div>
                <div className="triviaChoices">
                    <button className="triviaChoice--btn truthy--btn"
                            onClick={()=>{ this.submitanswer("True")}}
                            >TRUTHY</button>
                    <button className="triviaChoice--btn falsey--btn"
                            onClick={()=>{this.submitanswer("False")}}
                            >FALSEY</button>
                </div>
            </div>
        )
    }
}