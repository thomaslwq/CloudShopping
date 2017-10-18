import React,{ Component } from 'react'
import { Carousel } from "antd"
import { queryIndexFocusMap } from "../IndexQueryService"
/**
 * 首页焦点图
 */
export default class FocusMap extends Component{

    constructor( props ){
        super( props );
        let that = this;
        let responseData = queryIndexFocusMap()||{};
        let carouselList = responseData['listItems']||[];
        that.state = {
            carouselList:carouselList
        }
        
    }

    render(){
       let that = this;
        {/*<!--焦点图-->*/}
        return(    <div className="hotimg-wrapper">
                    <div className="hotimg-top"></div>
                    <div className="hotimg">
                        {/*<!--加载条 <div classNameName="loading clearfix"><b></b>正在加载</div>-->*/}
                      
                               <Carousel autoplay >
                                   {
                                     that.state.carouselList.map(function(data,index){
                                         return (
                                                <div>
                                                    <a href={data.url}>
                                                    <img  className="carousel-img" src={data.src} alt=""/>
                                                    </a>
                                                </div>
                                         )
                                     })
                                   }
                                </Carousel>
                    </div>
                  </div>
           )

    }

    

}