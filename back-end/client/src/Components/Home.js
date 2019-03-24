import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component{

    logIn = ()=>{
        const path = "/logIn";
        this.props.history.push(path);
    }

    render(){
        return(
            <main className="homepage">
                <h1 className="header--homepage">InsideJoke</h1>
                <div className="div__loginRegister">
                    <Link to="/signUp">
                        <button className="btn--signup btn">Sign Up</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn--login btn">Log In</button>
                    </Link>
                </div>
            </main>
        )
    }
}