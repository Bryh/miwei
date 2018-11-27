import React from 'react'
import {   withRouter } from 'react-router-dom'
import styled from 'styled-components'



const OwnLinkItem = (props) =>{
    let Tag = props.tag || "a"
   
    let _class = props.className || ''
    let _activeClassName = props._activeClassName || "active"
    
    let className = (props.location.pathname === props.to)? _class + ' ' + _activeClassName : _class
    
    return (
        <Tag className = {className} onClick = { () => { props.history.push(props.to) }  }>{props.children}</Tag>
    )
}

 
export const OwnNavLink = (props) => {
    let Item = withRouter(OwnLinkItem)
   
    
    return (
        <Item {...props} ></Item>
    )
}

export const ActiveOwnNavLink = styled(OwnNavLink)`
    width: 25%;
    height:100%;
    text-align: center;
    &.active {
        color: #de0041;
        span{
            background-image: url(${props => props.activesrc}) ;
            background-size: 100%;
        }
    }
    color: #999;
    font-size: .266667rem;
    span{
        width: .72rem;
        height: .72rem;
        display: block;
        background-image: url(${props => props.imgsrc}) ;
        background-size: 100%;
        margin:auto;
    }
    
`