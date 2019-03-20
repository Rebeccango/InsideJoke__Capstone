import React from 'react';

export default class HeaderTextBanner extends React.Component{
    render(){
        return(
        <span className="header--style1">
            <h1 className="header--main">{this.props.title}</h1>
        </span>
        )
    }
}