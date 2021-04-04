import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import {BrowserRouter, Link,Route} from 'react-router-dom'
import './header.css'
import English from './english'
import Chinese from './chinese'
class Header extends Component {
    render() { 
        return (
            
            <div id="container">

                <div id = "box">
                    <h1>Buy All Games</h1>
                    <BrowserRouter>
                    <div id="link-box">
                    <Link className="list-group-item" to="en">EN</Link>
                    <Link className="list-group-item" to="cn">中文</Link>
                    </div>
                    <Route path='/en' component={English}/>
                    <Route path='/cn' component={Chinese}/>
                    </BrowserRouter>

            </div>
            </div>

        )
        
    }
}
 
export default Header;