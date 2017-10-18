import React, { Component } from "react"
import MenuList from "../../home/component/MenuList"
export default class ProductShowOrder extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="g-acc-bg">
                <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                    <strong id="m-title">商品晒单</strong>
                    <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                    <a href="/" className="m-index-icon"><i className="m-public-icon"></i></a>
                </div>

                <div>
                    <input name="hidGoodsID" type="hidden" id="hidGoodsID" value="23559" />
                    <div className="g-statistics gray9" id="div_title" >已有<em className="gray6">26</em>位幸运用户晒单<span>总共<em className="orange">71</em>条评论</span></div>
                    <div className="g-goods-single">
                        <ul id="ul_list">


                            <li postid="390450"><p className="fl"><img src="https://img.1yyg.net/userpost/Small/20170330094014519.jpg" /></p><dl><dt><a href="/product/productShowOrderDetail" className="blue">云商品获得者中中大奖</a></dt><dd className="gray6">苹果电脑来了！</dd><dd className="gray9">期待已久的高大上电脑终于来了，短信来了激…</dd><dd className="colorbbb">03月30日 09:42</dd></dl></li>
                            <li postid="389605"><p className="fl"><img src="https://img.1yyg.net/userpost/Small/20170328180312717.jpg" /></p><dl><dt><a href="/product/productShowOrderDetail" className="blue">让我中辆汽车吧2B</a></dt><dd className="gray6">我想要很久的电脑终于有了</dd><dd className="gray9">再次感谢1元云购这个平台！感谢云友的填坑我…</dd><dd className="colorbbb">03月28日 18:03</dd></dl></li>
                            <li postid="389448"><p className="fl"><img src="https://img.1yyg.net/userpost/Small/20170327093156611.jpg" /></p><dl><dt><a href="/product/productShowOrderDetail" className="blue">梦醒Yg</a></dt><dd className="gray6">运气超好的</dd><dd className="gray9">我这应该是厚而积发吧，？？？？？？，我原…</dd><dd className="colorbbb">03月27日 16:27</dd></dl></li>
                            <li postid="388685"><p className="fl"><img src="https://img.1yyg.net/userpost/Small/20170324190806463.jpg" /></p><dl><dt><a href="/product/productShowOrderDetail" className="blue">每次都空空来点实际的</a></dt><dd className="gray6">喜中笔记本一台</dd><dd className="gray9">感谢云购，刚好笔记本电脑坏了，搬家正愁要…</dd><dd className="colorbbb">03月26日 23:53</dd></dl></li></ul>
                            <div id="divLoading" className="loading clearfix g-acc-bg" style={{"display": "none"}}><b></b>正在加载</div>
                    </div>
                </div>
            </div>
        )
    }
}