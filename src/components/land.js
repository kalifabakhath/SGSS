import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Land extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="land">
                <p>
                    The most cherished gift is a life based on education.<br/>
                    A little Knowledge removes a lot of Ignorance
                </p>
                <div className="landnavs">
                    <Link className="studentnav" to='/studentscorner'>Students_Corner</Link><br/>
                    <Link className="studentnav" to='/admin'>Administrator</Link><br/>
                </div>
            </div>
        )
    }
}
  