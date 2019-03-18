import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components
import Home from './Components/Home';
import LoginSignup from './Components/Forms/LoginSignup';
import MainMenu from './Components/MainMenu';
import CreateNewForm from './Components/Forms/CreateNewForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" render={(routeProps)=>(<LoginSignup {...routeProps}/>)}/> 
              <Route path="/signUp" render={(routeProps)=>(<LoginSignup {...routeProps}/>)}/>
              <Route path="/home/:user" render={(routeProps)=>(<MainMenu {...routeProps}/>)}/>
              <Route path="/create" render={(routeProps)=>(<CreateNewForm {...routeProps}/>)}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
