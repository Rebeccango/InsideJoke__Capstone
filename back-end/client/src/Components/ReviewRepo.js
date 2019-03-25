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
            <table class="table__showdate">
                <thead class ='unhide'>
                    <tr class ='unhide'>
                        <td class="unhide thlabel">GROUPS</td>
                        <td class="unhide thlabel">JOKES</td>
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