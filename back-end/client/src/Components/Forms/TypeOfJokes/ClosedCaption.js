import React from 'react';


export default class ClosedCaption extends React.Component{
    render(){
        return(
            <fieldset> 
                <label> Provide image address(absolute path):
                    <input name="closedcaption--question" placeholder="e.g https://myimage.com"/>
                </label>
                <label> *No inputs are required*</label>
            </fieldset>
        )
    }
}