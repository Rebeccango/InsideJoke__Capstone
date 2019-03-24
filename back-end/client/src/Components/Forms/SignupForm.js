import React from 'react';
// import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
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

    redirect = () => {
        const path = "/home/:user";
        this.props.history.push(path);
    }


    render(){
        return(
        <div className="loginSignupPage">
            <div className="Signup--modal">
                    <h1>Sign up</h1>
                <form className="form--signup"
                        ref={this.loginForm}
                        onSubmit={this.props.redirect}>
                    <label>Username
                        <input type="text" name="username" placeholder="username" required/>
                    </label>
                    <label>Email
                        <input type="text" name="email" placeholder="email" required/>
                    </label>
                    <label> Create a password
                        <input type="password" name="password" placeholder="password" required/>
                    </label>
                    <label> Confirm password
                        <input type="password" name="confirmpassword" placeholder="password" required/>
                    </label>
                    <input type="submit" 
                            onSubmit={this.collectData}
                            className="submit--btn btn"/>
                    <button className="btn close--btn"
                        onClick={this.props.goHome}>Cancel</button>
                </form>
            </div>
        </div>
        )
    }
}