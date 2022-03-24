import styled from 'styled-components'
export const SwiperLi = styled.li`
    position: absolute;
    left: ${(props) => -props.activeIndex * (props.widthSingle 
    + 10) + (props.widthTotal - 100) / 2 - props.widthSingle / 2 + props.index * (props.widthSingle + 10)}px;
    top: 0;
    margin-top: 10px;
    /* margin-right: 10px; */
    box-sizing: border-box;
    transition: left 1s;
    &.active {
        border: 1px solid red;
    }
`