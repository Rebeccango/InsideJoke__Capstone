import React from 'react';
import Header from '../Components/layout/HeaderNav';
import Footer from '../Components/layout/Footer';


export default class RulesAndRegulation extends React.Component{ 
    constructor(){
        super();
        this.state = {
            formdisplay: "show",
            gamedisplay: "hide"
        }
    }

    playMode = (e) => {
        e.preventDefault();
        
        this.setState({
            formdisplay: "hide",
            gamedisplay: "show"
        })

        console.log(e.target.playgroup.value);
        console.log('finish writing this function...')
    }

    render(){
        return(
        <>
        <Header/>
        <main className="triviaForm">
            <span>
                <h1>Truthy or Falsey?</h1>
                <p>sdfjsodifjosdfjoisdjfsdfiosjd</p>
            </span>
            <span>
                <h1>Multiple Choice</h1>
                <p>sdfjsodifjosdfjoisdjfsdfiosjd</p>
            </span>
            <span>
                <h1>Auto Complete</h1>
                <p>sdfjsodifjosdfjoisdjfsdfiosjd</p>
            </span>
        </main>
        <Footer/>
        </>
        )
    }
}