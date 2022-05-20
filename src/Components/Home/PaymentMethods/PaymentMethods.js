import React,{Component} from "react";
import "./PaymentMethods.css"

class PaymentMethods extends Component{
    render(){
        return(
         
                <div className="home-paying-div">
                        <div className="paying-item">
                            <img alt="credit-card-icon" src="./src/credit-card.svg"></img>
                            <div><p>Tarjeta de crédito</p><p className="clickable">Ver promociones bancarias</p></div>
                        </div>

                        <div className="paying-item">
                            <img alt="credit-card-icon" src="./src/credit-card.svg"></img>
                            <div><p>Tarjeta de débito</p><p className="clickable">Ver más</p></div>
                        </div>

                        <div className="paying-item">
                            <img alt="credit-card-icon" src="./src/credit-card.svg"></img>
                            <div><p>Cuotas sin tarjeta</p><p className="clickable">Concé Mercado Crédito</p></div>
                        </div>

                        <div className="paying-item">
                            <img alt="credit-card-icon" src="./src/credit-card.svg"></img>
                            <div><p>Efectivo</p><p className="clickable">Ver más</p></div>
                        </div>
                    </div>

        )
    }
}
export default PaymentMethods;