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
        <main className="GameRulesPage">
            <div>
                <h1>Truthy or Falsey?</h1>
                <p>Your classic game of truth and false. Someone 
                    writes something that is true or false and you
                    guess which it is.
                </p>
            </div>
            <div>
                <h1>Multiple Choice</h1>
                <p>A question, many options but only one answer.
                    Don't sweat, it's not for marks. A question followed
                    by many options - well three, max - choose the right one!
                </p>
            </div>
            <div>
                <h1>Auto Complete</h1>
                <p>...you can fill in the blanks on this one.
                    Just kidding. For this trivia type you will
                    be faced with an incomplete sentence. You must
                    choose the word that best fits the sentence. 
                    WWGS (what would google say?). 
                </p>
            </div>
        <h5>***SPITTING, HITTING OR SWEARING IS ILL ADVISED****</h5>
        </main>
        <Footer/>
        </>
        )
    }
}