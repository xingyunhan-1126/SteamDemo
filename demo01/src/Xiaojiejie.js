import React,{Component,Fragment} from 'react'
import XiaojiejieItem from './xiaojiejieItem'


class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:['fuwu1','fuwu2']
        }
    }
    render(){
        return(

        //返回的是一个 React 元素
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addItem.bind(this)}>增加服务</button>
                </div>
                <ul>   
                {this.state.list.map((item,index)=>{return(
                    <div>
                    <XiaojiejieItem 
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    />
                    </div>

                    // <li onClick={this.deleteItem.bind(this,index)}>{item}</li>
                )})}
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        console.log(e.target.value)
        this.setState({
            inputValue : e.target.value
        }) 
    }
    addItem(){
        this.setState({
            list : [...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie