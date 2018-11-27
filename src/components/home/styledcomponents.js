import styled from "styled-components"
import { Carousel, WingBlank } from 'antd-mobile';

import React, { component } from "react"

export  const HearderWrapper = styled.div`
    width: 100%;
    font-size: 10px;
    display: flex;
    background: #080808;
    height: 28px;
    padding: 8px 0;
    .header-to-person{
        flex: 15;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            display: inline-block;
            width: 50%;
            vertical-align: middle;
        }
    }
    .header-search{
        flex: 80;
        padding-left: 10px;
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 4px;
        color: #a0a0a0;
        margin-right: 10px;
    }
   
`

export const BannerWrapper = styled.div`
    /* overflow:hidden;
     */
     margin-bottom:40px;
     height: 180px;
     .space-carousel{
        touch-action: none;
     }

`
export const ListWrapper = styled.section`
    display: flex;
    align-content: flex-start;
    color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #4d4d4d;
    margin-bottom: 20px;
    width: 100%;
    flex-wrap: wrap;
`

export const  ListItem = styled.div`
        box-sizing: border-box;
        flex: 0 0 25%;
        text-align: center;
        margin-bottom: 10px;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        display: flex;
        color: #fff;
        font-size: 14px;
        img{
            display: block;
            width: 36px;
            margin: auto;
        }
        p{
            display: block;
            padding-top: 4px;
            text-align: center;
        }

`

