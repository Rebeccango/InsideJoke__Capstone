import React from 'react';
import { Link } from 'react-router-dom';
//assets
import Logo from '../Assets/Logo/InsideJoke_YellowClick/logo_transparent.png';


export default class Home extends React.Component{
    state = {
        form: "hide",
        signupDisplay: "hide",
        loginDisplay: "hide",
    }

    login = (loginInfo)=>{
        this.setState({ 
            form: "show",
            loginDisplay: "show",
            signupDisplay: "hide",
        })
    }

    signup = ()=>{
        this.setState({
            form: "show",
            signupDisplay: "show",
            loginDisplay: "hide"
        })
        console.log('hi');
    }

    goHome = ()=>{
        console.log("whynot?");
        this.setState({
            form: "hide",
            signupDisplay: "hide",
            loginDisplay: "hide"
        })
    }

      
    successRedirect = ()=>{
        const path = "/home/:user";
        this.props.history.push(path);
    }

    render(){
        return(
            <span>
                <main className="landingPage">
                    <img src={Logo} alt="InsideJoke" className="img--logo"/>
                    <div className="div__btnContainer">
                        <Link to="/signUp">
                            <button className="btn--signup btn">Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn--login btn">Log In</button>
                        </Link>
                        <Link to="/home/:user">
                            <button className="btn--login btn">Guest mode</button>
                        </Link>
                    </div>
                </main>
            </span>
        )
    }
}