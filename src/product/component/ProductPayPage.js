import React, { Component } from "react"

export default class ProductPayPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
       return  (
            <div className="g-acc-bg" >

                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">结算支付</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div>
                    <div className="g-pay-lst">
                        <ul>

                            <li>
                                <a href="/v40/product/12535342.do">
                                    <span>
                                        <img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170609111117038.png" border="0" alt="" />
                                    </span>
                                    <dl>
                                        <dt>

                                            (第74云)美图（Meitu）M8（MP1603）64GB 全网通 4G手机
                                    </dt>
                                        <dd><em>1</em>人次/<em>￥1.00</em></dd>
                                    </dl>
                                </a>
                            </li>



                        </ul>
                        <div id="divMore">

                        </div>
                        <p className="gray9">总需支付金额：<em className="orange"><i>￥</i>1.00</em></p>
                    </div>

                    <div className="other_pay marginB">


                        <a href="javascript:;"><i></i>福分抵扣：<span className="gray9">(可用福分20)</span><em className="orange fr"></em></a>
                        <a href="javascript:;"><i></i>余额支付：<span className="gray9">(余额￥0.00)</span><em className="orange fr"></em></a>
                        <a href="javascript:;" className="wzf checked"><b className="z-set"></b>第三方支付<em className="orange fr"><span className="colorbbb">需要支付&nbsp;</span><b>￥</b>1.00</em></a>
                        <div className="net-pay" style={{"display": "block"}}>
                            <a href="javascript:;" className="checked" id="jdPay">京东支付<b className="z-set"></b></a>
                        </div>
                    </div>
                    <div className="g-Total-bt">
                        <dd><a id="btnPay" href="javascript:;" className="orangeBtn fr w_account">立即支付</a></dd>
                    </div>

                </div>


            </div>
        )
    }
}