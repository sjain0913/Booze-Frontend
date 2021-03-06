import React, { Component } from 'react';
import './styles/Home.css';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className = "home">
                <div>
                    <Helmet>
                        <title>Booze App</title>
                    </Helmet>
                </div>
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