import React from 'react';
import Home from './Home';

class GetSnapshotBeforeUpdate extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        data:0
    };
}

    render() {
        return (
            <div className='m-4'>
                <h5>GetSnapshotBeforeUpdate</h5>
                <Home data={this.state.data} />

                <button onClick={() =>{this.setState({data: this.state.data + 1 })}}>Click Me</button>
            </div>
        )
    }
}

export default GetSnapshotBeforeUpdate;