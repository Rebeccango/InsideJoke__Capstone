import React from 'react';


export default class AutoComplete extends React.Component{
    render(){
        return(
            <fieldset> 
                <label> Write your statemnet below, identify the fields you wouldl like to blank out:
                    <input name="answer-a" placeholder="first answer"/>
                </label>
                <label> Acceptable answers:
                    <input name="blank--a" placeholder="first answer"/>
                    <input name="blank-b" placeholder="first answer"/>
                </label>
            </fieldset>
        )
    }
}