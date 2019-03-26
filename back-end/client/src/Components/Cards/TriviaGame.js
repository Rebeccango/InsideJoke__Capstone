import React from 'react';
import jokeTypes from '../../Assets/data_joketypes';
// import sampleData from '../../Test/Data/sampleData';

import TruthyFalseyCard from './TruthyFalseyCard';
import MultipleChoiceCard from './MultipleChoiceCard';
import AutoCompleteCard from './AutoCompleteCard';

export default class TriviaGame extends React.Component {
constructor(){
    super();
    this.state = {
        test: ""
    }
}
selectanswer = (answer) => {
    console.log(answer)
    return answer
}

cardType = (oftype, joke) =>{

    switch(oftype){  
        case jokeTypes[0]:
            return <TruthyFalseyCard joketype={joke.type}
                                     question={joke.question}
                                     nextQuestion={this.props.nextQuestion}
                                        />;
        case jokeTypes[1]:
            return <MultipleChoiceCard joketype={joke.type}
                                        question={joke.question}
                                        choices={joke.choices}
                                        nextQuestion={this.props.nextQuestion}
                                        />;
        case jokeTypes[2]:
            return <AutoCompleteCard joketype={joke.type}
                                     question={joke.question}
                                     nextQuestion={this.props.nextQuestion}
                                     />;
        default:
            return null;
    }

}

render(){
const list = this.props.list;
console.log(list);
var index = this.props.playing;
console.log(index);

        return(
            <section className="PlaylistPage">
                { this.cardType(list[index].type, list[index])}
            </section>
        )
    }
}