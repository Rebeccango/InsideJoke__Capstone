import React from 'react';


export default class TruthyFalsey extends React.Component{
    render(){
        return(
            <fieldset> 
                <label> True or false .... :
                    <textarea placeholder="write your statement here" />
                </label>

                <label> True or False?
                    <select name="TruthyFalsey" placeholder="Well is it true though?">
                        <option value = "True">Truthy</option> 
                        <option value = "False">Falsey</option> 
                    </select>
                </label>
            </fieldset>
        )
    }
}