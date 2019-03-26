import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    constructor(){
        super();
        this.loginForm = React.createRef();
    }

    goHome = ()=>{
        let path = "/";
        this.props.history.push(path);
    }

    collectData = (e)=>{
        e.preventDefault();
        let newUser = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(newUser);

        axios({
            method: 'post',
            url: '/createnew/user',
            data: newUser
        })
        .then((res)=>{
            console.log('check the database')
        })
        .catch((err)=>{
            console.log(err)
        })

        let path = "/signin";
        this.props.history.push(path);
    }

    render(){
        return(
        <div className="SignupPage">
            <div className="Signup--modal">
                    <h1>Sign up</h1>
                <form className="form--signup"
                        ref={this.loginForm}
                        onSubmit={this.collectData}>
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
                        onClick={this.goHome}>Close</button>
                </form>
            </div>
        </div>
        )
    }
}