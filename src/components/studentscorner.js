import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Scorner extends Component {
    constructor(props){
        super(props);
    }
    render() {
      let br={borderRadius:"50px" ,border:"solid rgb(34, 85, 151)",width:"200px",height:"200px",padding:"15px"}
     
        return (
            <div className='sc'>
                <div className='row r1'>
                  <Link to="/login" > 
                  <img className="academics cd "style={br} src="/assets/icons/academics.png" alt="Link image cap"/> 
                  </Link>
                
                  <Link >
                    <img className="hostel cd " style={br} src="/assets/icons/hostel.png" alt="Link image cap"/>    
                  </Link>
             
                  <Link >
                    <img className="transport cd " style={br} src="/assets/icons/transport.png" alt="Link image cap"/>                  
                  </Link>
              </div>  
              <div className='row r2 '>
                  <Link >
                    <img className="maintenance cd " style={br} src="/assets/icons/maintenance.png" alt="Link image cap" />              
                  </Link>
            
                  <Link to="/studentscorner/food">
                    <img  className="food cd " style={br} src="/assets/icons/food.png" alt="Link image cap" />              
                  </Link>
               
                  <Link>
                    <img  className="sports cd "style={br} src="/assets/icons/sports.png" alt="Link image cap" />              
                  </Link>
              </div> 
          </div>
        )
    }
}
