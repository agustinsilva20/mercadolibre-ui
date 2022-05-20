import React,{Component} from "react";
import "./Article.css"
import Info from "./Info/Info";

class Article extends Component{
    render(){
        return(
            <section className="article">
                <div className="div-article">
                    <p><strong>Tambien pueden interesarte: </strong> Categoria1, categoria2, ect</p>
                    <div className="categories"><p>Volver al listado</p><p>|</p><p className="blue">Gimnasio</p></div>
                    <div className="article-product-div">
                        <div className="article-product-left">
                            <div className="picture-div"><img alt="image" src={`./src/${this.props.item.img}`}className="productImg"></img></div>
                            <div className="descripcionn">
                                <h3>Descripción</h3>
                                <p>{this.props.item.desc}</p>
                            </div>
                        </div>

                        <div className="article-product-right">
                            <Info item={this.props.item}/>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Article;