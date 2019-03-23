import React from 'react';


export default class MultipleChoice extends React.Component{
    render(){
        return(
            <span> 
                <label> Enter question here:
                    <textarea name="question" placeholder="Enter your question here" required/>
                </label>
                <label> Enter possible answers using a comma separated list:
                    <input name="choices" placeholder="e.g: a, b, c " required/>
                </label>
                <label> Enter the correct answer in the input below:
                    <input name="answer" placeholder="write the answer below" required/>
                </label>
            </span>
        )
    }
}