import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import moment from 'moment'
import {Button} from 'react-bootstrap';
import api from '../api.json'
import './main.css'


class Main extends Component {
    constructor(props){
        super(props)
        console.log(props)
        
        this.state = {
            button : ['All','Year','Month'],
            currentButton: 'All',
            _sale: null,
            _original: null,
            data:{
                sale: null,
                original: null,
                datasets: [
                    {
                        label: 'Sale Price',
                        data: null,
                        borderColor: '#0074D9',
                        backgroundColor: 'rgba(0, 116, 217, 0.2)'
                    },
                    {
                        label: 'Original Price',
                        data: null,
                        borderColor: 'rgba(0,192,192,0.2)',
                    }
                ]
            },
            chart: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Total Price (USD)'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 20
                            }
                        }
                    ],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                        }
                    }]
                }
            }
    
        }
    }


    update = (event)=>{
        var buttonValue = event.target.innerHTML;
        if(buttonValue === this.state.currentButton) return
        let momentFilter
        if (buttonValue === 'Year'){
            momentFilter = moment().subtract(1, 'years')
        } else if (buttonValue === 'Month'){
            momentFilter = moment().subtract(1, 'months')
        }
        let saleData = this.state._sale
        let originalData = this.state._original
        if(typeof momentFilter !== 'undefined') {
            saleData = saleData.filter(item => {
                return item.x > momentFilter
            })
            console.log("jinru")
            originalData = this.state._original.filter(item => {
                return item.x > momentFilter
            })
        }
        console.log(this.props.sale)
        
        this.setState({
            //_sale:salePrice,
            currentButton:buttonValue,
            data : {
                // sale: saleData,
                // original: originalData,
                datasets: [
                    {
                        label: 'Sale Price',
                        data: saleData,
                        borderColor: '#0074D9',
                        backgroundColor: 'rgba(0, 116, 217, 0.2)'
                    },
                    {
                        label: 'Original Price',
                        data: originalData,
                        borderColor: 'rgba(0,192,192,0.2)',
                    }
                ]
            }
        })
        console.log("#",this.state)

    }
    setSale = ()=>{
        return this.props.data.map(item =>{
            return {
                x: moment(item.created_at),
                y: parseFloat(item.sale.replace(',', ''))
            }
        })
    }
    setOri = ()=>{
        return this.props.data.map(item =>{
            return {
                x: moment(item.created_at),
                y: parseFloat(item.original.replace(',', ''))
            }
        })

    }
    
    componentWillReceiveProps(){
        console.log('@',this)
        if(this.props.data !== null){
            console.log("state change")
            this.setState({
                _sale: this.setSale(),
                _original: this.setOri(),
                data:{
                    sale: this.setSale(),
                    original: this.setOri(),
                    datasets: [
                        {
                            label: 'Sale Price',
                            data: this.setSale(),
                            borderColor: '#0074D9',
                            backgroundColor: 'rgba(0, 116, 217, 0.2)'
                        },
                        {
                            label: 'Original Price',
                            data: this.setOri(),
                            borderColor: 'rgba(0,192,192,0.2)',
                        }
                    ]
                }
            })
        }
    }
    render() { 
        console.log("render")
        console.log(this.state)
        return (
            <div>
                {this.state.button.map((item)=>{
                    return(
                            
                            <span> <Button className="btn btn-light btn btn-outline-primary" key={item} onClick={(e)=>{this.update(e)}}>{item}</Button></span>
                        
                    )
                })}
                <Line data = {this.state.data} options = {this.state.options} />
            </div>
            
        );
    }

}
 
export default Main;