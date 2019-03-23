import React from 'react';
//components

export default class LoginSignup extends React.Component{
    constructor(){
        super();
        this.state = {
            test: []
        }
    }

    redirect = ()=>{
        const path = "/home/:user";
        this.props.history.push(path);
    }

    render(){
        return(
            <div className="loginSignup">
                    <form className="form--loginSignup"
                          onSubmit={this.redirect}>
                        <label>Username
                            <input type="text" name="username" placeholder="username"/>
                        </label>
                        <label>Password
                            <input type="text" name="password" placeholder="password"/>
                        </label>
                        <input type="submit" className="submit--btn btn"/>
                    </form>
            </div>
        )
    }
}