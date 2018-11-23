import React, { Component } from "react"

import { ActiveOwnNavLink } from "@libs/NavLink"


class NavItem extends Component {
    constructor ( props ) {
        super(props)
        this.state = {
           
        }
        
    }
    // componentDidMount () {
        
    //     console.log(this);
        
    //     console.log();
        
    // }
    render () {
        

        return (
            <ActiveOwnNavLink imgsrc= {this.props.imgsrc} activesrc={this.props.activesrc}  tag="span" className="nav-item" to={this.props.to} >
                <span ></span>
                <p >{ this.props.title }</p>
            
            </ActiveOwnNavLink>
            
        )
    }

    
}


export default NavItem