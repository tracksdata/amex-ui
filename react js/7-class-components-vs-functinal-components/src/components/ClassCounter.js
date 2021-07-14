import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        console.log(">>>>> ClassCounter:: constructor");
    }
    state = {
        count: 0
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        console.log(">>>>> ClassCounter:: render");
        return (
            <div>
                <h1>Class Counter Component</h1>
                <button onClick={e => this.increment()}><h2>Increment - {this.state.count}</h2></button>
                <br />

            </div>
        );
    }
}
export default ClassCounter;