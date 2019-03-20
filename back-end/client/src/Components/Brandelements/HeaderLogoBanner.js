import React from 'react';
//Assets
import Logo from '../../Assets/Logo/InsideJoke_YellowClick/linkedin_banner_image_1.png'

export default class HeaderLogoBanner extends React.Component{
    render(){
        return(
        <header className="header--style1">
            <img src={Logo} alt="InsideJoke-Logo" className="header--logo"/>
        </header>
        )
    }
}