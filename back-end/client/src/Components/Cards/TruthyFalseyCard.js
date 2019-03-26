import React from 'react';


export default class TruthyFalseyCard extends React.Component{

    submitanswer = (answer) => {
        this.props.submitHandler(answer)
    }
    render(){
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                    <h1>{this.props.joketype}</h1>
                    {/* <h1>Truthy or Falsey</h1> */}
                    <span className="yellow">{this.props.question}</span>
                    {/* <div className="triviaQuestionParagraph">mySQL thinks in tables?</div> */}
                </div>
                <div className="triviaChoices">
                    <button className="triviaChoice--btn truthy--btn"
                            // onClick={this.props.submitanswer(true)}
                            >TRUTHY</button>
                    <button className="triviaChoice--btn falsey--btn"
                            // onClick={this.props.submitanswer(false)}
                            >FALSEY</button>
                </div>
            </div>
        )
    }
}