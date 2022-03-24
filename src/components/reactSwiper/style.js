import styled from 'styled-components'
export const Wrapper = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    overflow: hidden;
    margin: 50px auto;
    position: relative;
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }
    li {
        list-style: none;
    }
    .box {
        width: 40px;
        height: 100%;
        background-color: #999;
        border: 1px solid #333;
        line-height: ${(props) => props.height}px;
        text-align: center
    }
    .left {
        /* position: absolute;
        left: 0px;
        top: 0; */
        float: left;
        margin-right: 10px;

    }
    .right {
        /* position: absolute;
        right: 0px;
        top: 0; */
        float: right;
    }
    .swiperList {
        float: left;
        width: 800px;
        height: 100%;
        background-color: #eee;
        border: 1px solid #333;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        li {
            height: 180px;
            width: 180px;
            float: left;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`