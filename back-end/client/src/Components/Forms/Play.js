import React from 'react';

export default class Play extends React.Component{ 
    constructor(){
        super();
        this.state = {
            test: ""
        }
    }

    playMode = (e) => {
        e.preventDefault();
        console.log('finish writing this function...')
    }

    render(){
        return(
        <form className= "PlayForm"
            ref={this.playForm}
            onSubmit={this.playMode}>
          <h1>Create A New Joke</h1>
          <fieldset name="type_group ">
              <label> Select the group(s) you would like to play with today: 
                  <span className="form--part1">
                      <select name="group" type="select">
                          {/* {user_groups.map((group=>{return <option value = {group}
                                                                  key = {user_groups.findIndex( x=> x=== group)}>{group}
                                                                  </option>}))} */}
                      </select>
                      <button className="next"
                              onClick={this.initiate}>
                              Next
                      </button>
                  </span>
              </label>
          </fieldset>
        </form>
        )
    }
}