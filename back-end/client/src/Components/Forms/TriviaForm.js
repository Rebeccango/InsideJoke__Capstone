import React from 'react';
import defaultUserGroups from '../../Assets/data_defaultUsers';
import Playlist from '../Playlist';

import Header from '../layout/HeaderNav';
import Footer from '../layout/Footer';


export default class TriviaMode extends React.Component{ 
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
        <main>
            <form ref={this.playForm}
                onSubmit={this.playMode}
                className={this.state.formdisplay}>
            <h1>Play Time!</h1>
                <label> Select the group of friends you're playing with: 
                        <select name="playgroup" type="select">
                            {defaultUserGroups.map((group=>{return <option value = {group}
                                                                    key = {defaultUserGroups.findIndex( x=> x=== group)}>{group}
                                                                    </option>}))}
                        </select>
                        <input type="submit" 
                                className="next"
                                onClick={this.initiate}>
                        
                        </input>
                </label>
            </form>
            <span className={this.state.gamedisplay}>
                <Playlist/>
            </span>
        </main>
        <Footer/>
        </>
        )
    }
}