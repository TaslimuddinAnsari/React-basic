import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.number);
        console.log(this.props.number);
        if(prevProps.number !== this.props.number){
            console.log("Component Update")
        }

    }


    render() {
        return (
            <div className='m-4'>
                <h5>This is counter class</h5>
                {this.props.number}
            </div>
        )
        
    }
}


export default Counter;