import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"


export default class Share extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="g-acc-bg" >

                <div className="m-block-header" id="div-header" >
                    <strong id="m-title">1元云购 - 惊喜无限</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div id="wrapper">
                    <div className="inv-ad">
                        <img src="https://skin.1yyg.net/v40/weixin/Member/images/inv-ad.png" />
                    </div>




                    <p className="sha-txt"><span id="p_prcode">二维码分享</span></p>
                    <div className="inv-con gray9">
                        <a id="btnShare" href="javascript:;" className="orangeBtn">立即赚钱</a>
                        <p>长按复制以下链接发送给好友</p>
                        <span id="txtInfo">1元云购是一种很有意思的新型购物模式，1元就可能买到iPhone 6S，快来试试吧！http://y.1yyg.com/7nI3Ab</span>
                    </div>

                    <div className="inv-count clearfix">
                        <ul>
                            <li>
                                <em className="orange">
                                    0</em>
                                <i className="colorbbb">邀请好友</i>
                            </li>
                            <li>
                                <em className="orange" id="emMoney">￥0.00</em>
                                <i className="colorbbb">佣金余额</i>
                            </li>
                        </ul>
                    </div>

                    <div className="ann_btn">
                        <a href="invitelist.do">邀请记录<s className="fr"></s></a>
                        <a href="commission.do">佣金明细<s className="fr"></s></a>
                        <a href="mentionList.do">提现记录<s className="fr"></s></a>
                    </div>

                    <div className="pro_foot pro_foot_commission">
                        <ul>
                            <li id="liMention" className="border-orange-Btn"><a href="javascript:;">佣金提现</a></li>
                        </ul>
                    </div>

                    {/*<div className="weixin-mask" style="height: 668px; display: none;"></div>*/}

                </div>


            </div>

        );
    }
}

