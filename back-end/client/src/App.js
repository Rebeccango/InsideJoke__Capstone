import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components

import MainMenu from './Components/MainMenu';
import CreateNewForm from './Components/Forms/CreateNewForm';
import TriviaForm from './Components/Forms/TriviaForm';
import RulesAndRegulation from './Components/RulesAndRegulation';
import ReviewRepo from './Components/ReviewRepo';


import LandingPage from './Components/LandingPage';
import Signup from './Components/Forms/SignupForm';
import Login from './Components/Forms/LoginPage';

//Data
import Scoreboard from './Components/ScoreBoard';
import MultipleChoiceCard from './Components/Cards/MultipleChoiceCard';
import TruthyFalseyCard from './Components/Cards/TruthyFalseyCard';
// import jokeTypes from './Components/Forms/joke_types';

class App extends Component {
  constructor(props){
  super(props);

  this.state = {
    user: "Guest"
    }
  }

  signin = (loginInfo) => {
  this.setState({ 
      user: loginInfo.username
  })
  console.log(loginInfo);
}

  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
            <Route path="/signup" render={(routeProps)=>(<Signup {...routeProps}/>)}/> 
            <Route path="/login" render={(routeProps)=>(<Login {...routeProps}
                                submitHandler={this.signin}/>)}/> 
            <Route path="/" exact render={(routeProps)=>(<LandingPage {...routeProps}/>)}/>
            <Route path="/home/:user" render={(routeProps)=>(<MainMenu {...routeProps}
                                      user={this.state.user}/>)}/>
            <Route path="/create" render={(routeProps)=>(<CreateNewForm {...routeProps}
                                  user={this.state.user}/>)}/>
            <Route path="/play" render={(routeProps)=>(<TriviaForm {...routeProps}
                                user={this.state.user}/>)}/>
            <Route path="/rules" render={(routeProps)=>(<RulesAndRegulation {...routeProps}
                                  user={this.state.user}/>)}/>
            <Route path="/review" render={(routeProps)=>(<ReviewRepo {...routeProps}
                                  user={this.state.user}/>)}/>
            
            <Route exact path="/test" component={Scoreboard}/>

          </Switch>
        {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;
