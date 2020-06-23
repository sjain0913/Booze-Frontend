import React, { Component } from 'react';
import './styles/Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className = "home">
                <div className = "center">
                    <hr></hr>
                    <br></br>
                    <p>App currently in development!</p>
                    
                    <Link to="/api">Link to Booze API</Link>
                </div>
            </div>
        )
    }
}
export default Home;