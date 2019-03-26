import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components

import TriviaMode from './Components/TriviaMode';
import ReviewRepo from './Components/ReviewRepo';

import Header from './Components/layout/HeaderNav';
import Footer from './Components/layout/Footer';

import LandingPage from './Components/LandingPage';
import Signup from './Components/Forms/SignupForm';
import Login from './Components/Forms/LoginPage';
import MainMenu from './Components/MainMenu';
import RulesAndRegulation from './Components/RulesAndRegulation';
import CreateNewForm from './Components/Forms/CreateNewForm';

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
          <Route path="/" render={(routeProps)=>(<Header {...routeProps}
                                      user={this.state.user}/>)}/>
            <Switch>
            <Route path="/signup" render={(routeProps)=>(<Signup {...routeProps}/>)}/> 
            <Route path="/login" render={(routeProps)=>(<Login {...routeProps}
                                submitHandler={this.signin}/>)}/> 
            {/* CREATE MODE */}
            <Route path="/" exact render={(routeProps)=>(<LandingPage {...routeProps}/>)}/>
            <Route path="/home/:user" render={(routeProps)=>(<MainMenu {...routeProps}
                                      user={this.state.user}/>)}/>
            <Route path="/create" render={(routeProps)=>(<CreateNewForm {...routeProps}
                                  user={this.state.user}/>)}/>
            {/* PLAY MODE */}
            <Route path="/play" render={(routeProps)=>(<TriviaMode {...routeProps}
                                user={this.state.user}/>)}/>
            <Route path="/rules" render={(routeProps)=>(<RulesAndRegulation {...routeProps}
                                  user={this.state.user}/>)}/>
            <Route path="/review" render={(routeProps)=>(<ReviewRepo {...routeProps}
                                  user={this.state.user}/>)}/>    
            <Route exact path="/test" component={Scoreboard}/>
          </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
