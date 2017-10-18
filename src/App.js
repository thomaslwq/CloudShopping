import React, { Component } from 'react';
import {
      BrowserRouter as Router,
      Route,
      Link
} from "react-router-dom"
import Home from "./home/Home"
import ProductList from "./product/ProductList"
import ProductDetailClose from "./product/component/ProductDetailClose"
import ProductShowOrder from "./product/component/ProductShowOrder"
import ProductShowOrderDetail from "./product/component/ProductShowOrderDetail"
import Login from "./login/Login"
import ForgetPassword from "./login/ForgetPassword"
import GetVerificationCode from "./login/GetVerificationCode"
import Charger from "./user/Charger"
import ChargerByCard from "./user/ChargerByCard"
import ProductPaymentModal from "./product/component/ProductPaymentModal"
import NewestProduct from "./newest/NewestProduct"
import Cart from "./shoppingCart/Cart"
import UserInfo from "./user/UserInfo"
import Search from "./product/Search"
import ProductPayPage from "./product/component/ProductPayPage"
import Setting from "./user/setting/Setting"
import PersonalInfo from "./user/setting/PersonalInfo"
import SafeSetting from "./user/setting/SafeSetting"
import Share from "./user/setting/Share"
import MyGoodLuck from "./user/setting/MyGoodLuck"

class App extends Component {
  constructor( props ){
    super( props );
  }
  render() {
    return (
      <Router>
         {/*云购主页*/}
         <div>
            <Route exact path="/" component={Home}/>
            <Route  path="/product/productList" component={ProductList}/>
            <Route  path="/product/productDetailClose" component={ProductDetailClose}/>        
            <Route  path="/product/productShowOrder" component={ProductShowOrder}/> 
            <Route  path="/product/productShowOrderDetail" component={ProductShowOrderDetail}/> 
            <Route  path="/login" component={Login}/> 
            <Route  path="/forgetPassword" component={ForgetPassword}/>
            <Route  path="/getVerificationCode" component={GetVerificationCode}/> 
            <Route  path="/charger" component={Charger}/>    
            <Route  path="/chargerByCard" component={ChargerByCard}/>    
            <Route path="/productPaymentModal" component={ProductPaymentModal}/>
            <Route path="/newestProduct" component={NewestProduct}/>
            <Route path="/cart" component={Cart}/>       
            <Route path="/userInfo" component={UserInfo}/>    
            <Route path="/Search" component={Search}/>
            <Route path="/ProductPay" component={ProductPayPage}/>
            <Route path="/userInfoSetting" component={Setting}/>
            <Route path="/personalInfo" component={PersonalInfo}/>
            <Route path="/safeSetting" component={SafeSetting}/>
            <Route path="/share" component={Share}/>   
            <Route path="/myGoodLuck" component={MyGoodLuck}/>     
          </div>
      </Router>
            );
  }
}
export default App;
