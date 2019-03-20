import React from 'react';
//components 
import HeaderTextBanner from '../../Brandelements/HeaderTextBanner';
import FooterSlogan from '../../Brandelements/FooterSlogan';

export default class MultipleChoice extends React.Component {
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
        
        let path = "/create";
        this.props.history.push(path);
    }

    render(){
        return(
         <div>  
             <header className="header--create">
                <HeaderTextBanner title="Multiple Choice"/>
             </header>
             <main className="main">
                <form className="CreateNew--MultipleChoice"
                      ref={this.form}
                      onSubmit={this.handler}>
                    <label>Enter Question:
                        <textarea name="multipleChoiceQuestion" />
                    </label>
                    <label>A)
                        <input type="text" name="optionA"/>
                    </label>
                    <label>B)
                        <input type="text" name="optionB"/>
                    </label>
                    <label>B)
                        <input type="text" name="optionC"/>
                    </label>
                    <input type="submit" value="create" className="btn"/>

                </form>     
             </main>
             <footer className="footer--create">
                <FooterSlogan/>
             </footer>
         </div>   
        )
    }
}