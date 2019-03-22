import React from 'react';
import axios from 'axios';
//Components
import HeaderTextBanner from '../Brandelements/HeaderTextBanner';
import FooterSlogan from '../Brandelements/FooterSlogan';
//Data 
import jokeTypes from './joke_types';
import defaultUserGroups from './default_UserGroups';
//FORMS 
import AutoComplete from './TypeOfJokes/AutoComplete';
import ClosedCaption from './TypeOfJokes/ClosedCaption';
import MultipleChoise from './TypeOfJokes/MultipleChoice';
import TruthyFalsey from './TypeOfJokes/TruthyFalsey';

export default class CreateNewForm extends React.Component{
    constructor(){
        super();
        this.state = {
        // this component will need to pass down props regarding user info in order to create new joke object
            user_id : "fakeID",
            // will need to populate using res.data, but will set default groups as the array object below.  using id 
            //i.e will need to be something like userGroups: res.data.userGroups || [default groups] 
            // res.send ( JSON - object for items created )
            user_groups: defaultUserGroups, 
            user_jokes: [] || "",
            newJoke: { 
            type: "",
            auth_groups: [],
            question: "",
            answer: ""
          },
        }
        this.createNewJokeForm = React.createRef();
    }



    createJoke = (e) => {
        e.preventDefault();

        var newJoke = {
            type: e.target.typeofJoke.value,
            group: e.target.group.value
        }
        
        // console.dir(this.createNewJokeForm.current.typeofJoke.value)
        //axios to  make POST request when the time comes
        console.log(newJoke);

        let path = `/createNew/${this.createNewJokeForm.current.typeofJoke.value}`;
        this.props.history.push(path);
    }
    
    render(){
        // console.log(e.target.typeofJoke.value); //ask Ian why e.target works and ref.work
        
        const {user_groups, ...rest} = this.state
        return(
        <div className="createNewJokeForm">
             <header className="header--create">
                <HeaderTextBanner title="Create"/>
             </header>
            <main className="main__createNewJoke main">
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
                            {user_groups.map((group=>{return <option value = {group}
                                                                    key = {user_groups.findIndex( x=> x=== group)}>{group}
                                                                    </option>}))}
                        </select>
                    </label>
                    <input type="submit" className="submit--btn btn"/>
                </form>
                <AutoComplete/>
            </main>
            <footer className="footer--create">
                <FooterSlogan/>
            </footer>
        </div>
        )
    }
}