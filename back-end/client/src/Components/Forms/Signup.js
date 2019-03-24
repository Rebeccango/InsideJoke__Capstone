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
            <div className="Signup--modal">
                    <h1>Sign up</h1>
                <form className="form--signup"
                        ref={this.loginForm}
                        onSubmit={this.redirect}>
                    <label>Username
                        <input type="text" name="username" placeholder="username" required/>
                    </label>
                    <label>Email
                        <input type="text" name="email" placeholder="email" required/>
                    </label>
                    {/* <fieldset> */}
                        <label> Create a password
                            <input type="password" name="password" placeholder="password" required/>
                        </label>
                        <label> Confirm password
                            <input type="password" name="confirmpassword" placeholder="password" required/>
                        </label>
                    {/* </fieldset> */}
                    <input type="submit" 
                            onSubmit={this.collectData}
                            className="submit--btn btn"/>
                    <button className="btn close--btn"
                    onClick={this.goHome}>Cancel</button>

                </form>
            </div>
        </div>
        )
    }
}