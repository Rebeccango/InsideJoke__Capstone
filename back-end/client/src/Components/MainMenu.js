import React from 'react';
import { Link } from 'react-router-dom';
//components
import HeaderDumb from '../Components/layout/HeaderDumb';
import Header from '../Components/layout/Header';
import Footer from '../Components/layout/Footer';

export default class MainMenu extends React.Component{
    render(){
        return(
            <div className="MainMenu__page">
                <HeaderDumb/>
                <main>
                    <nav className="nav__mainmenu main">
                        <Link to="/create">
                            <a className="a--mainmenu">Create New Joke</a>
                        </Link>
                        <Link to="/play">
                            <a className="a--mainmenu">Trivia Mode</a>
                        </Link>
                        <Link to="/">
                            <a className="a--mainmenu">Edit & Review</a>
                        </Link>
                        <Link to="/">
                            <a className="a--mainmenu">Contact Us</a>
                        </Link>
                    </nav>
                </main>
                <Footer/>
            </div>
        )
    }
}