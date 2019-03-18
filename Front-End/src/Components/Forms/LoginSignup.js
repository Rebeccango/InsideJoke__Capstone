import React from 'react';
//Assets 
import Logo from '../../Assets/Logo/InsideJoke_YellowClick/linkedin_banner_image_1.png';
import Slogan from '../../Assets/slogan.js';
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
                <HeaderLogoBanner/>
                <main className="main--style1">
                    <form onSubmit={this.redirect}>
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