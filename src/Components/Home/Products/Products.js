import React,{Component} from "react";
import "./Products.css"
import Items from "./Items/Items";
class Products extends Component{
    render(){
        return(
            <div className="div-products">
                <h2>{this.props.title}</h2>
                <div className="product-galery">
                    
                    {this.props.items.map((item,i)=>{
                    return(<div onClick={this.props.openArticle.bind(this,item)} className="div-items"><Items img={item.img} price={item.price} off={item.off} envio={item.envio} desc={item.desc} cuotas={item.cuotas}/></div>)})}
                </div>
            </div>
        )
    }
}
export default Products;

/*<Items img="mancuerna.webp" price="3899" off="9" envio="true" desc="Increible mancuerna de 20kg Excelente terminacion"/>
                    <Items img="mancuerna.webp" price="4500" envio="true" cuotas="true" desc="Mancuerna a rosca con 20kg fundidos"/>
                    <Items img="mancuerna.webp" price="1200" cuotas="true" desc="Mancuerna de fundicion 20kg gymShark"/>
                    <Items img="mancuerna.webp" price="5321" off="9" envio="true" cuotas="true" desc="Alta mancuerna perro"/>*/