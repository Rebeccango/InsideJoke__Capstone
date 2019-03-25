import React from 'react';



export default class AutoCompleteCard extends React.Component{
    render(){

        var Choices = ["to get to the other side", "to get some free medium fries", "cause that white boi was on the other side"];
        return(
            <div className="fullquestion">
                <div className="triviaQuestion">
                    {/* <h1>{this.props.joketype}</h1> */}
                    <h1>Auto Complete:</h1>
                    {/* <span>{this.props.question}</span> */}
                    <div className="triviaQuestionParagraph">"Why did the chicken cross the road?</div>
                </div>
                <div className="triviaChoices">
                <form>
                    {/* create ref */}
                    <input type="submit" name="autocompleteTriviaAnswer"/>
                </form>
                </div>
            </div>
        )
    }
}