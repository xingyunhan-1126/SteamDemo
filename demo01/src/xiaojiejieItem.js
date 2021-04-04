import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li key={this.props.index+this.props.content} 
            onClick={this.handleClick}>
                {this.props.content}
            </li>
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.string,
    deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={

}

export default XiaojiejieItem;