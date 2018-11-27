import styled from "styled-components"



export  const NavWrapper = styled.div`
    background: #151515;
    position: fixed;
    z-index: 50;
    border-top: .106667rem solid transparent;
    height: 1.44rem;
    box-sizing: border-box;
    overflow: hidden;
    bottom: 0 ;
    width: 100%;
    display: flex;
`
export const ContentWrapper = styled.section`
    padding: 0 .266667rem;
    font-size: .373333rem;
    margin-bottom: .8rem;
    display: block;
    color:#fff;
    .content-header{
        display: flex;
        justify-content: space-between;
        color: #fff;
        margin-bottom: .266667rem;
        line-height: 1;
        .content-title{
            font-size:.426667rem;

        }
        .content-all{
            color: #dedede;
        }
    }
    .item-box-container{
        overflow: hidden;
        overflow-x: scroll;
        white-space: nowrap;
    }
`


export const ItemWrapper = styled.div`
    
    display: inline-block;
    margin-right: .266667rem;
    color: #fff;
    position: relative;
    /* width:4.2rem;
    height: 5.857733rem; */
    ${props => props.styled}
    img{
        width: 100%;
        height: 100%;
        display: block;
        border-radius: .16rem;
    }
    .introduce{
        color: #fff;
        padding-left: .213333rem;
        padding-top: .213333rem;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`