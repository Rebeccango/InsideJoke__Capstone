import React from 'react';



export default class AutoCompleteCard extends React.Component{
    render(){
        var choiceslist = this.props.choices;
        var choicesArr = choiceslist[0].split(',').map(choice => choice.trim().toLowerCase());
        console.log(choiceslist);
        return(
            <div className="fullquestion">
                <div className="triviaQuestion">
                    <h1>{this.props.joketype}</h1>
                    <span>{this.props.question}</span>
                </div>
            <form>
                <div className="triviaChoices">
            
                { choicesArr.map( (choice=>{return <button className= {`triviachoice--${choicesArr.findIndex( x => x === choice)}`}
                                                            key= {choicesArr.findIndex( x => x === choice)}
                                                            onClick={this.props.nextQuestion}>{choice}</button>}))}
                {/* <button className="triviaChoice--btn truthy--btn"
                        name="autoCompleteAnswer"
                        onClick={this.props.nextQuestion}>TRUTHY</button> */}
                </div>
            </form>
            </div>
        )
    }
}