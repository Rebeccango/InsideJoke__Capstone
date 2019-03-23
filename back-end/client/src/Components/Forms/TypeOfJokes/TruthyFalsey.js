import React from 'react';


export default class TruthyFalsey extends React.Component{
    render(){
        return(
            <span> 
                <label> True or false .... :
                    <textarea name="question" placeholder="write your statement here" required />
                </label>

                <label> True or False?
                    <select name="answer" placeholder="Well is it true though?" required>
                        <option value = "True">Truthy</option> 
                        <option value = "False">Falsey</option> 
                    </select>
                </label>
            </span>
        )
    }
}