import React from 'react';
//components 
import HeaderTextBanner from '../../Brandelements/HeaderTextBanner';
import FooterSlogan from '../../Brandelements/FooterSlogan';
import jokeTypes from '../joke_types';

export default class TruthyFalsey extends React.Component {
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
        console.log(e.target.trueFalseStatement.value);

        let path = "/create"
        this.props.history.push(path);
    }

    render(){
        return(
         <div>  
             <header className="header--create">
                <HeaderTextBanner title="Truthy or Falsey"/>
             </header>
             <main className="main">
                <form className="CreateNew--TruthyFalsey"
                      ref={this.form}
                      onSubmit={this.handler}>
                    <label> True? or False?
                        <select name="truefalse" type="select" className="select--TF">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    <label>Enter a statement:
                        <textarea type="text" name="trueFalseStatement"/>
                    </label>
                    <button className="btn">Preview</button>
                    <input  className="btn" type="submit" value="Submit"/>
                </form>     
             </main>
             <footer className="footer--create">
                <FooterSlogan/>
             </footer>
         </div>   
        )
    }
}