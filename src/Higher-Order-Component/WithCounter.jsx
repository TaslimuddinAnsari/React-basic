import React from "react";

const WithCounter = (WrappedComponent,numberValue) =>{
    class NewComponent extends React.Component{

        constructor(){
            super();
            this.state = {
                count:0
            }
        }
    
        incrementCount = () =>{
            this.setState(prevState =>{
                return { count: prevState.count + numberValue}
            })
        }
        render() {
            console.log(this.props.userName)
            return (
                <WrappedComponent name="Taslim"
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}
                />
            )
        }
    }
    return NewComponent
}

export default WithCounter;