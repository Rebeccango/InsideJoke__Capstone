import React from 'react';


export default class MultipleChoice extends React.Component{
    render(){
        return(
            <fieldset> 
                <label> Enter Multiple Choice here:
                    <textarea name="multiplechoice--question" placeholder="Enter your question here"/>
                </label>
                <label> Acceptable answers:
                    A.)<input name="answer-a" placeholder="first answer"/>
                    B.)<input name="answer-b" placeholder="first answer"/>
                    C.)<input name="answer-c" placeholder="first answer"/>
                </label>
            </fieldset>
        )
    }
}