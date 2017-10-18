import React, { Component } from "react"

export default  class ProductHeader extends Component{

    constructor( props ){
        super(props)
    }
    render(){
        return(
            <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                <strong id="m-title">商品列表</strong>
                <a href="javascript:history.back();" className="m-back-arrow"><i className="m-public-icon"></i></a>
                <a href="http://weixin.1yyg.com/" className="m-index-icon"><i className="m-public-icon"></i></a>
            </div>
        )
    }
}