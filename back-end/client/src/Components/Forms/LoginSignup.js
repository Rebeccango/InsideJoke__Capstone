import React from 'react';
//components
import HeaderLogoBanner from '../../Components/Brandelements/HeaderLogoBanner';
import FooterSlogan from '../Brandelements/FooterSlogan';


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
            <header className="header--loginSignup">
                <HeaderLogoBanner/>
            </header>
                <main className="main--loginSignup">
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
                </main>
                <FooterSlogan/>
            </div>
        )
    }
}