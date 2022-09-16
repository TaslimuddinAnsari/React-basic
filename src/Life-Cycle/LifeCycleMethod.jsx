import React from 'react';
import Counter from './Counter';
class LifeCycleMethod extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count:0
    };
}

increment() {
    this.setState({count: this.state.count+1})
}

componentDidMount() {
    console.log("componentDidMount:  When component render first time");
}
    render() {
        return (
            <div className='m-4'>
                {this.state.count}
               
               <Counter number={this.state.count}/>
               
               <button className='btn btn-primary m-4'
               onClick={() => {this.increment()}}
               >click Me</button> 
            </div>
        );
    }
}


export default LifeCycleMethod;