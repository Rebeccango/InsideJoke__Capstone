import React from 'react';


export default class TruthyFalseyCard extends React.Component{
    render(){
        return(
            <div className="fullquestion--mc">
                <div className="triviaQuestion">
                    {/* <h1>{this.props.joketype}</h1> */}
                    <h1>Truthy or Falsey</h1>
                    {/* <span>{this.props.question}</span> */}
                    <div className="triviaQuestionParagraph">mySQL thinks in tables?</div>
                </div>
                <div className="triviaChoices">
                    <button className="triviaChoice--btn truthy--btn"
                            // onClick={this.props.handleTF(true)}
                            >TRUTHY</button>
                    <button className="triviaChoice--btn falsey--btn"
                            // onClick={this.props.handleTF(false)}
                            >FALSEY</button>
                </div>
            </div>
        )
    }
}