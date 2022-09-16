import React from "react";
import { Component } from "react";


class Nav extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render() {
        return(
            <h5 className="m-4">Navbar</h5>
        )
    }
}

export default Nav;