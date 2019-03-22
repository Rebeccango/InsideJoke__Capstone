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
import MultipleChoice from './TypeOfJokes/MultipleChoice';
import TruthyFalsey from './TypeOfJokes/TruthyFalsey';

export default class CreateNewForm extends React.Component{
    constructor(){
        super();
        this.state = {
            display: "hide",
        // this component will need to pass down props regarding user info in order to create new joke object
            user_id : "fakeID",
            // will need to populate using res.data, but will set default groups as the array object below.  using id 
            //i.e will need to be something like userGroups: res.data.userGroups || [default groups] 
            // res.send ( JSON - object for items created )
            user_groups: defaultUserGroups, 
            user_jokes: [] || "",
            newJoke: { 
                type: jokeTypes[2],
                auth_groups: [],
                question: "",
                answer: "",
                tags:""
          },
        }
        this.createNewJokeForm = React.createRef();

       // this.initiateJoke = this.initiateJoke.bind(this);
    }

    initiateJoke = (e) => {
        e.preventDefault();

       const { group, typeofJoke} = this.createNewJokeForm.current;

        console.log('initial joke', e.target);
       
        var newJoke = {
            type: typeofJoke.value,
            auth_group: group.value
            // question: e.target.question.value || "",
            // answer: e.target.answer || "",
            // tags: ""
        }
        // console.log(this.createNewJokeForm.current.group.value || "didn't work");
        console.log(e.target.group.value || "didn't work");
        this.setState(
            {
                newJoke:newJoke,
                display: "show"
            }
        )
        console.log(this.state.newJoke);
    }
    
    submitJoke = (e) => {

    }
    // console.dir(this.createNewJokeForm.current.typeofJoke.value)
    //axios to  make POST request when the time comes
    // console.log(newJoke);
    render(){
        function formType (state) {
            switch(state){  
                case jokeTypes[0]:
                    return <TruthyFalsey/>;
                case jokeTypes[1]:
                    return <MultipleChoice/>;
                case jokeTypes[2]:
                    return <ClosedCaption/>;
                case jokeTypes[4]:
                    return <AutoComplete/>;
                default:
                    return null;
            }
        }

        const {user_groups, ...rest} = this.state
        return(
        <div className="createNewJokeForm">
             <header className="header--create">
                <HeaderTextBanner title="Create"/>
             </header>
            <main className="main__createNewJoke main">
                <form className= "CreateNewForm--part1"
                      ref={this.createNewJokeForm}
                      onSubmit={this.initiateJoke}>
                    <fieldset>
                        <label> Select the group(s) you would like to give authorization to view your joke && type 
                            <select name="group" type="select">
                                {user_groups.map((group=>{return <option value = {group}
                                                                        key = {user_groups.findIndex( x=> x=== group)}>{group}
                                                                        </option>}))}
                            </select>
                            <select name="typeofJoke" type="select" placeholder="Select Option...">
                                {jokeTypes.map((joke=>{return <option value = {joke}
                                                                    key = {jokeTypes.findIndex( x => x === joke )}>{joke}
                                                            </option>}))}
                            </select>
                        </label>
                        <button className="next"
                                onClick={this.initiateJoke}>
                                Next
                        </button>
                    </fieldset>
                    <fieldset className={this.state.display}>
                        <label> Create new {this.state.newJoke.type}
                            {formType(this.state.newJoke.type)}
                        </label>
                    </fieldset>
                    <input type="submit" value="Create!"/>
                </form>
            </main>
            {/* <footer className="footer--create">
                <FooterSlogan/>
            </footer> */}
        </div>
        )
    }
}