import React from 'react';
//Assets
import Slogan from '../../Assets/slogan';

export default class FooterSlogan extends React.Component{
    render(){
        return(
        <span className="footer__slogan">
            <h3>{Slogan}</h3>
        </span>
        )
    }
}