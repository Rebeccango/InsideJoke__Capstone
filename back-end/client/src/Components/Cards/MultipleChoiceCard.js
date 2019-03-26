import React from 'react';



export default class MultipleChoiceCard extends React.Component{

    render(){
        
        var choiceslist = this.props.choices;
        console.log(choiceslist);
        var choicesArr = choiceslist[0].split(',').map(choice => choice.trim().toLowerCase());
        console.log(choicesArr);

        var Choices = ["option 1", "option 2", "option 3 - this broken"];
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                <h1>{this.props.joketype}</h1>
                    <div className="triviaQuestionParagraph">{this.props.question}</div>
                </div>
                <div className="triviaChoices">  


                {/* This is BROKEN ASK FOR HELP  */}
                { choicesArr.map( (choice=>{return <button className= "triviachoice"
                                                            key= {choice}
                                                            value={choice}
                                                            onClick={this.props.nextQuestion}>{choice}</button>}))}
                                 
                    {/* {  Choices.map((choice=>{return <button className="triviaChoice--btn"
                                                            value={choice}
                                                            key={choice}
                                                            onClick={this.props.nextQuestion}>{choice}</button>}))} */}
                </div>
            </div>
        )
    }
}