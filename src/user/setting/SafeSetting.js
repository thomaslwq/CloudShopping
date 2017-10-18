import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"


export default class SafeSetting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header">
                    <strong id="m-title">安全设置</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <form method="post" action="SafeSettings.do?para1=" id="ctl00">


                    <div className="h5-1yyg-v11">
                        <section>
                            <div className="security-con clearfix">
                                <ul>
                                    <li>
                                        <a href="LoginPwdUpdate.do"><span><b className="member-icon"></b>登录密码</span><em>修改<i className="z-arrow"></i></em></a>
                                    </li>
                                    <li>
                                        <a href="PayPwdCheck.do"><span><b className="member-icon gth"></b>支付密码</span><em>未开启<i className="z-arrow"></i></em></a>
                                    </li>
                                    <li>
                                        <a id="a_smallpay" href="javascript:"><span><b className="member-icon gth"></b>小额免密码设置</span><em>未设置<i className="z-arrow"></i></em></a>
                                    </li>
                                    <li>
                                        <a href="MobileCheck.do"><span><b className="member-icon"></b>手机号绑定</span><em>18988****74<i className="z-arrow"></i></em></a>
                                    </li>
                                    <li>
                                        <a href="MobileCheck.do?type=1"><span><b className="member-icon gth"></b>邮箱绑定</span><em>未绑定<i className="z-arrow"></i></em></a>
                                    </li>
                                    <li>
                                        <a href="LoginRemindSet.do"><span><b className="member-icon gth"></b>登录保护</span><em>未开启<i className="z-arrow"></i></em></a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </form>

            </div>

        );
    }
}

