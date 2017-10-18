import React, { Component } from 'react'

/**
 * 用户充值,根据充值卡
 */
export default class ChargerByCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="g-acc-bg" >
                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">充值卡充值</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i class="m-public-icon"></i></a>
                    <a href="/" class="m-index-icon"><i class="m-public-icon"></i></a>
                </div>
                <div>
                    <div className="acc-menu g-rechargeNav">
                    <a href="/charger" className="z-checked">网银充值</a>
                    <a href="/chargerByCard">充值卡充值</a>
                    </div>
                    <div className="g-accounts-details">
                        <h4 className="gray9">您的当前余额：<em className="orange">￥0.00</em></h4>
                        <p id="pTaobao">仅支持1元云购官方充值卡充值，立即购买&gt;</p>
                    </div>

                    <div className="recharge-con clearfix">
                        <ul>
                            <li>
                                <input id="txtCard" type="text" placeholder="请输入12位纯数字卡号" maxlength="14" style={{"color": "rgb(187, 187, 187)"}} /><i>充值卡号</i><cite></cite></li>
                            <li>
                                <input id="txtPwd" type="text" placeholder="请输入8位充值卡密码" maxlength="8" /><i>充值密码</i></li>
                            <li id="li_info" className="z-card gray6"></li>
                            <li className="z-rec-a"><a id="btnSubmit" href="javascript:;" className="grayBtn">确认充值</a></li>
                        </ul>
                    </div>
                    <div id="divTaobao" className="acc-pop clearfix z-box-width" style={{"display": "none"}}>
                        <a href="javascript:;" className="z-set box-close"></a>

                        <h4 className="gray6">如何购买充值卡？</h4>

                        <div className="copy-con">
                            <span className="gray6">方法1、打开淘宝网搜索店铺，输入关键字“1元云购网”</span>
                        </div>

                        <div className="copy-con">
                            <span className="gray6">方法2、复制以下网址使用浏览器打开</span>
                            <p className="gray9">http://shop.m.taobao.com/shop/shop_index.htm?spm=0.0.0.0&amp;shop_id=117344387 </p>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}