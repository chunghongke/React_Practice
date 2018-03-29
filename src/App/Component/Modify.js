import React, { Component } from 'react';

class Modify extends Component {
    constructor(){
        super();
        this.state = {
          obj : {name:"", price:0, time:0},
          checked : 0
        }; 
        // this.addprice = this.addprice.bind(this);       
      };  
    add = event => {
        const { obj } = this.state;
        const newValue = event.target.value === ''?'1':event.target.value;
        const Key = event.target.name;
        obj[Key] = newValue;
        this.setState({ obj })        
    }

    render(){
        const { name } = this.props;
        const { price, time} = this.props.data;  
        // console.log(this.state);      
        return (
            <div>
                <label>
                    餐點名稱 : <b>{name}</b>
                    <br/>
                    <br/>
                </label>
                <label>
                    修改價格 : <input name="price" type="text" value={price}
                        onChange = {e=>this.props.onPriceChange(e.target.value)}
                    />
                </label>
                <label>
                    修改時間 : <input name="time" type="text" value={time}
                        onChange = { e => this.props.onTimeChange(e.target.value) }
                    />
                </label>
                <h3>新增餐點</h3>
                
                <label>
                    餐點名稱 : <input name="name" type="text" 
                        onChange = {this.add}
                    />
                </label>
                <label>
                    餐點價格 : <input name="price" type="text" 
                        onChange = {this.add}
                    />
                </label>
                <label>
                    烹調時間 : <input name="time" type="text"
                        onChange = {this.add}
                    />
                </label>
                <button onClick = { () => this.props.onAddNew(this.state.obj) }>Add</button>

                <h3>刪除餐點</h3>
                <div>
                    <label>
                        餐點名稱 : <b>{name}</b>
                        <br/>
                        <br/>
                    </label>
                    <label>
                        價格 : <input name="price" type="text" value={price}  
                            onChange = {()=>{}}
                        />
                    </label>
                    <label>
                        時間 : <input name="time" type="text" value={time}                        
                            onChange = {()=>{}}
                        />
                    </label>
                    <button onClick = {()=> this.props.onDelete(this.props.name)}>Delete <b>{this.props.name}</b></button>
                </div>
                
            </div>
        );    
    }
}


export default Modify;