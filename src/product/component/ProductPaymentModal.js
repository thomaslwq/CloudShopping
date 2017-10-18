import React, { Component } from 'react'

/**
 * 弹出支付框
 */
export default class ProductPaymentModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="pageDialogBG" className="pageDialogBG" style={{"height": "7001px","display": "block"}}></div>
                <div id="pageDialog" className="pageDialog" style={{"width": "340px", "height": "254px","position": "fixed", "left": "76.5px","top": "32.75px","display": "block"}}>
                    <div className="buy-Pop-ups clearfix">
                        <div className="m-goods-info">
                            <cite className="fl"><img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170515164749066.jpg" />
                                <b className="z-set"></b></cite>        <p className="fl">
                                <span className="gray3" id="spPeriod"><em className="orange"></em>第29云</span>
                                <span className="gray9">剩余<i className="orange" id="iSurplus">6406</i>人次 / 限购<i className="orange">10</i>人次</span>        </p>
                        </div>    <div className="m-goods-num clearfix">
                            <div className="control-num-con" id="divNumber">
                                <ul className="flex-box">
                                    <li>我要云购</li>
                                    <li className="f-control-number box">
                                        <div className="flex-box">
                                            <i className="z-set z-less1 z-less2" id="num_del"></i>
                                            <input id="i_num" type="tel" value="1" maxlength="7" surplus="6406" className="box" />
                                            <i className="z-set z-add1" id="num_add"></i>
                                        </div>
                                    </li>
                                    <li>人次</li>
                                </ul>        <p className="orange" id="pMsg"></p>        </div>        <div className="total-pay flex-box" id="divPayInfo">
                                <span><em className="gray3">余额支付</em>(￥<i>0.00</i>)</span>
                                <span className="orange">余额不足</span>        </div>    </div>
                        <div className="m-goods-pay">
                            <a id="btnConfirmBuy" href="/ProductPay">使用其它方式支付</a>
                            <span className="gray6" id="p_buynext"><i className="z-set"></i>如被抢光自动参与最新一云</span>
                        </div>	<div className="dialog-close" id="btnClose"></div></div></div>
            </div>
        )

    }
}