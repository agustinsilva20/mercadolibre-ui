import React,{Component} from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Article from "../Article/Article";

class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            showing:"home",
            item:""
        }
    }

    openArticle=(obj)=>{
        this.setState({showing:"article"})
        this.setState({item:obj})
    }

    returnMain=()=>{
        this.setState({showing:"home"})
    }
    
    

    render(){
        return(
            <div className="mercadolibre-div">
            <Header returnMain={this.returnMain}></Header>
            {this.state.showing==="home"?<Home openArticle={this.openArticle}/>:null}
            {this.state.showing==="article"?<Article item={this.state.item}/>:null}
            </div>
        )
    
    }
}
export default Main;