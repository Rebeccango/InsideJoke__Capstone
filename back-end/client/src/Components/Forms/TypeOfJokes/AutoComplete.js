import React from 'react';


export default class AutoComplete extends React.Component{
    render(){
        return(
            <span> 
                <label>Write your statemnet below, identify the fields you wouldl like to blank out using "_____":
                    <input name="question" placeholder="e.g when I say potato, you say ______?"/>
                </label>
                <label>Please write the answer below:
                    <input name="answer" placeholder="potato"/>
                </label>
            </span>
        )
    }
}