import React, { Component } from "react"
import MenuList from "../../home/component/MenuList"
export default class ProductShowOrderDetail extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/*<!--触屏版内页头部-->*/}
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">晒单详情</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>


                <div id="loadingPicBlock">

                    <div className="wx-show-pro">
                        {/*<!--晒单详情信息-->*/}

                        <div className="show-head">
                            <h1>苹果电脑来了！</h1>
                            <div className="show-user">
                                <a href="https://weixin.1yyg.com/v40/userpage/1011462011" className="photo">
                                    <img src="https://img.1yyg.net/userface/160/20170420083102428.jpg" alt="头像" /></a>
                                <a href="https://weixin.1yyg.com/v40/userpage/1011462011" className="name blue">云商品获得者中中大奖</a>
                                <p className="about">
                                    <span className="time">03月30日 09:42</span>
                                    <span className="read"><em>270</em>人阅读</span>
                                </p>
                            </div>
                            <span className="z-reward"><em>400</em></span>
                        </div>
                        <div className="show-info">
                            <a href="/v40/lottery/detail-11004301.do">
                                <div className="tail">
                                    <p>获得商品：(第478云)苹果（Apple）MacBook Pro 13.3英寸笔记本电脑</p>
                                    <p>本云参与：<em className="orange">2</em> 人次</p>
                                    <p>幸运云购码：<em className="orange">10009719</em></p>
                                    <p>揭晓时间：03月24日 15:50</p>
                                </div>
                            </a>
                            <div className="txt">
                                <p className="pro">期待已久的高大上电脑终于来了，短信来了激动万分，电脑到了更是激动不已。感谢。感谢？？。 云购平台真心不错。  有想买的商品不舍得花大钱去买。在这里花几块钱。说不定就给你惊喜！  这两块中的苹果电脑。高兴死了。 哈哈。    下个目标大汽车。 我感觉不远了。离我很近 哈哈？？</p>
                                <p><img src="https://img.1yyg.net/UserPost/Big/20170330094014519.jpg" border="0" alt="" /></p><p><img src="https://img.1yyg.net/UserPost/Big/20170330094044505.jpg" border="0" alt="" /></p><p>
                                    <img src="https://img.1yyg.net/UserPost/Big/20170330095004996.jpg" border="0" alt="" /></p>
                            </div>
                        </div>


                        {/*<!--人气推荐-->*/}
                        <div className="hot-recom thin-bor-bottom">
                            <div className="title thin-bor-bottom">人气推荐</div>
                            <div className="recom-list">
                                <ul id="ulRec">
                                    <li className="thin-bor-right" id="23600">	<a href="javascript:;">		<img src="https://img.1yyg.net/GoodsPic/pic-200-200/20161121182142548.jpg" />		<p className="goods-title gray6">(第355云)戴尔（DELL）XPS13-9360-1705 13.3英寸微边框笔记本电脑 </p>		<p className="goods-price gray9">价值：￥<span>9399.00</span></p>	</a>	<div className="Progress-bar">		<p className="u-progress">			<span className="pgbar" style={{"width": "21.363974890945844%;"}}>				<span className="pging"></span>			</span>		</p>	</div></li>
                                    <li className="thin-bor-right" id="24133">	<a href="javascript:;">		<img src="https://img.1yyg.net/GoodsPic/pic-200-200/20170502104832081.jpg" />		<p className="goods-title gray6">(第75云)华硕（ASUS）灵焕3 Pro 12.6英寸超轻薄二合一平板笔记本电脑 </p>		<p className="goods-price gray9">价值：￥<span>7599.00</span></p>	</a>	<div className="Progress-bar">		<p className="u-progress">			<span className="pgbar" style={{"width": "3.9215686274509802%;"}}>				<span className="pging"></span>			</span>		</p>	</div></li>
                                    <li className="thin-bor-right" id="23458">	<a href="javascript:;">		<img src="https://img.1yyg.net/GoodsPic/pic-200-200/20160908092215288.jpg" />		<p className="goods-title gray6">(第340108云)苹果（Apple）iPhone 7 Plus 128G版 4G手机 </p>		<p className="goods-price gray9">价值：￥<span>7030.00</span></p>	</a>	<div className="Progress-bar">		<p className="u-progress">			<span className="pgbar" style={{"width": "1%;"}}>				<span className="pging"></span>			</span>		</p>	</div></li>
                                </ul>
                            </div>
                        </div>

                        {/*<!--评论区-->*/}
                        <div className="wx-show-message">
                            <div className="mess-menu">
                                <span>评论(<em id="emReplyNum">1</em>)</span>
                            </div>
                            <div className="mess-wrapper">
                                <div id="replyList" className="mess-inner"><div className="mess-list"><a href="/v40/userpage/1013748446" className="photo"><img src="https://img.1yyg.net/userface/20170604093913167.jpg" alt="头像"/></a><p className="name"><a href="/v40/userpage/1013748446" className="blue">1yyg是亻叚的</a><span className="fr time">04月05日 13:32</span></p><p>这叫运气差啊！</p></div></div>
                                    <div className="loading clearfix" style={{"display":"none"}}><b></b>正在加载</div>
                                </div>
                            </div>
                            {/*<!--底部菜单-->*/}
                            <div className="mess-footer">
                                <ul className="clearfix">
                                    {/*<!--点击添加current, 变实心-->*/}
                                    <li id="liZan" style={{"width":"50%"}}>
                                        <a href="javascript:;">
                                            <span className="zan wx-new-icon"></span>
                                            <em>1</em>
                                            <img className="transparent-png" src="https://skin.1yyg.net/v40/weixin/post/images/xin-big.png?v=151030" style={{"display": "none", "position": "absolute", "left": "0", "width": "20px", "height": "18px"}} />
                                        </a>
                                    </li>
                                    <li id="liReply" style={{"width":"50%"}}>
                                        <a href="javascript:;">
                                            <span className="talk wx-new-icon"></span>
                                            <em>1</em>
                                        </a>
                                    </li>
                                    {/*<!--<li id="liShare">
                        <a href="javascript:;">
                            <span className="share wx-new-icon"></span>
                            <em>分享</em>
                        </a>
                    </li>-->*/}
                                </ul>
                            </div>
                            {/*<!--评论框-->*/}
                            <div className="s_comments" style={{"display": "none"}}>
                                <textarea id="comment">说点什么吧</textarea>
                                <span id="p_size">0/150</span>
                                <p><a href="javascript:;" id="a_cancel" className="cancelBtn fl" title="取消">取消</a><a id="a_sendok" href="javascript:;" className="orangeBtn fr" title="确定发表">确定发表</a></p>
                            </div>
                        </div>
                        <MenuList />
                    </div>
                </div>
                )
    }
}