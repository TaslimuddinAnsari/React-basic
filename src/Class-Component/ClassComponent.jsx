import React from "react"; 

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true, number:1 };
      }

      // state = {
      //   change: true,
      //   num:0
      // }

      componentDidMount(){
        console.log("componentDidMount");
        this.state.number = 2+1;
        console.log("number : ", this.state.number);
        this.setState();
      }
  render() {
    return (
        <div className="m-4">
        <button className="btn btn-primary m-4"
          onClick={() => {
            this.setState({ change: !this.state.change, number: this.state.number+1 });
          }}
        >
          Click Here!
        </button>
        {this.state.change ? (
          <h1>Welcome to GeeksforGeeks</h1>
        ) : (
          <h1>A Computer Science Portal for Geeks</h1>
        )}
        <h2>Number: {this.state.number}</h2>
      </div>
    )
  }
}
 
export default ClassComponent;