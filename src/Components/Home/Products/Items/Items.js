import React,{Component} from "react";
import "./Items.css"

class Items extends Component{
    render(){
        return(
            <div>
               <img alt="product-img" src={`./src/${this.props.img}`} className="product-img"></img>
               <div className="product-info">
               <div className="price-div"><h3 className="price">${this.props.price}</h3> {this.props.off?<h4 className="green cuotas">{this.props.off}% OFF</h4>:null}</div>
               {this.props.cuotas?<h4 className="green cuotas">6x ${Math.trunc(this.props.price/6)} sin interés</h4>:null}
               {this.props.envio?<h4 className="green enviogratis">Envío gratis</h4>:null}
               </div>
               <div className="product-description">
                   <p className="desc">{this.props.desc}</p>
               </div>
            </div>
        )
    }
}
export default Items;