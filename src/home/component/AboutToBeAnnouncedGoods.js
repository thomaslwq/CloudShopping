import React,{ Component } from 'react'
import { queryIndexAboutToAnnouncedGoods } from "../IndexQueryService"
import { Modal,Button } from "antd"
import ProductPaymentModal from "../../product/component/ProductPaymentModal"

/**
 * 商品列表
 */
export default class AboutToBeAnnouncedGoods extends Component{

    constructor( props ){
        super( props );
        let that = this;
        let responseData = queryIndexAboutToAnnouncedGoods()||{};
        let goodsList = responseData['listItems']||[];
        that.state = {
            goodsList:goodsList,
            visible:false,
        }

    }
    
    showModal(){
        let that = this;
        that.setState({
            visible:true
        });
    }
    render(){
        let that = this;
        return (
            <div>
                <div className="goods-wrap marginB"> 

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
                                                <a href="javascript:;" onClick={that.showModal.bind(that)} className="buy-btn" codeid={data.codeid}>立即1元云购</a>
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
                                     
                  { that.state.visible ? <ProductPaymentModal/>:""} 
           
            </div>
        )

    }

    

}