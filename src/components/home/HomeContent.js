import React, { Component,Fragment } from "react"
import ContentBox from "@com/layout/ContentBox"
import axios from "axios"
import { connect } from "react-redux" 
import actionCreators from "@store/home/actionCreators"
class HomeContent extends Component {
    constructor (props) {
        super(props)
        // this.state = {
        //     contentlist: ""
        // }
        this.renderContent = this.renderContent.bind(this) 
    }

    componentWillMount () {
        // let result = await axios("/mw/app/index/recommendClassifyDetail")  
        // console.log(result);
        // this.setState({contentlist: result.data.entity.appRecommendClassifyList })
        this.props.getContentList()
    }

    render () {
        return (
            <Fragment>
                {this.renderContent()}
            </Fragment>
            
        )

            
    }
    renderContent () {
        let { contentlist } = this.props
        if (contentlist === ""){
            return (
                <ContentBox></ContentBox>
            )
        }else{
            return contentlist.map(item => 
                <ContentBox
                title = { item.name }
                key = { item.id }
                listdata = { item.appRecommendList}   
                ></ContentBox>
                )
        }
    }
}


const mapStateToProps = ( state ) => {
    return {
        contentlist: state.home.contentlist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContentList () {
            dispatch(actionCreators.getContentList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContent)
// export default HomeContent