import React, { Component } from "react"

export default  class ProductSearch extends Component{

    constructor( props ){
        super(props)
    }
    render(){
        return(
                <div>
                    <div className="pro-s-box thin-bor-bottom" id="divSearch">
                        <div className="box">
                            <div className="border">
                                <div className="border-inner"></div>
                            </div>
                            <div className="input-box">
                                <i className="s-icon"></i>
                                <input type="text" placeholder="输入“汽车”试试" id="txtSearch" />
                                <i className="c-icon" id="btnClearInput" style={{"display":"none"}}></i>
                            </div>
                        </div>
                        <a href="javascript:;" className="s-btn" id="btnSearch">搜索</a>
                    </div>

                    {/*<!--搜索时显示的模块-->*/}
                    <div className="search-info" style={{"display": "none"}}>
                        <div className="hot">
                            <p className="title">热门搜索</p>
                            <ul id="ulSearchHot" className="hot-list clearfix">
                                <li wd="iPhone"><a className="items">iPhone</a></li>
                                <li wd="三星"><a className="items">三星</a></li>
                                <li wd="小米"><a className="items">小米</a></li>
                                <li wd="黄金"><a className="items">黄金</a></li>
                                <li wd="汽车"><a className="items">汽车</a></li>
                                <li wd="电脑"><a className="items">电脑</a></li>
                            </ul>
                        </div>
                        <div className="history" >
                            <p className="title">历史记录</p>
                            <div className="his-inner" id="divSearchHotHistory">
                                <ul className="his-list thin-bor-top">
                                    <li wd="黄金" className="thin-bor-bottom"><a className="items">黄金</a></li>
                                </ul>
                                <div className="cle-cord thin-bor-bottom" id="btnClear">清空历史记录</div>
                            </div>
                        </div>
                    </div>

                    <div className="all-list-wrapper">

                        <div className="menu-list-wrapper" id="divSortList">
                            <ul id="sortListUl" className="list">
                                <li sortid="0" className="current"><span className="items">全部商品</span></li>
                                <li sortid="100" reletype="1" linkaddr=""><span className="items">手机数码</span></li>
                                <li sortid="105" reletype="1" linkaddr=""><span className="items">电脑办公</span></li>
                                <li sortid="109" reletype="1" linkaddr=""><span className="items">家用电器</span></li>
                                <li sortid="114" reletype="1" linkaddr=""><span className="items">钟表首饰</span></li>
                                <li sortid="118" reletype="1" linkaddr=""><span className="items">食品饮料</span></li>
                                <li sortid="123" reletype="1" linkaddr=""><span className="items">化妆个护</span></li>
                                <li sortid="124" reletype="1" linkaddr=""><span className="items">运动户外</span></li>
                                <li sortid="125" reletype="1" linkaddr=""><span className="items">家居家纺</span></li>
                                <li sortid="126" reletype="1" linkaddr=""><span className="items">礼品箱包</span></li>
                                <li sortid="127" reletype="1" linkaddr=""><span className="items">母婴</span></li>
                                <li sortid="128" reletype="1" linkaddr=""><span className="items">汽车</span></li>
                                <li sortid="130" reletype="1" linkaddr=""><span className="items">其他商品</span></li>
                                <li sortid="400"><span className="items">限购专区</span></li>
                            </ul>
                        </div>

                        <div className="good-list-wrapper">
                            <div className="good-menu thin-bor-bottom">
                                <ul className="good-menu-list" id="ulOrderBy">
                                    <li orderflag="10" className=""><a href="javascript:;">即将揭晓</a></li>
                                    <li orderflag="20"><a href="javascript:;">人气</a></li>
                                    <li orderflag="50" className="current"><a href="javascript:;">最新</a></li>
                                    <li orderflag="30"><a href="javascript:;">价值</a><span className="i-wrap"><i className="up"></i><i className="down"></i></span></li>
                                    {/*<!--价值(由高到低30,由低到高31)-->*/}
                                </ul>
                            </div>
                            <div className="good-list-inner">
                                <div className="good-list-box" id="loadingPicBlock">
                                    <div className="goodList">
                                        <ul id="ulGoodsList">
                                            <li id="24329"> <span className="gList_l fl">        <img src="./商品列表_files/20170601153141779.jpg" />    </span>
                                                <div className="gList_r">
                                                    <h3 className="gray6">(第9云)红双喜（DHS）N402 羽毛球 12只装/桶x4桶</h3> <em className="gray9">价值：￥159.00</em>
                                                    <div className="gRate">
                                                        <div className="Progress-bar">
                                                            <p className="u-progress"><span style={{"width": "21.38364779874214%;"}} className="pgbar"><span className="pging"></span></span>
                                                            </p>
                                                            <ul className="Pro-bar-li">
                                                                <li className="P-bar01"><em>34</em>已参与</li>
                                                                <li className="P-bar02"><em>159</em>总需人次</li>
                                                                <li className="P-bar03"><em>125</em>剩余</li>
                                                            </ul>
                                                        </div>
                                                        <a codeid="12444735" className="" canbuy="125">
                                                            <s></s>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}