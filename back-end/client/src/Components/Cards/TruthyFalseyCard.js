import React from 'react';
//components 
import HeaderTextBanner from '../Brandelements/HeaderTextBanner';
import FooterSlogan from '../Brandelements/FooterSlogan';

export default class TruthyFalseyCard extends React.Component {
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
             <header className="header--play">
                <HeaderTextBanner title="Truthy or Falsey"/>
             </header>
             <main className="main">
                <form className="CreateNew--TruthyFalsey"
                      ref={this.form}
                      onSubmit={this.handler}>
                    <label>Enter a statement:
                        <input type="text" name="sentence change this accordingly"/>
                    </label>
                    <input type="submit" value="create"/>
                </form>     
             </main>
             <footer className="footer--play">
                <FooterSlogan/>
             </footer>
         </div>   
        )
    }
}