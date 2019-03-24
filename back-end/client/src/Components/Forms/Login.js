import React from 'react';
// import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(){
        super();

        this.loginForm = React.createRef();
    }

    collectData = (e)=>{
        e.preventDefault();
        let loginInfo = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        console.log(loginInfo);
    }


    redirect = ()=>{
        const path = "/home/:user";
        this.props.history.push(path);
    }

    goHome = ()=>{
        const path = "/";
        this.props.history.push(path);
    }

    render(){
        return(
        <div className="loginSignupPage">
            <div className="login--modal">
                <span className="header--modal">
                    <h1>Login</h1>
                    <button className="btn close--btn"
                            onClick={this.goHome}>x</button>
                </span>
                    <form className="form--login"
                          ref={this.loginForm}
                          onSubmit={this.redirect}>
                        <label>Username
                            <input type="text" name="username" placeholder="username" required/>
                        </label>
                        <label>Password
                            <input type="password" name="password" placeholder="password" required/>
                        </label>
                        <input type="submit" 
                               onSubmit={this.collectData}
                               className="submit--btn btn"/>
                    </form>
            </div>
        </div>
        )
    }
}