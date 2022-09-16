import React, { Component } from "react";
import Nav from './Nav'
class ComponentLife extends Component{
    constructor(){
        super();
        console.log("Constructure");
        this.state= {
            show:true
        }
    }
    componentDidMount() {
        console.log("componentDidMount") 
    }
    render(){
        console.log("Render")
        return(
            <div className="m-4">
                <h1>Life Cycle Method</h1>
                {
                    this.state.show ? 
                    <Nav/>
                    : ''
                }
                <button 
                onClick={()=>{this.setState({show: ! this.state.show})}}>
                Toggle Nav</button>
            </div>
        )
    }
}
export default ComponentLife;