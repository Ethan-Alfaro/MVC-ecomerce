import { createContext } from 'react';

const ProductContext = createContext({
        name: null,
        description: null,
        price: null,
        stock: null,
        img: null
});

export default ProductContext;