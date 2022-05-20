import React,{Component} from "react";
import "./Home.css"
import Carrousel from "./Carrousel/Carrousel";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import Products from "./Products/Products";

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            ultimos:[{img:"mancuerna.webp", price:"3899" ,off:"9" ,envio:"true", desc:"Increible mancuerna de 20kg Excelente terminacion",name:"Mancuerna 20kg"},
            {img: "mancuerna.webp", price:"4500" ,envio:"true" , desc:"Mancuerna a rosca con 20kg fundidos",name:"Mancuerna 20kg a rosca"},
            {img:"mancuerna.webp", price:"1200", cuotas:"true" ,desc:"Mancuerna de 30kg",name:"Mancuerna 30kg"},
            {img:"mancuerna.webp" ,price:"5321", off:"9", envio:"true", cuotas:"true", desc:"Mancuerna de 40kg",name:"Mancuerna 40kg"}],

            ofertas:[{img:"telefono.webp", price:"44269" ,off:"5" ,envio:"true", desc:"Telefono movil de alta velocidad 5G",name:"Celular Motorola"},
            {img: "heladera.webp", price:"279899" ,off:"6", desc:"La heladera mas modena del mercado. Tecnologia nofrost",name:"Heladera Samsung"},
            {img:"tele.webp", price:"1200",off:"9" , envio:"true",desc:"50 pulgadas imagen 4K",name:"Televisor 50 pulgadas"},
            {img:"bici.webp" ,price:"31827", off:"31", envio:"true", cuotas:"true", desc:"Bicicleta rodado 11. Incluye KIT de seguridad de regalo",name:"Bicicleta Rodado 11"}]


        }
    }
    render(){
        return(
            <section className="home">
                <Carrousel/>
                <div className="home-padding-div">
                    <PaymentMethods/>
                    <Products title="Basado en tu última visita" items={this.state.ultimos} openArticle={this.props.openArticle}/>
                    <Products title="Ofertas" items={this.state.ofertas} openArticle={this.props.openArticle}/>
                </div>
            </section>
        )
    }
}
export default Home;