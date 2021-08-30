import React,{ Component} from 'react';
import './shop.css';
import ProductCard from './productCard/card'

class Shop extends Component {
    render(){
        return(
            <div class="shop">
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>


            </div>
        );
    }
}


export default Shop;