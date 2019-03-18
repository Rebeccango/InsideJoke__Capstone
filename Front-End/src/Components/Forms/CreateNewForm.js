import React from 'react';
import axios from 'axios';
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
            userGroups: ["Public", "University", "Friends","*new Group*"]  
        }
        this.createNewJokeForm = React.createRef();
    }

    createJoke = (e) => {
        e.preventDefault();

        var newJoke = {
            type: e.target.typeofJoke.value,
            group: e.target.group.value
        }
        //axios to  make POST request when the time comes
        console.log(newJoke);
    }
    
    render(){
        console.log(this.createNewJokeForm);
        // console.log(e.target.typeofJoke.value); //ask Ian why e.target works and ref.work
        
        const {userGroups, ...rest} = this.state
        return(
        <div className="createNewJokeForm">
            <HeaderTextBanner/>
            <main className="main__createNewJoke">
                <form className= "CreateNewForm"
                      ref={this.createNewJokeForm}
                      onSubmit={this.createJoke}>
                    <label> Select a Joke Type
                        <select name="typeofJoke" type="select" placeholder="Select Option...">
                            {jokeTypes.map((joke=>{return <option value = {joke}
                                                                  key = {jokeTypes.findIndex( x => x === joke )}>{joke}
                                                          </option>}))}

                        </select>
                    </label>
                    <label> Select a group
                        <select name="group" type="select">
                            {userGroups.map((group=>{return <option value = {group}
                                                                    key = {userGroups.findIndex( x=> x=== group)}>{group}
                                                                    </option>}))}
                        </select>
                    </label>
                    <input type="submit" className="submit--btn btn"/>
                </form>
            </main>
            <footer className="footer--create">
                <FooterSlogan/>
            </footer>
        </div>
        )
    }
}