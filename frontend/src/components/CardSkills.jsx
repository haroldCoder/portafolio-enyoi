import { Component } from "react";
import LinearProgress from "@mui/joy/LinearProgress";

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
                    <img src={this.cover} alt="" className={`rounded-full xl:w-[5vw] xl:h-[10vh] hover:scale-110 max-md:w-[120px] max-md:h-[120px] ${this.name == 'SUPABASE' ? "bg-gray-700": null}`} />
                </div>
                <p className="text-2xl text-neutral-500 text-center">{this.name}</p>
                <div className="mt-4 h-5" id={this.name}>
                    {
                        this.state.ismouse ? <LinearProgress determinate color="neutral" variant="solid" value={this.progress} valueBuffer={100} /> : null
                    }
                </div>
            </div>       
        )
    }
}
export default Card;