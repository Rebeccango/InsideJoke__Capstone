import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';

import Home from './Components/Home';
import LoginSignup from './Components/Forms/LoginSignup';
import MainMenu from './Components/MainMenu';
import CreateNewForm from './Components/Forms/CreateNewForm';
import Play from './Components/Forms/Play';
//Joke templates 
// import AutoComplete from './Components/Forms/TypeOfJokes/AutoComplete';
// import ClosedCaption from './Components/Forms/TypeOfJokes/ClosedCaption';
// import MultipleChoice from './Components/Forms/TypeOfJokes/MultipleChoice';
// import TruthyFalsey from './Components/Forms/TypeOfJokes/TruthyFalsey';
//TEST --- play mode 
// import AutoCompleteCard from './Components/Cards/AutoCompleteCard';
// import ClosedCaptionCard from './Components/Cards/ClosedCaptionCard';
// import MultipleChoiceCard from './Components/Cards/MultipleChoiceCard';
// import TruthyFalseyCard from './Components/Cards/TruthyFalseyCard';

//Data
// import jokeTypes from './Components/Forms/joke_types';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" render={(routeProps)=>(<LoginSignup {...routeProps}/>)}/> 
              <Route path="/signUp" render={(routeProps)=>(<LoginSignup {...routeProps}/>)}/>
              <Route path="/home/:user" render={(routeProps)=>(<MainMenu {...routeProps}/>)}/>
              <Route path="/create" render={(routeProps)=>(<CreateNewForm {...routeProps}/>)}/>
              <Route path="/play" render={(routeProps)=>(<Play {...routeProps}/>)}/>
          </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
