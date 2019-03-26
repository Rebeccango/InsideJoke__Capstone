import React from 'react';


export default class MultipleChoiceCard extends React.Component{

    submitAnswer = (answer) =>{
        console.log(answer);
        this.props.nextQuestion(answer);
    }

    render(){
        var choiceslist = this.props.choices;
        console.log(choiceslist);
        var choicesArr = choiceslist[0].split(',').map(choice => choice.trim().toLowerCase());
        console.log(choicesArr);
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                <h1>{this.props.joketype}</h1>
                    <div className="triviaQuestionParagraph">{this.props.question}</div>
                </div>
                <div className="triviaChoices">  

                { choicesArr.map( (choice=>{return <button className= "triviachoice"
                                                            key= {choice}
                                                            value={choice}
                                                            onClick={()=>{this.props.nextQuestion({choice})}}>{choice}</button>}))}
                </div>}
            </div>
        )
    }
}