import React,{ Component } from 'react'

/**
 * 首页头部
 */
export default class Header extends Component{

    constructor( props ){
        super( props );
        let that = this;
        that.state = {
            showAd:true,
            showWechat:true
        };
    }
    getInitialState(){
        debugger
        return {
            showAd:false,
            showWechat:false
        };
    }
    componentDidMount(){


    }
    componentDidUpdate(){

    }
    hideWechat(){
      let that = this;
      that.setState({
          showWechat:false,
      });
    }
    hideAd(){
        let that = this;
        that.setState({
            showAd:false
        });
    }

    render(){
        let that = this;
        return (
            <div>
                  {/*<!--首页头部-->*/}
            <div className="m-block-header" id="div-header" style={{"display": "block"}}>
                <strong id="m-title">一元云购</strong>
            </div>

                {/*<!--关注微信-->*/}
                    <div  className={ that.state.showWechat ? "app-icon-wrapper" :"hidden"} >
                        
                                <div className="app-icon">
                                    <a href="javascript:;" className="close-icon" onClick={that.hideWechat.bind(that)}>
                                        <i className="set-icon"></i>
                                    </a>
                                    <a href="javascript:;" className="info-icon">
                                        <i className="set-icon"></i>
                                        <div className="info">
                                            <p>点击关注1元云购官方微信^_^</p>
                                        </div>
                                    </a>
                                </div>
                    </div>
                    {/*<!--App 广告-->*/}
                    <div className={that.state.showAd ?"app-down":"hidden"}>
                        <div className="app-img">
                            <a href="javascript:;">
                                <img src="/css/images/app-down-new.jpg" alt=""/>
                            </a>
                        </div>
                        <a onClick={that.hideAd.bind(that)} href="javascript:;" className="app-down-close"><i className="icon"></i></a>
                    </div>            
            </div>
        )

    }

    

}