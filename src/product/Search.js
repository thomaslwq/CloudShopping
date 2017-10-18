import React, { Component } from "react"
import MenuList from "../home/component/MenuList"

export default class ProductSearch extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="g-acc-bg m-site-box" >

                <div className="m-block-header" id="div-header" style={{"display":"block"}}>
                    <strong id="m-title">搜索</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>

                <div className="pro-s-box thin-bor-bottom search-box pos-fix-0" id="divSearch">
                    <div className="box">
                        <div className="border">
                            <div className="border-inner"></div>
                        </div>
                        <div className="input-box">
                            <i className="s-icon"></i>
                            <input type="text" placeholder="输入“汽车”试试" value="" id="txtSearch" maxlength="10" />
                            <i className="c-icon" id="btnClearInput" ></i>
                        </div>
                    </div>
                    <a href="javascript:;" className="s-btn" id="btnSearch">搜索</a>
                </div>
                {/*<!--搜索时显示的模块-->*/}
                <div className="search-info" style={{"display": "none"}}>
                    <div className="hot">
                        <p className="title">热门搜索</p>
                        <ul id="ulSearchHot" className="hot-list clearfix"><li wd="iPhone"><a className="items">iPhone</a></li><li wd="三星"><a className="items">三星</a></li><li wd="小米"><a className="items">小米</a></li><li wd="黄金"><a className="items">黄金</a></li><li wd="汽车"><a className="items">汽车</a></li><li wd="电脑"><a className="items">电脑</a></li></ul>
                    </div>
                    <div className="history" >
                        <p className="title">历史记录</p>
                        <div className="his-inner" id="divSearchHotHistory"><ul className="his-list thin-bor-top"><li wd="新鲜水果" className="thin-bor-bottom"><a className="items">新鲜水果</a></li><li wd="黄金" className="thin-bor-bottom"><a className="items">黄金</a></li><li wd="三星" className="thin-bor-bottom"><a className="items">三星</a></li></ul><div className="cle-cord thin-bor-bottom" id="btnClear">清空历史记录</div></div>
                    </div>
                </div>

                {/*<!--搜索结果模块-->*/}
                <div className="good-result pad-top-86" id="loadingPicBlock">
                    {/*<!--搜索有结果时-->*/}
                    <div className="goodList" style={{"display": "block"}}>
                        <div className="result-num thin-bor-bottom pos-fix-44" id="divResultTip" >
                            <p>
                                共搜索到&nbsp;
                    <span className="orange" id="spCount">2</span>
                                &nbsp;个相关商品
                </p>
                            <div className="add-car-all" id="multipleAddToCartBtn" >一键加入购物车</div>
                        </div>

                        <ul id="ulGoodsList"><li id="24099" className="">    <span className="gList_l fl">        <img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170424174344831.jpg" />
                        </span>    <div className="gList_r">        <h3 className="gray6">(第262云)小米（MIUI）小米6 6GB+64GB 全网通 4G手机</h3>        <em className="gray9">价值：￥3288.00</em>        <div className="gRate">
                            <div className="Progress-bar">                <p className="u-progress"><span style={{"width": "18.704379562043794%"}} className="pgbar"><span className="pging"></span></span></p>
                                <ul className="Pro-bar-li">                    <li className="P-bar01"><em>615</em>已参与</li>
                                    <li className="P-bar02"><em>3288</em>总需人次</li>
                                    <li className="P-bar03"><em>2673</em>剩余</li>
                                </ul>            </div>
                            <a codeid="12561421" className=""><s></s></a>        </div>
                            </div></li><li id="24246" className="">    <span className="gList_l fl">
                                <img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170519100050568.jpg" /><div className="pTitle pPurchase">限购</div>    </span>    <div className="gList_r">
                                    <h3 className="gray6">(第289云)小米（MIUI）小米6 6GB+64GB 全网通 4G手机</h3>
                                    <em className="gray9">价值：￥3288.00</em>        <div className="gRate">
                                        <div className="Progress-bar">                <p className="u-progress">
                                            <span style={{"width": "4.409975669099757%"}} className="pgbar"><span className="pging"></span></span></p>
                                            <ul className="Pro-bar-li">
                                                <li className="P-bar01"><em>145</em>已参与</li>
                                                <li className="P-bar02"><em>3288</em>总需人次</li>
                                                <li className="P-bar03"><em>3143</em>剩余</li>
                                            </ul>
                                        </div>
                                        <a codeid="12542519" className=""><s></s></a>
                                    </div>    </div></li></ul>
                        <div id="divLoading" className="loading clearfix" style={{"display": "none"}}><b></b>正在搜索</div>
                    </div>

                    {/*<!--搜索无结果时-->*/}
                    <div className="null-search-wrapper" id="divNoneData" style={{"display": "none"}}>
                        <div className="null-search-inner">
                            <i className="null-search-icon"></i>
                            <p className="gray9">抱歉，没有您想要的商品！</p>
                        </div>

                        <div className="hot-recom">
                            <div className="title thin-bor-top gray6">人气推荐</div>
                            <div className="goods-wrap thin-bor-top">
                                <ul className="goods-list clearfix" id="ulRec"></ul>
                            </div>
                        </div>
                    </div>

                </div>

                <MenuList/>
            </div>
        )
    }
}