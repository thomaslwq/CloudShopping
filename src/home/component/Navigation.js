import React,{ Component } from 'react'
import AboutToBeAnnouncedGoods from "./AboutToBeAnnouncedGoods"
import PopularityGoods from "./PopularityGoods"
import NewestGoods from "./NewestGoods"
import MostValueGoods from "./MostValueGoods"
import {
      BrowserRouter as Router,
      Route,
      Link
} from "react-router-dom"
/**
 * 首页导航
 */
export default class Navigation extends Component{

    constructor( props ){
        super( props );
        let that = this;
        that.state = {
            showAboutToBeAnnounced:true,
            showPopularity:false,
            showNewest:false,
            showMostValue:false,

        }

    }
    showAboutToBeAnnounced(){
        let that = this;
        that.setState({
            showAboutToBeAnnounced:true,
            showPopularity:false,
            showNewest:false,
            showMostValue:false
        });

    }
    showPopularity(){
        let that = this;
        that.setState({
            showAboutToBeAnnounced:false,
            showPopularity:true,
            showNewest:false,
            showMostValue:false
        });

    }
    showNewest(){
        let that = this;
        that.setState({
            showAboutToBeAnnounced:false,
            showPopularity:false,
            showNewest:true,
            showMostValue:false
        });

    }
    showMostValue(){
        let that = this;
        that.setState({
            showAboutToBeAnnounced:false,
            showPopularity:false,
            showNewest:false,
            showMostValue:true
        });

    }
    render(){
        let that = this;
        return (
            <div>
                <div>
                    <nav  className="nav-wrapper">
                        <div className="nav-inner">
                            <ul  className="nav-list clearfix">
                                <li  onClick={that.showAboutToBeAnnounced.bind(that)} className={that.state.showAboutToBeAnnounced?"current":""}><Link to="/"><span>即将揭晓</span></Link></li>
                                <li  onClick={that.showPopularity.bind(that)} className={that.state.showPopularity?"current":""}><Link to="/index/popularityGoods"><span>人气</span></Link></li>
                                <li  onClick={that.showNewest.bind(that)} className={that.state.showNewest? "current":""}><Link to="/index/newestGoods"><span>最新</span></Link></li>
                                <li  onClick={that.showMostValue.bind(that) }className={that.state.showMostValue ?"current":""}><Link to="/index/mostValueGoods"><span>价值</span></Link></li>
                            </ul>
                        </div>
                        <div className="select-btn thin-bor-left">
                            <span className="select-icon"></span>
                            <span><a  href="/search" style={{"color":"black","padding":"3px"}}>搜索</a></span>
                        </div>
                    </nav>
                </div>              
                <Route exact path="/" component={AboutToBeAnnouncedGoods}/>
                <Route path="/index/popularityGoods" component={PopularityGoods}/>
                <Route path="/index/newestGoods" component={NewestGoods}/>
                <Route path="/index/mostValueGoods" component={MostValueGoods}/>
            </div>
        )

    }

    

}