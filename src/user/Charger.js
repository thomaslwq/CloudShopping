import React, { Component } from 'react'

/**
 * 用户充值
 */
export default class Charger extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">网银充值</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div className="acc-menu g-rechargeNav">
                    <a href="/charger" className="z-checked">网银充值</a>
                    <a href="/chargerByCard">充值卡充值</a>
                </div>

                <div className="g-accounts-details">
                    <h4 className="gray9">您的当前余额：<em className="orange">￥0.00</em></h4>
                </div>

                <div className="g-Recharge clearfix">
                    <ul id="ulOption">
                        <li money="50" className="checked"><a href="javascript:;">50元</a><s className="z-set"></s></li>
                        <li money="100"><a href="javascript:;">100元</a><s className="z-set"></s></li>
                        <li money="200"><a href="javascript:;">200元</a><s className="z-set"></s></li>
                        <li money="500"><a href="javascript:;">500元</a><s className="z-set"></s></li>
                        <li money="1000"><a href="javascript:;">1000元</a><s className="z-set"></s></li>
                        <li>
                            <input type="text" placeholder="请输入" maxlength="8" /><s className="z-set"></s>
                        </li>
                    </ul>
                </div>

                <div className="g-accounts-details">
                    <h4 className="gray6">充值金额<i className="orange" id="iRechargeMoney">50.00</i>元</h4>
                </div>

                <div className="online-banking clearfix">
                    <dl id="ulBankList">
                        <dt><a href="javascript:;">选择网银</a></dt>
                        <dd className="checked" type="jdPay"><a href="javascript:;">京东支付</a><s className="z-set"></s></dd>
                    </dl>
                </div>

                <div className="f-Recharge-btn">
                    <a id="btnSubmit" href="javascript:;" className="orangeBtn">确认充值</a>
                </div>


            </div>

        )

    }
}