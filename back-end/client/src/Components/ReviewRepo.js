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
            <table className="table__showdate">
                <thead className ='unhide'>
                    <tr className ='unhide'>
                        <td className="unhide thlabel">GROUPS</td>
                        <td className="unhide thlabel">JOKES</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Public, University</td>
                        <td>1)</td>
                    </tr>
                </tbody>
            </table>

            {/* <section>
                Groups
            </section>
            <section>
                Jokes
            </section>
            <section>   
                Summary
            </section> */}
        </main>
        <Footer/>
        </>
        )
    }
}