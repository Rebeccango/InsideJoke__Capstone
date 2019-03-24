import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components

import LandingPage from './Components/LandingPage';
import Login from './Components/Forms/LoginPage';
import Signup from './Components/Forms/SignupForm';
import MainMenu from './Components/MainMenu';
import CreateNewForm from './Components/Forms/CreateNewForm';
import TriviaMode from './Components/Forms/TriviaForm';
//Data
// import jokeTypes from './Components/Forms/joke_types';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Header/> */}
        <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/login" render={(routeProps)=>(<LandingPage {...routeProps}/>)}/> 
              <Route path="/signUp" render={(routeProps)=>(<LandingPage {...routeProps}/>)}/>
              <Route path="/home/:user" render={(routeProps)=>(<MainMenu {...routeProps}/>)}/>
              <Route path="/create" render={(routeProps)=>(<CreateNewForm {...routeProps}/>)}/>
              <Route path="/play" render={(routeProps)=>(<TriviaMode {...routeProps}/>)}/> */}
          </Switch>
        {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;
