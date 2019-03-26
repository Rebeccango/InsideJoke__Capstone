import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './layout/Footer';
import LoginPage from './Forms/LoginPage';
import SignupForm from './Forms/SignupForm';
import axios from 'axios';
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
                <div className={this.state.form}>
                    {/* <section className="modalwrapper">
                        <span className={this.state.loginDisplay}>
                            <LoginPage goHome={this.goHome}
                                       submitHandler={this.props.submitHandler}/>
                        </span>
                        <span className={this.state.signupDisplay}>
                            <SignupForm goHome={this.goHome}
                                       redirect={this.successRedirect}
                                       submitHandler={this.signup}/>
                        </span>
                    </section> */}
                </div>
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
                <Footer/>
            </span>
        )
    }
}