import React from 'react';
//Components
import HeaderLogo from './Brandelements/HeaderLogoLarge';
import FooterSlogan from '../Components/Brandelements/FooterSlogan';


export default class Home extends React.Component{

    // will most likley replace with links
    signUp = ()=>{
        const path = "/signUp";
        this.props.history.push(path);
    }

    logIn = ()=>{
        const path = "/logIn";
        this.props.history.push(path);
    }

    render(){
        return(
            <div className="homepage">
                <HeaderLogo/>
                <div className="div__loginRegister">
                    <button className="btn--signup btn"
                            onClick={this.signUp}>Sign Up</button>
                    <button className="btn--login btn"
                            onClick={this.logIn}>Log In</button>
                </div>
                <FooterSlogan/>
            </div>
        )
    }
}