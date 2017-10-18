import React,{ Component } from 'react'

/**
 * 商品列表
 */
export default class MenuList extends Component{

    constructor( props ){
        super( props );
    }

    render(){
        return (
            <div>
                <div className="footer clearfix">
                    <ul>
                        <li className="f_home"><a href="/" className="hover"><i></i>云购</a></li>
                        <li className="f_announced"><a href="/newestProduct"><i></i>最新揭晓</a></li>
                        <li className="f_single"><a href="/product/productShowOrder"><i></i>晒单</a></li>
                        <li className="f_car"><a href="/cart"><i></i>购物车</a></li>
                        <li className="f_personal"><a href="/userInfo"><i></i>我的云购</a></li>
                    </ul>
                </div>        
            </div>
        )

    }
}