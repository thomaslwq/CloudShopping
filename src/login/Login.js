import React, { Component } from 'react'

/**
 * 登录界面
 */
export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div >

                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" style={{ "display": "block;" }}>
                    <strong id="m-title">登录</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>


                <div className="wrapper">
                    <div className="registerCon">
                        <div className="binSuccess5">
                            <ul>
                                <li className="accAndPwd">
                                    <dl>
                                        <div className="txtAccount">
                                            <input id="txtAccount" type="text" placeholder="请输入您的手机号码/邮箱" /><i></i>
                                        </div>
                                        <cite className="passport_set" ></cite>
                                    </dl>
                                    <dl>
                                        <input id="txtPassword" type="password" placeholder="密码" value="" maxlength="20" /><b></b>
                                    </dl>
                                </li>
                            </ul>
                            <a id="btnLogin" href="javascript:;" className="orangeBtn loginBtn">登录</a>
                        </div>
                        <div className="forget">
                            <a href="https://weixin.1yyg.com/v40/passport/FindPassword.do">忘记密码？</a><b></b><a href="https://weixin.1yyg.com/v40/passport/register.do?forward=https%3a%2f%2fweixin.1yyg.com%2fv40%2fmember%2frecharge.do">新用户注册</a>
                        </div>
                    </div>
                    <div className="oter_operation gray9" style={{ "display": "none" }}>

                        <p>登录1元云购账号后，可在微信进行以下操作：</p>
                        1、查看您的云购记录、获得商品信息、余额等<br />
                        2、随时掌握最新晒单、最新揭晓动态信息
                           </div>
                </div>
            </div>
        )

    }
}