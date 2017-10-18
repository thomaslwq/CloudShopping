import React,{ Component } from 'react'
import { queryIndexMostValueGoods } from "../IndexQueryService"

/**
 * 商品列表
 */
export default class MostValueGoods extends Component{

    constructor( props ){
        super( props );
        let that = this;
        let responseData = queryIndexMostValueGoods()||{};
        let goodsList = responseData['listItems']||[];
        that.state = {
            goodsList:goodsList
        }

    }
    

    render(){
        let that = this;
        return (
            <div>
                <div className="goods-wrap marginB"> 
                    {/*<ul  className="goods-list clearfix">
                        <li id="22817" codeid="12406209" goodsid="22817" codeperiod="11821">
                            <a href="javascript:;" className="g-pic">
                                <img name="goodsImg" src="https://img.1yyg.net/GoodsPic/pic-200-200/20151231113845465.jpg" width="136" height="136"/>
                                </a><p className="g-name">(第<em>11821</em>云)平安银行 平安金元宝 Au9999 200g</p>
                                <ins className="gray9">价值：￥65000.00</ins>
                                <div className="Progress-bar"><p className="u-progress"><span className="pgbar" style={{width: "98.28153846153846%;"}}>
                                    <span className="pging"></span></span></p></div><div className="btn-wrap" name="buyBox" limitbuy="0" surplus="1117" totalnum="65000" alreadybuy="63883">
                                        <a href="javascript:;" className="buy-btn" codeid="12406209">立即1元云购</a>
                                  <div className="gRate" codeid="12406209" canbuy="1117">
                                      <a href="javascript:;"><s></s></a></div>
                            </div>
                        </li>  
                        <li id="23787" codeid="11305428" goodsid="23787" codeperiod="1638">
                          <a href="javascript:;" className="g-pic">
                            <img name="goodsImg" src="https://img.1yyg.net/GoodsPic/pic-200-200/20170122181026208.jpg" width="136" height="136"/></a>
                            <p className="g-name">(第<em>1638</em>云)雅诗兰黛（Estee Lauder）肌透修护眼部精华霜 15ml</p>
                            <ins className="gray9">价值：￥490.00</ins><div className="Progress-bar">
                              <p className="u-progress">
                                <span className="pgbar" style={{width: "81.22448979591837%;"}}>
                                  <span className="pging"></span></span></p></div>
                                  <div className="btn-wrap" name="buyBox" limitbuy="0" surplus="92" totalnum="490" alreadybuy="398">
                                    <a href="javascript:;" className="buy-btn" codeid="11305428">立即1元云购</a>
                                    <div className="gRate" codeid="11305428" canbuy="92">
                                      <a href="javascript:;"><s></s></a></div></div>
                          </li>               
                    </ul>*/}
                    <ul  className="goods-list clearfix">
                      {
                          that.state.goodsList.map(function(data,index){
                              return (
                                <li id={data.goodID} codeid={data.codeID} goodsid={data.goodsID} codeperiod={data.codePeriod}>
                                    <a href="javascript:;" className="g-pic">
                                        <img name="goodsImg" src={"https://img.1yyg.net/GoodsPic/pic-200-200/"+data.goodsPic} width="136" height="136"/>
                                        </a><p className="g-name">(第<em>{data.codeSales}</em>{data.goodsSName}</p>
                                        <ins className="gray9">价值：￥{data.codePrice}</ins>
                                        <div className="Progress-bar"><p className="u-progress"><span className="pgbar" style={{width: data.codeSales/data.codeQuantity + "%"}}>
                                            <span className="pging"></span></span></p></div><div className="btn-wrap" name="buyBox" limitbuy={data.codeLimitBuy} surplus={data.codeQuantity-data.codeSales} totalnum={data.codeQuantity} alreadybuy={data.codeSales}>
                                                <a href="javascript:;" className="buy-btn" codeid={data.codeid}>立即1元云购</a>
                                        <div className="gRate" codeid={data.codeid} canbuy={data.codeQuantity-data.codeSales}>
                                            <a href="javascript:;"><s></s></a></div>
                                    </div>
                                </li>  
                              )
                          })
                      }
                    </ul>              

                    {/*<!--加载条 <div className="loading clearfix"><b></b>正在加载</div>-->*/}
                </div>  

           
            </div>
        )

    }

    

}