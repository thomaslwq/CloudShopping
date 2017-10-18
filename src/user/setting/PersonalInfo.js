import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"


export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div fnav="1" className="g-acc-bg">

                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" >
                    <strong id="m-title">个人资料</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>
                <div className="sub_nav">
                    <div className="link-wrapper">
                        <a href="membermodify.do?t=1"><em>昵称</em><i></i><span className="fr">USER.1016069267</span></a>
                    </div>
                    <div className="link-wrapper">
                        <a href="javascript:;"><em>性别</em><i></i><span className="fr">保密</span><select id="selSex" className="sex"><option value="2">男</option><option value="1">女</option><option value="3">保密</option></select></a>
                        <a href="javascript:;"><em>生日</em><strong>一年之内只能修改一次</strong><i></i><span className="fr"></span><input id="dateBirth" type="date" value="" min="1952-01-01" max="2012-06-15" className="date" /></a>
                        <a href="membermodify.do?t=4"><em>电话</em><strong>备用联系信息不作公开</strong><i></i><span className="fr"></span></a>
                    </div>
                    <div className="link-wrapper">
                        <a href="membermodify.do?t=5"><em>现居地</em><i></i><span className="fr"></span></a>
                        <a href="membermodify.do?t=6"><em>家乡</em><i></i><span className="fr"></span></a>
                    </div>
                    <div className="link-wrapper">
                        <a href="membermodify.do?t=7" className="underwrite"><em>个性签名</em><i></i><span></span></a>
                    </div>
                </div>

            </div>

        );
    }
}

