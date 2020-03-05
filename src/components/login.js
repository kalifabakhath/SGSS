import React, { Component } from 'react';
import {Control,LocalForm} from 'react-redux-form';
import {Link} from 'react-router-dom';


export default class Login extends Component {
    constructor(props){
          super(props);
        this.handlelogin=this.handlelogin.bind(this);
    }

    handlelogin(values){
             alert(JSON.stringify(values));
             this.props.adduser(values)
    }
    render() {
        return (
                  <div className='login'>
                    <div className="log">
                      <h4 className="login-title col-md-auto">Login</h4>
                      <LocalForm className="form" onSubmit={(values) => this.handlelogin(values)}>
                            <Control.text model=".username" id="username" 
                                        name="username"
                                        placeholder="username"
                            /><br/>
                            
                            <Control.text model=".password" id="password" 
                                        name="password"
                                        placeholder="password"
                            /><br/>
              
                            <button className='login-but'className='log-but f6 f7-ns db'>Login</button>
                            
                      </LocalForm>
                   <Link to='/signin' className='account'>Create an Account</Link>
                   </div>
                  </div>
        )
    }
}
