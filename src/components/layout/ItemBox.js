import React, { Component } from "react"
import { ItemWrapper } from "./styledcomponents"


class ItemBox extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        
        
        return (
            <ItemWrapper  className="item-wrapper" styled={this.props.styled}>
                <img src={ this.props.img } alt=""/>
                <div className="introduce">{this.props.name}</div>
            </ItemWrapper>
        )
    }
}


export default ItemBox 