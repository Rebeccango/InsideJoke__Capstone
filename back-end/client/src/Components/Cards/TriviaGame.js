import React from 'react';
import jokeTypes from '../../Assets/data_joketypes';
import sampleData from '../../Test/Data/sampleData';

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

render(){
    const list = this.props.list;
    var index = this.props.playing;
    console.log(list);

    // const {type, choices, question, answer, _id, author } = joke;

    function cardType(type) {

        switch(type){  
            case jokeTypes[0]:
                return <TruthyFalseyCard joketype={list[index].type}
                                         question={list[index].question}
                                        //  submitHandler={this.selectanswer}
                                            />;
            case jokeTypes[1]:
                return <MultipleChoiceCard joketype={list[index].type}
                                            question={list[index].question}
                                            choices={list[index].choices}/>;
            case jokeTypes[2]:
                return <AutoCompleteCard joketypes={list[index].type}
                                            question={list[index].question}/>;
            default:
                return null;
        }
    }
        
        if (list.length === 0){
            return null;
        }

        return(
            <section className="PlaylistPage">
                {cardType(list[index].type)}
            </section>
        )
    }
}