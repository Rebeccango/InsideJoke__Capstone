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
    render(){
        return(
        <div className="loginPage">
                <h1 className="header--modal" >Login</h1>
                <button className="btn close--btn"
                        onClick={this.props.goHome}>x</button>
                <form className="form--login"
                        ref={this.loginForm}
                        onSubmit={this.props.redirect}>
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
        )
    }
}