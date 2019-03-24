import React from 'react';
import axios from 'axios';
//Data 
import jokeTypes from '../../Assets/data_joketypes';
import defaultUserGroups from '../../Assets/data_defaultUsers';
//FORMS 
import MultipleChoice from './TypeOfJokes/MultipleChoice';
import TruthyFalsey from './TypeOfJokes/TruthyFalsey';
import AutoComplete from './TypeOfJokes/AutoComplete';

import Header from '../layout/HeaderNav';
import Footer from '../layout/Footer';



export default class CreateNewForm extends React.Component{
    constructor(){
        super();
        this.state = {
            display: "hide",
            user_id : "fakeID",
            user_groups: defaultUserGroups, 
            user_jokes: [] || "",
            newJoke: { 
                type: "",
                auth_groups: [],
                question: "",
                answer: "",
                tags:""
          },
        }
        this.createNewJokeForm = React.createRef();
    }

    initiate = (e) => {
        e.preventDefault();

       const { group, typeofJoke} = this.createNewJokeForm.current;

        console.log('initial joke', e.target);
       
        var newJoke = {
            type: typeofJoke.value,
            auth_group: group.value
        }
        this.setState(
            {
                newJoke:newJoke,
                display: "show"
            }
        )
    }
    
    submitJoke = (e) => {
        e.preventDefault();
    //    const { group, typeofJoke, question, answer, choices} = this.createNewJokeForm.current;
        if(this.state.newJoke.type == jokeTypes[1] ){
            var newJoke = {
                author: this.state.user_id,
                type: e.target.typeofJoke.value,
                auth_group: e.target.group.value,
                question: e.target.question.value,
                choices: e.target.choices.value,
                answer: e.target.answer.value,
            }
        }
        else{
            var newJoke = {
                author: this.state.user_id,
                type: e.target.typeofJoke.value,
                auth_group: e.target.group.value,
                question: e.target.question.value,
                answer: e.target.answer.value,
            }
        }
        this.setState(
            {
                newJoke:newJoke,
            }
        )
        
        axios({
            method: 'post',
            url: '/createnew',
            data: newJoke,
          })
          .then((res)=>{
              console.log(res)
          })
          .catch((err)=>{
              console.log(err)
          })

        console.log(this.state.newJoke);
        console.log('Hi look here');

        this.createNewJokeForm.current.reset();
    }  

    moar = ()=>{
        window.location.reload();
    }
    render(){
        function formType (state) {
            switch(state){  
                case jokeTypes[0]:
                    return <TruthyFalsey/>;
                case jokeTypes[1]:
                    return <MultipleChoice/>;
                case jokeTypes[2]:
                    return <AutoComplete/>;
                default:
                    return null;
            }
        }
        const {user_groups, ...rest} = this.state
        return(
        <>
        <Header/>
        <main className="createNewJokeForm">
                <form className= "CreateNewForm"
                      ref={this.createNewJokeForm}
                      onSubmit={this.submitJoke}>
                    <h1>Create A New Joke</h1>
                    <fieldset name="type_group ">
                        <label> Select the group(s) you would like to give authorization to view your joke && type 
                            <span className="form--part1">
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
                                <button className="next"
                                        onClick={this.initiate}>
                                        Next
                                </button>
                            </span>
                        </label>
                    </fieldset>

                    <fieldset className={this.state.display}>
                        <label> to create a new {this.state.newJoke.type} joke, please fill out the fields below:
                            {formType(this.state.newJoke.type)}
                        </label>
                    </fieldset>
                    <span className="span--submit">
                        <input type="submit" 
                            value="Create!"  
                            className={this.state.display}/>
                        <button className={this.state.display}
                                onClick={this.moar}>
                                Create Another?
                        </button>
                    </span>
                </form>
        </main>
        <Footer/>
        </>
        )
    }
}