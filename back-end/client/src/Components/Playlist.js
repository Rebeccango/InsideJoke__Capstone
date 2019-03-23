import React from 'react';
import axios from 'axios';

import TriviaCard from './TriviaCard';

export default class Playlist extends React.Component {
    // state = {
    //     group: "" ,       
    //     playlist: []
    // }

    componentDidMount(){
        axios.get('/jokes')
        .then((res)=>{
            console.log(res.data)
            // var playlist = res.data;
            // this.setState({
            //     playlist: playlist
            // })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <>
                <div>
                    <h1>Test -- will need to map through list randomly pending on stuff </h1>
                    <TriviaCard/>
                </div>
                <button className="nextQuestion">Next</button>
            </>
        )
    }
}