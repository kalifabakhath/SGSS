import React, { Component } from 'react'
import {Control,LocalForm,Errors} from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Sign extends Component {
    constructor(props){
        super(props);
        this.handlesignin=this.handlesignin.bind(this)
    }
    handlesignin(values){
      alert(JSON.stringify(values));
}

    render() {
        return (
            <div id='sign'>
              <h4 className="sign-title">Sign In</h4>
                <LocalForm className='container-fluid' onSubmit={(values) => this.handlesignin(values)}>
                      <div className = 'form-group row'>
                        
                        <Control.text id='Username' model='.Username' placeholder='Username'
                        validators={{
                          required,minLength:minLength(5),maxLength:maxLength(15)
                        }} />
                        <Errors
                             className="text-danger"
                             model=".Username"
                             show="touched"
                             messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 4 characters',
                                        maxLength: 'Must be 15 characters or less'
                                      }}
                        />
                      </div>

                      <div className = 'form-group row'>
                        
                        <Control.text id='email' model='.email' placeholder="Email"
                        validators={{
                          required,validEmail
                        }}  />
                        
                      </div>

                      <div className = 'form-group row'>
                  
                        <Control.text id='Password' model='.Password' placeholder="Passsword"  />
                      </div>
  
                      <div className = 'form-group row'>
                        <Control.select model=".user" id="user">
                          <option value="Student">Student</option>
                          <option value="Faculty">Faculty</option>
                        </Control.select>
                      </div> 
                      <button className='sign-but'  >Sign In</button>
                </LocalForm>
            </div>
        )
    }
}
