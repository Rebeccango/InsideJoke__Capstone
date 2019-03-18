import React from 'react';
//Assets
import Slogan from '../../Assets/slogan';

export default class FooterSlogan extends React.Component{
    render(){
        return(
        <footer>
            <h3 className="footer__slogan">{Slogan}</h3>
        </footer>
        )
    }
}