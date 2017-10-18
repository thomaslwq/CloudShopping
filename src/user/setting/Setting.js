import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"


export default class Setting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="g-acc-bg" >

                <div className="m-block-header" id="div-header">
                    <strong id="m-title">设置</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>


                <div>
                    <div className="sub_nav">
                        <a href="/personalInfo">个人资料<i></i></a>
                        <a href="/safeSetting">安全设置<i></i></a>
                        <a href="/share" className="mt10">分享赚钱<i></i></a>
                    </div>

                    <div className="sign-out">
                        <a id="btnUnbind" href="javascript:;" className="orangeBtn loginBtn">退出登录</a>
                    </div>
                </div>


            </div>

        );
    }
}

