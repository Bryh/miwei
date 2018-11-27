import React, { Component } from "react"

import { ListWrapper, ListItem } from "./styledcomponents"
import axios from "axios"



class HomeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listdata: ""
        }
        this.renderItem = this.renderItem.bind(this)
    }
    async componentWillMount() {
        let result = await axios("/mw/app/logo2", {
            params: {
                type: 1
            }
        })
        this.setState({ listdata: result.data.entity.appLogo })

    }

    render() {
        return (    
            <ListWrapper>
                {this.renderItem()}

            </ListWrapper>
        )
    }

    renderItem() {  
        if (this.state.listdata == "") {
            return(
                <p>aaa</p>
            ) 
        } else {
            return (

                this.state.listdata.map(item => <ListItem
                    key={item.id}
                >
                 <img src={item.icon} alt=""/>
                        <p>{item.name}</p>
                </ListItem>)

            )
        }

    }
}


export default HomeList