import React from 'react';
import defaultUserGroups from '../../Assets/data_defaultUsers';
import Playmode from '../Playmode';

import Header from '../layout/HeaderNav';
import Footer from '../layout/Footer';

import soundfile from '../../Assets/Sounds/the_dating_game_1965.mp3';
import Sound from 'react-sound';


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
        <Sound  url={soundfile}
                playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
                />
        <main className="triviaForm">
            <form ref={this.playForm}
                onSubmit={this.playMode}
                className={this.state.formdisplay}>
            <h1>Play Time!</h1>
                <fieldset>
                    <label> Select the group of friends you're playing with: 
                            <select name="playgroup" type="select">
                                {defaultUserGroups.map((group=>{return <option value = {group}
                                                                        key = {defaultUserGroups.findIndex( x=> x=== group)}>{group}
                                                                        </option>}))}
                            </select>
                    </label>
                    <label> Select the number of teams/players participating: 
                            <select name="teams" type="select">
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                    </label>
                    <input type="submit" 
                            className="next--btn"
                            onClick={this.initiate}/>
                </fieldset>
            </form>
            <span className={this.state.gamedisplay}>
                <Playmode/>
            </span>
        </main>
        <Footer/>
        </>
        )
    }
}