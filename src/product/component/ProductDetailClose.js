import React, { Component } from "react"
import MenuList from "../../home/component/MenuList"
export default class ProductDetailClose extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="g-acc-bg">
                <div className="m-block-header" id="div-header" style={{"display": "none"}}>
                    <strong id="m-title"></strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div className="issue">
                    <ul>
                        <li><a href="/v40/lottery/detail-12492905.do" data-codeid="12492905" data-period="485" data-codestate="3">第485云</a></li><li><a href="/v40/lottery/detail-12492904.do" data-codeid="12492904" data-period="484" data-codestate="3">第484云</a></li><li><a href="/v40/lottery/detail-12492903.do" data-codeid="12492903" data-period="483" data-codestate="3">第483云</a></li><li className="z-more"><a href="/v40/MorePeriod-23559.do"><s className="fl"></s><em className="z-set"></em></a></li>
                    </ul>
                </div>

                <div id="divPic" className="pPic">
                    <div className="pPic2">
                        <div id="sliderBox" className="pImg" style={{"width": "630px"}}>
                            <div className="flex-viewport">
                                <ul className="slides" 
                                style={{"width": "500%","-webkit-transition":"0s","transition": "0s", "-webkit-transform": "translate3d(0px, 0px, 0px)","display": "block"}}>
                                    <li><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20161103172920124.jpg" /></li><li><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20161103172939343.jpg" /></li><li><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20161103172926110.jpg" /></li><li><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20161103172933115.jpg" /></li>
                                </ul>
                            </div>
                            <ul className="direction-nav">
                                <li className="prev" style={{"display": "block", "width": "205px"}}></li>
                                <li className="next" style={{"display": "block","width": "205px"}}></li>
                            </ul>
                        </div>
                        <dl id="PicPostion">
                            <dd></dd><dd></dd><dd></dd><dd></dd>
                        </dl>
                    </div>
                </div>

                <div className="pro_info pro_info_con">
                    <h2 className="gray6">


                        苹果（Apple）MacBook Pro 13.3英寸笔记本电脑<span>（Core i5处理器/8GB内存/256GB硬盘/不具备Multi-Touch Bar）速度更快，性能更强，身形更纤薄！（颜色随机发）</span>
                    </h2>
                    <div className="purchase-txt gray9 clearfix">

                    </div>
                    <div className="clearfix">

                        <div className="gRate">

                        </div>
                    </div>
                    <div className="g-goods-end gray6">本商品已结束</div>
                </div>

                <div className="ann_btn">
                    <a href="/product/productShowOrder">商品晒单<s className="fr"></s></a>
                </div>
                <MenuList />
            </div>
        )
    }
}