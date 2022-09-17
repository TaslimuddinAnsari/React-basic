import React from 'react';

class ShouldComponentUpdate extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count:0
    };
}
shouldComponentUpdate(){
    console.log("shouldComponentUpdate", this.state.count)
    if(this.state.count>5 && this.state.count<10){
        return true;
    }
    // return true;
}

    render() {
        return (
        <div className='m-4'>
            <h5>{this.state.count}</h5>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>
                Update Counter
            </button>
        </div>
        );
    }
}

export default ShouldComponentUpdate;