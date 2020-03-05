import React, { Component } from 'react'
import {Switch,Route, Redirect,withRouter} from 'react-router-dom'
import Header from './header';
import Sign from './sign';
import Scorner from './studentscorner';
import Login from './login';
import Land from './land';
import Footer from './footer'
import Food from './food';
import { connect } from 'react-redux';


import {adduser} from '../redux/actioncreators'
const mapDispatchToProps = (dispatch) => ({
    adduser: user => dispatch(adduser(user))
})


class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/land' component={Land}/>
                    <Route exact path='/login' component={Login} adduser={this.props.addusers}/>     
                    <Route exact path='/signin' component={Sign} />
                    <Route exact path='/studentscorner' component={Scorner}/>
                    <Route exact path='/studentscorner/food' component={Food}/>
                    
                    <Redirect to='/land'/>                  
                </Switch>
                <Footer/>
            </div>
        )
    }
}


export default  withRouter(connect(mapDispatchToProps)(Main))