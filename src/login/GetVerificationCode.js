import React, { Component } from 'react'

/**
 * 忘记密码
 */
export default class GetVerificationCode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">找回密码</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div className="wrapper">
                    <div className="registerCon">
                        <ul>
                            <li>
                                <input type="text" placeholder="请输入您收到的验证码" id="receivedSN" maxlength="6" />
                                <span className="z-countdown" id="getVcCodeBtn">重新发送(<b id="timeCountdownB">14</b>)</span>
                            </li>
                            <li className="m-submit"><a id="submitSN" href="javascript:void(0);" className="orangeBtn">提交</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )

    }
}