import React,{Component} from "react";
import "./Header.css"

class Header extends Component{
    render(){
        return(
            <section className="header">
                <div className="header-div">
                    <div className="header-top">
                        <div onClick={this.props.returnMain} className="logo-click"><img className="logo" alt="logo" src="./src/logo.png" ></img></div>
                        <div className="search-bar">
                            <input className="bar" placeholder="Buscar productos, marcas y más.."></input>
                            <div className="lupa"><div className="lupa-div"><img alt="search" src="./src/lupa.jpg"></img></div></div>
                        </div>
                        <img alt="disneyplus" src="./src/disney.webp" className="disneyplus"></img>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">
                            <div className="location">
                                <img src="./src/map.jpg"></img>
                                <div className="where"><p>Enviar a Agustin</p><p className="strong">Av. Libertador 130</p></div>
                            </div>
                            <nav><p>Categorias</p><p>Ofertas</p><p>Historial</p><p>Supermercado</p><p>Moda</p><p>Vender</p><p>Ayuda</p></nav>
                        </div>
                        <div className="header-bottom-right"></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Header;