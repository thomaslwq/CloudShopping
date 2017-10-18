import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import MenuList from "../home/component/MenuList"

export default class NewestProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div id="loadingPicBlock" fnav="1" className="g-acc-bg" >

                <div className="column-wrapper m-site-column">
                    <div className="column-inner">
                        {/*<!--首页头部-->*/}
                        <div className="m-block-header" ><a href="/" className="m-public-icon m-1yyg-icon"></a></div>
                        {/*<!--首页头部 end-->*/}
                        <div id="div_sort" className="g-announced-title gray9">
                            <span>
                                <a href="javascript:;" className="z-set fr"></a>
                                <span>全部分类</span>
                                <cite style={{"display": "none"}}><em></em></cite>
                            </span>
                            {/*<!--分类-->*/}
                            <div className="announced-sort" style={{"display": "none"}}>
                                <a href="javascript:;" className="orange" type="0">全部分类</a>
                                <a href="javascript:;" type="100">手机数码</a>
                                <a href="javascript:;" type="106">电脑办公</a>
                                <a href="javascript:;" type="104">家用电器</a>
                                <a href="javascript:;" type="2">化妆个护</a>
                                <a href="javascript:;" type="397">食品饮料</a>
                                <a href="javascript:;" type="213">家居家纺</a>
                                <a href="javascript:;" type="222">钟表首饰</a>
                                <a href="javascript:;" type="251">礼品箱包</a>
                                <a href="javascript:;" type="276">运动户外</a>
                                <a href="javascript:;" type="312">其他商品</a>
                                <a href="javascript:;" type="-1">&nbsp;</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!--分类筛选遮罩-->*/}
                <div className="weixin-mask" style={{"height": "18466px","display": "none"}}></div>
                <div className="marginB">
                 <div className="rev-con">
                        <ul className="rev-list" id="divLottery">
                            <li id="12614555">
                                <div className="pro-img"><img src="https://img.1yyg.net/goodspic/pic-200-200/20170602092922489.jpg" /></div>
                                <div className="pro-info">
                                    <h6 className="pro-title gray6">(第1006云) 盼盼 手撕面包 原味 1000g 整箱装</h6>
                                    <p className="gray9">价值：￥<em>36.00</em></p>		<p className="gray9">揭晓倒计时：</p>
                                    <div className="pro-state">			<div className="time-wrapper">
                                        <em>02</em>				<span>:</span>				<em>51</em>
                                        <span>:</span>				<em>
                                            <i>8</i><i>9</i>				</em>
                                    </div>		</div>	</div></li><li id="12462532">
                                <div className="pro-img"><img src="https://img.1yyg.net/goodspic/pic-200-200/20170605150704090.jpg" /></div>
                                <div className="pro-info">		<h6 className="pro-title gray6">(第241云) 乐扣乐扣（LOCK&amp;LOCK）缤纷弹跳盖马克保温杯 390ml</h6>
                                    <p className="gray9">价值：￥<em>149.00</em></p>		<p className="gray9">揭晓倒计时：</p>			<div className="pro-state">
                                        <div className="time-wrapper">				<em>02</em>				<span>:</span>				<em>50</em>
                                            <span>:</span>				<em>					<i>8</i><i>9</i>				</em>
                                        </div>		</div>	</div>
                            </li>
                        </ul>
                        <div id="divLoading" classNameName="loading clearfix g-acc-bg"><b></b>正在加载</div>
                    </div>
                </div>
                <MenuList/>
            </div>
        );
    }
}

