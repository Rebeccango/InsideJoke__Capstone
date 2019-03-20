import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//Components
import Home from './Components/Home';
import LoginSignup from './Components/Forms/LoginSignup';
import MainMenu from './Components/MainMenu';
import CreateNewForm from './Components/Forms/CreateNewForm';
//Joke templates 
import AutoComplete from './Components/Forms/TypeOfJokes/AutoComplete';
import ClosedCaption from './Components/Forms/TypeOfJokes/ClosedCaption';
import MultipleChoice from './Components/Forms/TypeOfJokes/MultipleChoice';
import TruthyFalsey from './Components/Forms/TypeOfJokes/TruthyFalsey';
//TEST --- play mode 
import AutoCompleteCard from './Components/Cards/AutoCompleteCard';
// import ClosedCaptionCard from './Components/Cards/ClosedCaptionCard';
// import MultipleChoiceCard from './Components/Cards/MultipleChoiceCard';
// import TruthyFalseyCard from './Components/Cards/TruthyFalseyCard';

//Data
// import jokeTypes from './Components/Forms/joke_types';

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
              {/* All joke types */}

              {/* {jokeTypes.map((joke=>{return <Route path="/createNew/"+ joke
                                                   render={(routeProps)=>(<LogininSignup {...routeProps})}/>
                                                  }))} */}
              {/* Test */}
              {/* should remove this and put under same route as create */}
              <Route path="/createNew/Auto Complete" render={(routeProps)=>(<AutoComplete {...routeProps}/>)}/>
              <Route path="/createNew/Closed Caption" render={(routeProps)=>(<ClosedCaption {...routeProps}/>)}/>
              <Route path="/createNew/Multiple Choice" render={(routeProps)=>(<MultipleChoice {...routeProps}/>)}/>
              <Route path="/createNew/Truthy Or Falsey" render={(routeProps)=>(<TruthyFalsey {...routeProps}/>)}/>
              {/* Test */}
              <Route path="/play" render={(routeProps)=>(<AutoCompleteCard {...routeProps}/>)}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
