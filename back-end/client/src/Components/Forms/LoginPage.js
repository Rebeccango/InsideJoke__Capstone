import React from 'react';
// import { Link } from 'react-router-dom';

import soundfile from '../../Assets/Sounds/game_sound.mp3';
import Sound from 'react-sound';

export default class Login extends React.Component{
    constructor(){
        super();

        this.loginForm = React.createRef();
    }

    goHome = ()=>{
        let path = "/";
        this.props.history.push(path);
    }

    collectData = (e)=>{
        console.log('form starts here');
        e.preventDefault();
        let loginInfo = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        this.props.submitHandler(loginInfo);
        console.log(loginInfo);

        let path = `/home/${e.target.username.value}`;
        this.props.history.push(path);
    }

    render(){
        return(
        <div className="loginPage">                
                <h1 className="header--modal" >Login</h1>
                <button className="btn close--btn"
                        onClick={this.goHome}>x</button>
                <form className="form--login"
                        ref={this.loginForm}
                        onSubmit={this.collectData}>
                    <label>Username
                        <input type="text" name="username" placeholder="username" required/>
                    </label>
                    <label>Password
                        <input type="password" name="password" placeholder="password" required/>
                    </label>
                    <input type="submit" 
                            onSubmit={this.props.submitHandler}
                            className="submit--btn btn"/>
                </form>
        </div>
        )
    }
}