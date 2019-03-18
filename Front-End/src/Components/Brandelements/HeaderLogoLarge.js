import React from 'react';
//Assets
import Logo from '../../Assets/Logo/InsideJoke_YellowClick/linkedin_banner_image_1.png'

export default class HeaderLogo extends React.Component{
    render(){
        return(
        <header>
            <img src={Logo}
            alt="InsideJoke-logo"
            className="img__logo" />
        </header>
        )
    }
}