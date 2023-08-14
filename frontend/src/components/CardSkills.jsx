import { Component } from "react";
import {createRoot} from "react-dom/client";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { LinearProgress } from "@mui/material";

class Card extends Component{ 
    name = ""
    cover = ""
    type = '';
    constructor(props){
        super(props);
        this.name = props.name;
        this.cover = props.cover;
        this.progress = props.progress;
        this.state = {
            ismouse: false,
        }
    }
    render(){
  
        return(
            <div className="card rounded-xl mx-3 mb-12 p-5 bg-transparent" onMouseOut={()=>{this.setState({ismouse: false})}} onMouseOver={()=>{this.setState({ismouse: true})}}>
                <div className="mb-5 p-2 pb-5 flex justify-center" style={{borderBottom: "2px solid #444"}}>
                    <img src={this.cover} alt="" className={`rounded-full xl:w-[5vw] xl:h-[10vh] max-md:w-[20vw] max-md:h-[15vw] ${this.name == 'SUPABASE' ? "bg-gray-700": null}`} />
                </div>
                <p className="text-2xl text-neutral-500 text-center">{this.name}</p>
                <div className="mt-4 h-5" id={this.name}>
                    {
                        this.state.ismouse ? <LinearProgress variant="buffer" value={this.progress} valueBuffer={100} /> : null
                    }
                </div>
            </div>       
        )
    }
}
export default Card;