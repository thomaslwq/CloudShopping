import React, { Component } from 'react';
import {
      BrowserRouter as Router,
      Route,
      Link
} from "react-router-dom"
import Header from "./component/Header"
import FocusMap from "./component/FocusMap"
import Classify from "./component/Classify"
import Navigation from "./component/Navigation"

import MenuList from "./component/MenuList"


class Home extends Component {
  constructor( props ){
    super( props );
  }
  render() {
    return (
      <Router>
            <div className="m-1yyg-body">
                <div className="m-1yyg-content">
                    {/*首页顶部*/}
                    <Header/>
                    {/*焦点图*/}
                    <FocusMap/>
                    {/*<!--分类-->*/}
                    <Classify/>
                    {/*<!--导航-->*/}
                    <Navigation/>
                    {/*<!--菜单-->*/}
                    <MenuList/>
                </div>
            </div>
        </Router>
            );
  }
}
export default Home;
