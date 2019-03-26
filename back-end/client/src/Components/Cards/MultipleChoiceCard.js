import React from 'react';



export default class MultipleChoiceCard extends React.Component{

    render(){
        // oke.choices = joke.choices[0].split(‘,’).map(choice => choice.trim().toLowerCase())
        var Choices = ["to get to the other side", "to get some free medium fries", "cause that white boi was on the other side"];
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                <h1>{this.props.joketype}</h1>
                    <div className="triviaQuestionParagraph">{this.props.question}</div>
                </div>
                <div className="triviaChoices">                    
                    {  Choices.map((choice=>{return <button className="triviaChoice--btn"
                                                            value={choice}
                                                            key={choice}
                                                            onClick={this.props.handleMCAnswer}>{choice}</button>}))}
                </div>
            </div>
        )
    }
}