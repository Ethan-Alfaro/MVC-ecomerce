import React, { useEffect, useState } from "react";
import './products.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Products() {
  const [productsArray, setProductsArray] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/products/get-products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductsArray(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
      <div className="wrap">
      <div className={classes.root}>
      <Grid container spacing={3}>

        {productsArray.map((product) => (
          <Grid item sm={12} md={6} lg={4}>
                <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                        {/* <img src={`./assets/products/guitars/${product.img}`} /> */}
                        <p>{product.img}</p>
                    </div>
                    <div className="atras">
                       <div className='atras-title'>
                         <p>{product.name}</p> 
                       </div>
                       <div className='atras-description'>
                       <p>-Description: </p> <br/>
                       <p>{product.description}</p> 
                       <br/>
                       <p>Price: {product.price}</p> 
                       
                       </div>
                       <div className='atras-buy'>
                          <a href="" className="buyButton">
                            <span id='span1'></span>
                            <span id='span2'></span>
                            <span id='span3'></span>
                            <span id='span4'></span>
                            Buy Now!
                          </a>
                       </div>
                    </div>
                </div>
            </div>
            </Grid>
      ))}
        
      </Grid>
      </div>
      </div>
    
    

  );
}

export default Products;
