import React,{ Component } from 'react'
import { BrowserRouter as Router,Route,Link}
 from "react-router-dom"
/**
 * 首页分类
 */
export default class Classify extends Component{

    constructor( props ){
        super( props );
    }

    render(){
        return (
            <div>
                <div className="index-menu thin-bor-top thin-bor-bottom">
                    <ul className="menu-list">
                        <li>
                            <a  href="/product/productList" id="btnNew">
                                <i className="xinpin"></i>
                                <span className="title">新品</span>
                            </a>
                        </li>
                        <li>
                            <a href="/charger" id="btnRecharge">
                                <i className="chongzhi"></i>
                                <span className="title">充值</span>
                            </a>
                        </li>
                        <li>
                            <a href="/product/productList" id="btnLimitbuy">
                                <i className="xiangou"></i>
                                <span className="title">限购</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" id="btnDownApp">
                                <i className="xiazai"></i>
                                <span className="title">下载APP</span>
                            </a>
                        </li>
                        <li>
                            <a href="/product/productList" id="btnAllGoods">
                                <i className="fenlei"></i>
                                <span className="title">全部分类</span>
                            </a>
                        </li>
                    </ul>
                </div>

           
            </div>
        )

    }

    

}