import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import ProductHeader from "./component/ProductHeader"
import ProductSearch from "./component/ProductSearch"
import MenuList from "../home/component/MenuList"
export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="g-acc-bg m-site-box" fnav="0" style={{"zoom": "1"}}>

                {/*<!--触屏版内页头部-->*/}
                <ProductHeader/>
                <ProductSearch/>
                <MenuList/>
            </div>

                )
    }
}