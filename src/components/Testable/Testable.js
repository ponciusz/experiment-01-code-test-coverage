import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Testable extends Component{

    constructor(){
        super();
        this.state = {
            status: false
        }
    }

    render() {
        return(
            <div>
                <h3>Hello</h3>
                
                <p>Currently status is {this.state.status ? 'ON' : 'OFF'}</p>

                <button className="toggleState" onClick={() => {this.setState({status: !this.state.status})}}>Toggle status</button>
            </div>
        )
    }

}

export default Testable