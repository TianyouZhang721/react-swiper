/*
 * @Author: Anthony Zhang
 * @Date: 2022-03-15 17:00:23
 * @LastEditTime: 2022-03-17 11:45:48
 * @LastEditors: Please set LastEditors
 * @FilePath: \驾照识别\src\index.js
 */


import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactSwiper from './components/reactSwiper/ReactSwiper'
const App = (props) => {
    console.log(props)
    const [activeIndex, changeIndex] = useState(() => {
        return props.activeIndex || 0
    })
    // const change = (type) => {
    //     if (type == 'reduce') {
    //         return --activeIndex
    //     }else if (type == 'add') {
    //         return ++activeIndex
    //     }
    // }
    return (
        <div>
            <ReactSwiper activeIndex={activeIndex} widthTotal={900} widthSingle={180}/>
        </div>
    )
}

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <App />, document.getElementById('root')
)