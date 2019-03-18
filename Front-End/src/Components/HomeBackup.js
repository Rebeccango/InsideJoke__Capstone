import React from 'react';
//Components
import HeaderFooter from './HeaderFooter';

export default class Home extends React.Component{
    render(){
        return(
            <>
                <HeaderFooter/>
                <div className="login__div">
                    <form>
                        <label>User Name
                            <input type="text" name="username"/>
                        </label>
                        <label>Password
                            <input type="text" name="username"/>
                        </label>

                        <input type="submit"/>
                    </form>
                </div>
            </>
        )
    }
}