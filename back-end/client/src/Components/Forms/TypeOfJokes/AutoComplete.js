import React from 'react';
import axios from 'axios';
//components 
import HeaderTextBanner from '../../Brandelements/HeaderTextBanner';
import FooterSlogan from '../../Brandelements/FooterSlogan';

export default class AutoComplete extends React.Component {
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
    }

    render(){
        return(
         <div>  
             {/* header text banner will need to be more resuable, i.e. place text as prop  */}
             <header className="header--create">
                <HeaderTextBanner title="Auto Complete"/>
             </header>
             <main className="main">
                <form className="CreateNewForm"
                      ref={this.form}
                      onSubmit={this.handler}>
                    <label>
                        <input type="text" name="sentence change this accordingly"/>
                    </label>
                    <input type="submit" value="create"/>

                </form>     
             </main>
             <footer className="footer--create">
                <FooterSlogan/>
             </footer>
         </div>   
        )
    }
}