import React from 'react';
import axios from 'axios';
//components 
import HeaderTextBanner from '../../Brandelements/HeaderTextBanner';
import FooterSlogan from '../../Brandelements/FooterSlogan';

export default class ClosedCaption extends React.Component {
    constructor(){
        super();
        this.state = {
            test: []
        }
        //Placeholder
        this.form = React.createRef();
    }

    //on form submit placeholder -- think of better name
    handler = (e)=>{
        e.preventDefault();
        console.log("don't forget to remove this console.log");

        console.log(e.target.closedCaptionImg.value);
        
        //maybe do set time out before redirect
        let path = "/create";
        this.props.history.push(path);
    }

    render(){
        return(
         <div>  
             <header className="header--create">
                <HeaderTextBanner title="Closed Caption"/>
             </header>
             <main className="main">
                <form className="CreateNewForm"
                      ref={this.form}
                      onSubmit={this.handler}>
                    <label for="avatar">Choose a profile picture:
                        <input type="file"
                            id="img__closedCaption" name="closedCaptionImg"
                            accept="image/png, image/jpeg">
                        </input>
                    </label>
                    <input className="btn" type="submit" value="create"/>
                </form>     
             </main>
             <footer className="footer--create">
                <FooterSlogan/>
             </footer>
         </div>   
        )
    }
}