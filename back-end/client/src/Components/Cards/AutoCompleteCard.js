import React from 'react';



export default class AutoCompleteCard extends React.Component{

    submitAnswer = (e)=>{
        e.preventDefault();
        var answer = e.target.autocompanswer.value.toLowerCase();
        console.log(answer);
        this.props.nextQuestion(answer);
    }

    render(){
        return(
        <div className="triviaQuestion">
            <div className="fullquestion">
                    <h1>{this.props.joketype}</h1>
                    <span>{this.props.question}</span>
            <form onSubmit={this.submitAnswer}>
                <div className="triviaChoices">
                    <input type="text" name="autocompanswer"/>
                    <input type="submit" name="submitAutocompanswer"/>
                </div>
            </form>
            </div>
        </div>
        )
    }
}