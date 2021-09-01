import React, {Component} from 'react';
import './card.css';

class Card extends Component {

    render(){

        return(
                <div className="tarjeta-wrap">
                    <div className="tarjeta">
                        <div className="adelante">
                            <img src="/assets/products/guitars/guitarra1.jpg" />
                        </div>
                        <div className="atras">
                            <p>Lorem ipsum dolor sit amet, consecutor adispsicing elit. Ipsa ex velit beatae. Illum,
                                suscipt, aspernatur
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card;