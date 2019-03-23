import React from 'react';
import defaultUserGroups from '../Forms/default_UserGroups';
import Playlist from '../Playlist';

export default class Play extends React.Component{ 
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
        )
    }
}