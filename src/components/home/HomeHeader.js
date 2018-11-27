import React, { Component } from "react"

import { HearderWrapper } from "./styledcomponents"
import logo from "@assets/images/logo.png"
class HomeHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HearderWrapper className="home-header">
                <div className="header-to-person">
                    <img src= {logo} alt="" />
                </div>
                <div className="header-search">
                    <i className="fa fa-search fa-2x"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;搜索菜品、食材
                </div>
            </HearderWrapper>
        )
    }
}


export default HomeHeader 