import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import MenuList from "../home/component/MenuList"

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="g-acc-bg" >

                <div className="m-block-header" ><a href="/" className="m-public-icon m-1yyg-icon"></a></div>

                <div className="m_myInfo"><dl><dt className="gray6 person-info-btn" >
                    <a href="/userInfoSetting">
                        <img src="https://img.1yyg.net/UserFace/00000000000000000.jpg" />
                    </a><p>USER.1016069267<em className="gray9">（ID:1016069267）</em>
                        <cite className="gray9"><span className="z-className-icon01"><s></s>云购小将</span></cite></p>
                    <i className="m-set"></i></dt><dd className="clearfix"><b className="can-use-points">
                        <a href="/myGoodLuck"><em className="orange">20</em>可用福分</a></b>
                        <b className="can-use-balance"><a href="consumption.do"><em className="orange"><i>￥</i>0.00</em>可用余额</a></b>
                        <a href="/charger" className="orangeBtn go-charge-btn">去充值</a></dd></dl></div>


                <div className="sub_nav marginB person-page-menu">
                    <a href="/v40/member/goodsbuylist.do"><s className="m_s1"></s>我的云购记录<i></i></a>
                    <a href="/v40/member/orderlist.do"><s className="m_s2"></s>获得的商品<i></i></a>
                    <a href="/v40/member/postlist.do"><s className="m_s4"></s>我的晒单<i></i></a>
                    <a href="/v40/member/mywallet.do"><s className="m_s11"></s>我的钱包<i></i></a>
                    <a href="/v40/help/help.do" className="mt10"><s className="m_s7"></s>帮助与反馈<i></i></a>
                    <p className="colorbbb">客服热线：4000-588-688  (工作时间9:00-21:00)</p>
                </div>
                <MenuList/>

            </div>

        );
    }
}

