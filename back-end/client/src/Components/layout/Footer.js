import React from 'react';
import { Link } from 'react-router-dom';
//Assets

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <nav className="header__nav">
                    <div className="header__div--links">
                        <Link to="/create">
                            <h5 className="a--footer">Contact Us</h5>
                        </Link>   
                    </div>                 
                </nav>
            </footer>
        )
    }
}