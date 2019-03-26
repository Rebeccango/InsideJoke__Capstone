import React from 'react';

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
        </main>
        )
    }
}