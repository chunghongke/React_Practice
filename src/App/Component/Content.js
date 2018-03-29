import React, { Component } from 'react';

class Content extends Component {
    render(){
        // console.log(this.props);
        // const data = this.props.data || []
      return (
        <div id={this.props.data.name}>
            <h3>
                <input type="radio" checked={this.props.check} onChange={()=>this.props.onMenuClick(this.props.No)}                
                /> 
                {this.props.No+1} 號餐                      
            </h3>            
                餐點: <b>{this.props.data.name}</b> , 
                價格: <b>{this.props.data.price}</b> 元,
                烹調時間:<b> {this.props.data.time}</b> 分鐘            
        </div>
      )
    }
  }
  export default Content;