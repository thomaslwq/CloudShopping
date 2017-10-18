import React, { Component } from 'react'

/**
 * 忘记密码
 */
export default class ForgetPassword extends Component {

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
                                <input type="text" id="username" placeholder="请输入您的手机号/邮箱" value="" />
                            </li>
                            <li><a id="findPasswordNextBtn" href="javascript:void(0);" className="orangeBtn">下一步</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        )

    }
}