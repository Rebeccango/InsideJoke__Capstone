import React from 'react';
import { Link } from 'react-router-dom';
import kebob from '../../Assets/Icons/Icon-kebab-default.svg'

export default class HeaderDumb extends React.Component{
    state = {
        username: "Rebecks",
        togglemenu: "hide"
    }

    toggleMenu = () => {
        if(this.state.togglemenu === "hide"){
            this.setState({
                togglemenu: "show"
            })
        }
        else{
            this.setState({
                togglemenu: "hide"
            })
        }
    }

    render(){
        return(
            <header>
                <nav className="header__nav">
                    <Link to="/">
                        <span className="logo">
                            <h1>InsideJoke</h1>
                        </span>
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
                    <div className="nav--container">
                        <div className="userAvatar">
                            <h5>{this.state.username}</h5>
                            <div className="img--userAvatar"></div>
                        </div>
                        <button className="btn--options"
                                onClick={this.toggleMenu}>
                            <img src={kebob} alt="options"/>
                        </button>
                    </div>
                </nav>
                        <div className={this.state.togglemenu}>
                            <span className="usermenu">
                            <Link to="/create">
                                <h5 className="a--nav">Settings</h5>
                            </Link>
                            <Link to="/">
                                <h5 className="a--nav">Sign out</h5>
                            </Link>
                            </span>
                        </div>
            </header>
        )
    }
}