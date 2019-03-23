import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component{

    // will most likley replace with links
    // signUp = ()=>{
    //     const path = "/signUp";
    //     this.props.history.push(path);
    // }

    logIn = ()=>{
        const path = "/logIn";
        this.props.history.push(path);
    }

    render(){
        return(
            <main className="homepage">
                <div className="div__loginRegister">
                    <Link to="/signUp">
                        <button className="btn--signup btn"
                                onClick={this.signUp}>Sign Up</button>
                    </Link>
                    <button className="btn--login btn"
                            onClick={this.logIn}>Log In</button>
                </div>
            </main>
        )
    }
}