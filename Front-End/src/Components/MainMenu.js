import React from 'react';
import { Link } from 'react-router-dom';
//components
import HeaderLogoBanner from './Brandelements/HeaderLogoBanner';
import FooterSlogan from './Brandelements/FooterSlogan';

export default class MainMenu extends React.Component{
    render(){
        return(
            <div className="MainMenu__page">
                <HeaderLogoBanner/>
                <nav className="nav__mainmenu main--style1">
                    <Link to="/create">
                        <div className="btn--nav btn">Create New Joke</div>
                    </Link>
                    <Link to="/play">
                        <div className="btn--nav btn">Trivia Mode</div>
                    </Link>
                    <Link to="/">
                        <div className="btn--nav btn">Edit & Review Repository</div>
                    </Link>
                    <Link to="/">
                        <div className="btn--nav btn">Contact Us</div>
                    </Link>
                </nav>
                <FooterSlogan/>
            </div>
        )
    }
}