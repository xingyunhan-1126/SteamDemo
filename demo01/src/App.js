import React,{Component, useLayoutEffect} from 'react'
import reactDom from 'react-dom';
import axios from 'axios'
import Header from './header/header.js'
import data from './api.json'
import Main from './main/main'
import moment from 'moment'
class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            api:null
            };
    }
    
    callAPI() {
        axios.get("http://localhost:4000/data/api.json")
            .then((res) =>{
                // console.log(res.data);
                this.setState({
                    api: JSON.parse(JSON.stringify(res.data))
                })
                // console.log(this.state)
            })
            .then(res => this.setState({ apiResponse: res }));

    }
    
    componentDidMount() {
        this.callAPI();
    }


    render(){
        console.log('hello')
        return(
            <div>
                <p className="App-intro">{this.state.apiResponse}</p>
                <Header />
                <Main data={this.state.api}/>
            </div>
        
        )
    }
}

export default App;