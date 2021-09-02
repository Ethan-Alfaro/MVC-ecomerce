import React,{ Component} from "react";
import './productCart.css';
import Product from './product/product.js';
import ProductDetails from "./productDetails/producDetails.js";
class ProductCart extends Component {

    render(){

        return(
            <div className="product-cart">
                <Product/>
                <ProductDetails/>
            </div>
        )
    }
}

export default ProductCart; 