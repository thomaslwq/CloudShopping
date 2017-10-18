import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"


export default class MyGoodLuck extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
<div>
    
{/*<!--触屏版内页头部-->*/}
<div class="m-block-header" id="div-header" >
    <strong id="m-title">我的福分</strong>
    <a href="javascript:history.back();" class="m-back-arrow"><i class="m-public-icon"></i></a>
    <a href="/" class="m-index-icon"><i class="m-public-icon"></i></a>
</div>


    <div id="wrapper" class="wrapper">
        <div class="blessings-title colorbbb">
            <p class="gray9">可用<em class="orange">20</em>福分</p>100福分=1元，支付时可抵现金0.00元
        </div>
        <div class="blessings-con">
            <dl id="dlList">
                <dt><i class="gray6">福分明细</i><b></b></dt>
            <dd class="colorbbb"><span class="gray6">注册获得福分</span>2017.06.10 00:04:31<em class="green">+20</em></dd></dl>
            {/*<div class="loading clearfix g-acc-bg" style="display: none;"><b></b>正在加载</div>*/}
        </div>
        
    <div class="g-suggest clearfix">请使用电脑访问www.1yyg.com查看更多</div></div>


</div>

        );
    }
}

