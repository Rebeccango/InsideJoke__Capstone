import React from 'react';
import { Link } from 'react-router-dom';
//Assets

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Link to="/contactus">
                    <h3>Contact Us</h3>
                </Link>
                <section>
                    <h4>Rebecca Ngo</h4>
                    <h4>Web Developer Candidate</h4>
                    <h4>Class of Winter 2019</h4>
                    <h4>BrainStation</h4>
                    <h4>
                        <a href="mailto:rebeccango.ngo@gmail.com">rebeccango.ngo@gmail.com</a>
                    </h4>
                </section>
                <div className="companyName">
                    <h5>CamelCaseGames</h5>
                </div>
            </footer>
        )
    }
}