import React from 'react';
import jokeTypes from '../Assets/data_joketypes';
import sampleData from '../Test/Data/sampleData';

import TruthyFalseyCard from './Cards/TruthyFalseyCard';
import MultipleChoiceCard from './Cards/MultipleChoiceCard';
import AutoCompleteCard from './Cards/AutoCompleteCard';

export default class TriviaGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            jokelist: [],
            playing: 1,
            listMax: 0,
            answer: "hide"
        }
    }

    submitHandler = (answer) => {
        console.log(answer)
        return answer
    }

    render(){
        function cardType(type) {
            switch(type){  
                case jokeTypes[0]:
                    return <TruthyFalseyCard joketype={sampleData[1].type}
                                             question={sampleData[1].question}
                                            //  submitHandler={this.submitHandler}
                                             />;
                case jokeTypes[1]:
                    return <MultipleChoiceCard joketype={sampleData[1].type}
                                                question={sampleData[1].question}
                                                choices={sampleData[1].choices}/>;
                case jokeTypes[2]:
                    return <AutoCompleteCard joketypes={sampleData[1].type}
                                             question={sampleData[1].question}/>;
                default:
                    return null;
            }
        }
        
        // if (list.length === 0){
        //     return null;
        // }

        return(
            <section className="PlaylistPage">
                {cardType(sampleData[this.state.playing].type)}
            </section>
        )
    }
}