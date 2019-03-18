import React from 'react';
//Components
import HeaderTextBanner from '../Brandelements/HeaderTextBanner';
import FooterSlogan from '../Brandelements/FooterSlogan';
//Data 
import jokeTypes from './joke_types';

export default class CreateNewForm extends React.Component{
    constructor(){
        super();
        this.state = {
            userID : "fakeID",
            userGroups: ["public", "University", "friends"]  
        }
    }
    render(){

        const {userID, userGroups} = this.state
        console.log(userGroups);
        return(
        <div className="createNewJokeForm">
            <HeaderTextBanner/>
            <main className="main__createNewJoke">
                <form>
                    <label> Select a Joke Type
                        <select name="typeofJoke" type="select" placeholder="Select Option...">
                            {jokeTypes.map((joke=>{return <option value = {joke}> {joke} </option>}))}
                        </select>
                    </label>

                    <label>
                        <select name="group" type="select">
                            {userGroups.map((group=>{return <option value = {group}> {group} </option>}))}
                        </select>
                    </label>
                </form>
            </main>
            <footer className="footer--create">
                <FooterSlogan/>
            </footer>
        </div>
        )
    }
}