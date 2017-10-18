import React, { Component } from "react"
import MenuList from "../../home/component/MenuList"
export default class ProductDetailClose extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="g-acc-bg" >

                <div class="m-block-header" id="div-header" style="display: block;">
                    <strong id="m-title">商品详情</strong>
                    <a href="javascript:history.back();" class="m-back-arrow"><i class="m-public-icon"></i></a>
                    <a href="/" class="m-index-icon"><i class="m-public-icon"></i></a>
                </div>




                {/*<!--期数列表-->*/}
                <div class="issue">
                    <ul>
                        <li><a href="/v40/product/12209030.do" class="hover" data-codestate="1" data-codeid="12209030" data-period="862">第862云</a></li><li><a href="/v40/lottery/detail-12209029.do" data-codeid="12209029" data-period="861" data-codestate="3">第861云</a></li><li><a href="/v40/lottery/detail-12209028.do" data-codeid="12209028" data-period="860" data-codestate="3">第860云</a></li><li class="z-more"><a href="/v40/MorePeriod-22912.do"><s class="fl"></s><em class="z-set"></em></a></li>
                    </ul>
                </div>
                {/*<!--揭晓倒计时-->*/}

                {/*<!-- 产品图 -->*/}
                <div id="divPic" class="pPic">
                    <div class="pPic2">
                        <div id="sliderBox" class="pImg" style="width: 446px;">
                            <div class="flex-viewport">

                            </div>
                            <ul class="direction-nav">
                                <li class="prev" style="display: block; width: 113px;"></li>
                                <li class="next" style="display: block; width: 113px;"></li>
                            </ul>
                            <div class="flex-viewport" style="overflow: hidden; position: relative;">
                                <ul class="slides" style="width: 800%; transition: 0s; transform: translate3d(-92px, 0px, 0px); display: block;"><li class="clone" style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091717643.jpg" /></li>
                                <li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091501424.jpg" /></li><li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091513985.jpg" /></li>
                                <li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091548900.jpg" /></li>
                                <li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091621760.jpg"/></li>
                                <li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091653646.jpg"/></li><li style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091717643.jpg" /></li>
                                <li class="clone" style="width: 210px; float: left; display: block;"><img src="https://img.1yyg.net/GoodsPic/Pic-400-400/20160119091501424.jpg" /></li></ul>
                        </div>
                        <ul class="direction-nav"><li class="prev" style="display: block; width: 113px;"></li><li class="next" style="display: block; width: 113px;"></li></ul></div>
                                <dl id="PicPostion">
                                    <dd class="hover"></dd><dd></dd><dd></dd><dd></dd><dd></dd><dd></dd>
                                </dl>
                            </div>
                        </div>
                        {/*<!-- 产品信息 -->*/}
                        <div class="pro_info">
                            <h2 class="gray6">
                                <span class="purchase-icon">限购</span>
                                (第<em id="Period">862</em>云)
                平安银行 平安金元宝 Au9999 200g<span>外观饱满讨喜，工艺精美，是聚财纳福、赠送馈礼的绝佳宝物！(此商品不可晒单)</span>
                            </h2>
                            <div class="purchase-txt gray9 clearfix">
                                价值：￥66000.00<span>限购5人次</span>
                            </div>
                            <div class="clearfix">
                                <div class="g-goods-share fr"><a id="btnShare" href="javascript:;"><p class="z-set"></p>分享</a></div>
                                <div class="gRate">
                                    <div class="Progress-bar"><p class="u-progress" title="已完成92%"><span class="pgbar" style="width:92%;"><span class="pging"></span></span></p><ul class="Pro-bar-li"><li class="P-bar01"><em>61264</em>已参与</li><li class="P-bar02"><em>66000</em>总需人次</li><li class="P-bar03"><em>4736</em>剩余</li></ul></div>
                                </div>
                            </div>
                            {/*<!--本商品已结束-->*/}

                        </div>

                        <div class="ann_btn">
                            {/*<!--所有参与记录-->*/}
                            <a href="/v40/buyrecords-12209030.do">参与记录<s class="fr"></s></a>
                            {/*<!--商品详情-->*/}
                            <a href="/v40/GoodsImgDesc-22912.do">图文详情<em>（建议WIFI下使用）</em><s class="fr"></s></a>
                            {/*<!--商品晒单-->*/}
                            <a href="/v40/post/GoodsPost-22912.do">商品晒单<s class="fr"></s></a>
                        </div>


                        <div class="pro_foot">

                            <a href="/v40/mycart/index.do" id="btnCart"><i class="fr"><b num="18">18</b></i></a>
                            <div class="btn">
                                <ul>
                                    <li id="22912" codeid="12209030" goodsid="22912" codeperiod="862"><img name="goodsImg" src="https://img.1yyg.net/goodspic/pic-70-70/20160119091501424.jpg" style="display:none" /><a name="buyBox" limitbuy="5" surplus="4736" totalnum="66000" alreadybuy="61264" href="javascript:;" class="orangeBtn">立即1元云购</a></li><li><a href="javascript:;" class="blueBtn">加入购物车</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}