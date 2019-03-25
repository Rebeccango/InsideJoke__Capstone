import React from 'react';

import Header from '../Components/layout/HeaderNav';
import Footer from '../Components/layout/Footer';


export default class ReviewRepo extends React.Component{ 
    constructor(){
        super();
        this.state = {
            formdisplay: "show",
            gamedisplay: "hide"
        }
    }

    render(){
        return(
        <>
        <Header/>
        <main className="triviaForm">
            <section>
                Groups
            </section>
            <section>
                Jokes
            </section>
            <section>   
                Summary
            </section>
        </main>
        <Footer/>
        </>
        )
    }
}