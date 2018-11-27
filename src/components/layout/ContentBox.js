import React, { Component } from "react"
import { ContentWrapper } from "./styledcomponents"
import axios from "axios"
import ItemBox from "./ItemBox"
class ContentBox extends Component {
    constructor (props) {
        super(props)
       this.renderItemBox = this.renderItemBox.bind(this)
    }

   
    render () {
        return (
            <ContentWrapper>
                <div className="content-header">
                    <span className="content-title">{ this.props.title }</span>
                    <span className="content-all">查看全部</span>
                    
                </div>
                <div className="item-box-container">
                    {this.renderItemBox()}
                </div>
                
            </ContentWrapper>
        )
        
    
    }
    renderItemBox () {  
        let { listdata } = this.props
        let itemStyle =""
        let imgType = "image2"
        switch(listdata[0].classify_id){
            case 6 : itemStyle = "width: 4.2rem;height: 4.2rem";  break;
            case 5 : itemStyle = "width: 9rem;height: 5.399573rem"; imgType= "image"; break;
            case 7 : itemStyle = "width: 4.2rem;height: 5.857733rem";imgType="image3";  break;
            case 10 : itemStyle = "width: 4.2rem;height: 5.857733rem"; imgType="image3"; break;
            
        }
      
        return listdata.map((item) =>{
            return <ItemBox
            key = { item.id }
            name = { item.name }
            img = { item[imgType] }
            styled = { itemStyle }
            ></ItemBox>}
         )
    }
   
}


export default  ContentBox                                                                                                                                                  