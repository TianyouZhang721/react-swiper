import React, { Component } from 'react'
import { Wrapper } from './style'
import { SwiperLi } from './liStyle'
import axios from 'axios'
class ReactSwiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catsList: [],
            activeIndex: this.props.activeIndex, // 默认选中下标
            widthTotal: this.props.widthTotal, // 组件总长度
            widthSingle: this.props.widthSingle, // 每个图的宽度
        }
        this.getCats = this.getCats.bind(this)
    }


    getCats() {
        
        axios({
            url: 'https://cataas.com/api/cats',
            methods: 'get',
            params: {
                tags: 'cute',
                skip: 0,
                limit: 10
            }
        }).then(res => {
            console.log(res)
            this.setState({
                catsList: res.data
            })

            // res.data.forEach(async (item, index) => {
            //     await axios({
            //         url: 'https://cataas.com/cat/' + item.id,
            //         methods: 'get'
            //     }).then(catResult => {
            //         console.log(catResult)
            //     })
            // })
        })
    }
    componentDidMount() {
        this.getCats()
    }
    leftClick() {
        let { activeIndex, catsList } = this.state
        activeIndex++
        if (activeIndex == catsList.length) {
            activeIndex = 0
        }
        this.setState({
            activeIndex
        })
    }
    rightClick() {
        let { activeIndex, catsList } = this.state
        activeIndex--

        if (activeIndex < 0) {
            activeIndex = catsList.length - 1
        }
        this.setState({
            activeIndex
        })
    }
    render() {
        const {
            catsList,
            activeIndex,
            widthTotal,
            widthSingle
        } = this.state
        console.log(widthTotal)
        console.log(widthSingle)
        return (
            <Wrapper 
                className="clearfix"
                width={900}
                height={200}
            >
                <div className='left box' onClick={() => this.leftClick()}>
                    &#8656;
                </div>
                <ul className='swiperList clearfix'>
                    {   
                        catsList.map((item, index) => {
                            return (
                                <SwiperLi 
                                activeIndex={activeIndex} 
                                className={activeIndex == index ? 'active' : ''} 
                                key={index} 
                                index={index} 
                                widthSingle={widthSingle} 
                                widthTotal={widthTotal}>
                                    <img src={'https://cataas.com/cat/' + item.id}/>
                                </SwiperLi>
                            )
                        })
                    }
                </ul>

                <div className='right box' onClick={() => this.rightClick()}>
                    &#8658;
                </div>
            </Wrapper>
        )
    }
}

export default ReactSwiper