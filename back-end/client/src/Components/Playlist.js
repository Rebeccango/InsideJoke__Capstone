import React from 'react';
import axios from 'axios';

import TriviaCard from './TriviaCard';
import SampleData from '../Test/Data/sampleData';

export default class Playlist extends React.Component {
    state = {
        group: "" ,       
        playlist: [],
        playing: 0,
        playingMax: 0
        // sampledata : SampleData
    }

    nextQuestion = ( prevState )=>{
        var playing = this.state.playing; 

        if(playing < this.state.playingMax){
            this.setState({playing: playing  + 1 })
        }
        else{
            return null;
        }
    }
    componentWillMount(){
        
        axios.get('/jokes')
        .then((res)=>{
            console.log(res.data)
            var playlist = res.data;
            this.setState({
                playlist: playlist,
                playingMax: playlist.length - 1
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    componentDidMount(){
//work around using sample data 
        // this.setState({
        //     playlist: SampleData,
        //     playingMax: SampleData.length - 1
        // })

        // axios.get('/jokes')
        // .then((res)=>{
        //     console.log(res.data)
        //     var playlist = res.data;
        //     this.setState({
        //         playlist: playlist,
        //         playingMax: playlist.length - 1
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }

    render(){

        // const {answer, auth_group, author, choices, question, type} = this.state.playlist
        const playlist = this.state.playlist;

        if (playlist.length === 0){
            return null;
        }

        console.log(playlist[0]);
        const one = (playlist[0]);
        console.log(one);
        // console.log(one.answer);

        const sampledata = this.state.SampleData;
        return(
            <>
                <div>
                    <h1>Test -- will need to map through list randomly pending on stuff </h1>
                    <TriviaCard 
                                answer={SampleData[this.state.playing].answer}
                                choices ={SampleData[this.state.playing].choices || ""}
                                question={SampleData[this.state.playing].question}
                                />
                </div>
                <button className="nextQuestion"
                        onClick={this.nextQuestion}>Next</button>
            </>
        )
    }
}