import React, { Component } from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import axios from "axios"
import { BannerWrapper } from "./styledcomponents"
class HomeBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: [],
            imgHeight: 150,
            slideIndex: 0
        }
    }
    async componentWillMount() {
        let result = await axios.get("/mw/app/index/banner")
        this.setState({banner:result.data.entity.indexCenterBanner })
    }
    render() {


        return (
            <BannerWrapper>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="hidden"
                        cellSpacing={5} 
                        slideWidth={0.9}
                        autoplay
                        infinite
                        dots = {true} 
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index }) }
                    >
                        {this.state.banner.map((item,index) => (
                            <div
                                key={item.id}
                                // href="http://www.alipay.com"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top:  this.state.slideIndex === index ? 3 : 13,
                                    height: this.state.slideIndex === index ? 165 : 150,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    passive: false,
                                   
                                    
                                }}
                            >
                                <img
                                    src={`http://static.91miwei.com${item.imagesUrl}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top',
                                    height: this.state.slideIndex === index ? 165 : 150,
                                    }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: null });
                                    }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </WingBlank>

            </BannerWrapper>

        );


    }
}


export default HomeBanner