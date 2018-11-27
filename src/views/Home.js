import React, { Component,Fragment } from "react"

import NavBar from "@com/layout/NavBar"
import axios from "axios"
import { __await } from "tslib";
import HomeHeader from "@com/home/HomeHeader"
import HomeBanner from "@com/home/HomeBanner"
import HomeList from "@com/home/HomeList"
import HomeContent from "@com/home/HomeContent"




class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
    
    render () {
        return (
            <Fragment>
                <HomeHeader ></HomeHeader>
                <HomeBanner ></HomeBanner>
                <HomeList></HomeList>
                <NavBar></NavBar>
                <HomeContent></HomeContent>
            </Fragment>
            
        )
    }
}


export default Home