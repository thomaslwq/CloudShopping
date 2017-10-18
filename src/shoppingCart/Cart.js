import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import MenuList from "../home/component/MenuList"

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="loadingPicBlock" className="g-acc-bg" style={{"zoom": "1"}}>
                <input name="hidUserID" type="hidden" id="hidUserID" value="15828634" />
                <div>
                    {/*<!--首页头部-->*/}
                    <div className="m-block-header" ><a href="/" className="m-public-icon m-1yyg-icon"></a></div>
                    {/*<!--首页头部 end-->*/}
                    <div className="g-Cart-list marginB">
                        <ul id="cartBody"><li><a className="fl u-Cart-img" href="/v40/product/12530690.do"><img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170215175926265.jpg" border="0" alt="" /></a><div className="u-Cart-r">
                            <a href="/v40/product/12530690.do" className="gray6">(第2880云)苹果（Apple）AirPods 无线耳机</a>
                            <span className="gray9"><em>剩余1484人次</em></span><div className="num-opt">
                                <em className="num-mius dis"><i></i></em>
                                <input id="txtNum12530690" name="num" maxlength="6" type="text" value="1" codeid="12530690" />
                                <em className="num-add"><i></i></em></div><a href="javascript:;" name="delLink" cid="12530690" className="z-del"><s></s></a></div>
                        </li>
                        </ul>
                        <div id="divNone" className="empty" style={{"display":"none"}}><s></s>购物车为空</div>
                    </div>

                    <div id="mycartpay" className="g-Total-bt g-car-new" >
                        <div className="g-auto-next">
                            <div className="auto-next-inner">
                                <i id="i_buynext" className="circle checked"></i><span>如被抢光自动参与最新一云</span>
                                <a href="javascript:;" className="ques-btn"><i className="ques"></i></a>
                            </div>
                        </div>
                        <dl>
                            <dt className="gray6">
                                <p className="money-total">合计<em className="orange"><span>￥</span>24.00</em></p>
                                <p className="pro-total">共<em>20</em>个商品</p>
                            </dt>
                            <dd>
                                <a href="javascript:;" id="a_payment" className="orangeBtn w_account">去结算</a>
                            </dd>
                        </dl>
                    </div>


                    <MenuList />
                </div>
            </div>

        );
    }
}

