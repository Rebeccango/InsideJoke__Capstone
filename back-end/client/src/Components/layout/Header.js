import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
//Assets

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="header__nav">
                    <Link to="/">
                        <h1>InsideJoke</h1>
                    </Link>
                    <div className="header__div--links">
                        <Link to="/create">
                            <h5 className="a--nav">Create</h5>
                        </Link>
                        <Link to="/play">
                            <h5 className="a--nav">Play</h5>
                        </Link>
                        <Link to="/create">
                            <h5 className="a--nav">Invite</h5>
                        </Link>
                        <Link to="/review">
                            <h5 className="a--nav">Review</h5>
                        </Link>
                    </div>
                    <div className="userAvatar">
                        <img src=""
                             className="userAvatar"/>
                    </div>
                </nav>
            </header>
        )
    }
}