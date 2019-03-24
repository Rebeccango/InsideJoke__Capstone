import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
//Assets

export default class HeaderDumb extends React.Component{
    state = {
        username : "RebecksN"
    }
    render(){
        return(
            <header>
                <nav className="header__nav">
                    <Link to="/">
                        <h1>InsideJoke</h1>
                    </Link>
                    <div className="header--userprofilecontainer">
                        <h5>{this.state.username}</h5>
                        <div className="userAvatar"></div>
                        {/* <h5>Log out</h5> */}
                    </div>
                </nav>
            </header>
        )
    }
}