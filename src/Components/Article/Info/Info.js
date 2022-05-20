import React,{Component} from "react";
import "./Info.css"

class Info extends Component{
    render(){
        return(
            <section className="info-div">
                <p className="selled">Nuevo | 1457 vendidos</p>
                <div className="title">
                    <h3>{this.props.item.name}</h3>
                    <div className="like">Like</div>
                </div>
                <div className="stars"><img alt="calificacion" src="./src/stars.jpg"></img><p className="selled">57 opiniones</p></div>
                <p className="orange">MÁS VENDIDO</p>
                <h3 className="article-price">${this.props.item.price}</h3>
                <h4 className="ahora12">en 12x de $ {Math.trunc(this.props.item.price/12)} pagando con Mercado Crédito</h4>
                <p className="blue mediospago">Ver los medios de pago</p>
                <div className="entrega"><img alt="entrega" src="./src/car.jpg"></img><p>Llega <strong>el lunes</strong> por $702</p></div>
                <div className="entrega"><img alt="entrega" src="./src/dev.jpg"></img><p className="green-text">Devolución gratis</p></div>
                <p className="selled">Tenés 30 días desde que lo recibís.</p>
                <p className="blue">Conocer más</p>


                <div className="btnComprar">Comprar Ahora</div>
            </section>
        )
    }
}
export default Info;