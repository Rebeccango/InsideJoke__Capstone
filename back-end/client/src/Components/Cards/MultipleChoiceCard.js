import React from 'react';



export default class MultipleChoiceCard extends React.Component{
    render(){

        var Choices = ["to get to the other side", "to get some free medium fries", "cause that white boi was on the other side"];
        return(
            <div className="fullquestion">
                <div className="triviaQuestion">
                    {/* <h1>{this.props.joketype}</h1> */}
                    <h1>Multiple Choice:</h1>
                    {/* <span>{this.props.question}</span> */}
                    <div className="triviaQuestionParagraph">"Why did the chicken cross the road?</div>
                </div>
                <div className="triviaChoices">
                    {/* <button className="triviaChoice--btn">{Choices[1]}</button> */}
                    
                    {  Choices.map((choice=>{return <button className="triviaChoice--btn"
                                                            value={choice}
                                                            key={choice}
                                                            onClick={this.props.handleMCAnswer}>{choice}</button>}))}
                </div>
            </div>
        )
    }
}