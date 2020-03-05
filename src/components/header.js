import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
           isopen:true
        };
        this.togglenav=this.togglenav.bind(this);
       
    }

togglenav(){
    this.setState({
        isopen:!this.state.isopen
    })
}

    render() {
        let st={color:"black"}
        let c={color:"aliceblue"}
        return (
            <div className="head">
            <Navbar color="faded" light>
              <NavbarBrand style={c}href="/" className="mr-auto homenav">SGSS</NavbarBrand>
              <NavbarToggler onClick={this.togglenav} className="mr-2" />
              <Collapse isOpen={!this.state.isopen} navbar>
                <Nav navbar className='nitem'>
                  <NavItem>
                    <Link to='/login' style={st}>Login</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/signin' style={st}>SignIn</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      
        
    }
}
