import React from 'react';
import { Link } from 'react-router-dom';
//components

export default class MainMenu extends React.Component{
    render(){
        return(
            <div className="MainMenu__page">
                <main>
                    <nav className="nav__mainmenu main">
                        <Link to="/create">
                            <div className="a--mainmenu">Create New Joke</div>
                        </Link>
                        <Link to="/play">
                            <div className="a--mainmenu">Trivia Mode</div>
                        </Link>
                        <Link to="/">
                            <div className="a--mainmenu">Edit & Review</div>
                        </Link>
                        <Link to="/rules">
                            <div className="a--mainmenu">Rules</div>
                        </Link>
                    </nav>
                </main>
            </div>
        )
    }
}