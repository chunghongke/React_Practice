import React, { Component } from 'react';

class Modify extends Component {
    constructor(){
        super();
        this.state = {
          obj : {name:"", price:0, time:0}
        }; 
        // this.addprice = this.addprice.bind(this);
      };  
    add = event => {
        const { obj } = this.state;
        const newValue = event.target.value;
        const Key = event.target.name;
        obj[Key] = newValue;
        this.setState({ obj })
    }
    clear = () => {
        this.setState({obj : {name:"", price:0, time:0}})
        // document.getElementById('name').value="";
        // document.getElementById('price').value="";
        // document.getElementById('time').value="";
    }

    render(){
        const { name, no, data:{ price, time} , onAddNew, onPriceChange, onTimeChange , onDelete} = this.props;
        const { obj } = this.state;
        //const { price, time} = this.props.data;
        console.log('this.props.no',no);
        return (
            <div>
                <label>
                    餐點名稱 : <b>{name}</b>
                    <br/>
                    <br/>
                </label>
                <label>
                    修改價格 : <input name="price" type="text" value={price}
                        onChange = { e => onPriceChange(e.target.value)}
                    />
                </label>
                <label>
                    修改時間 : <input name="time" type="text" value={time}
                        onChange = { e => onTimeChange(e.target.value) }
                    />
                </label>
                <h3>新增餐點</h3>
                <div id="add">
                <label>
                    餐點名稱 : <input id="name" name="name" type="text" value={obj.name}
                        onChange = {this.add}
                    />
                </label>
                <label>
                    餐點價格 : <input id="price" name="price" type="text" value={obj.price}
                        onChange = {this.add}
                    />
                </label>
                <label>
                    烹調時間 : <input id="time" name="time" type="text" value={obj.time}
                        onChange = {this.add}
                    />
                </label>
                <button onClick = { () => {onAddNew(this.state.obj);this.clear();} }>Add</button>
                </div>
                <h3>刪除餐點</h3>
                <div>
                    <label>
                        餐點名稱 : <b>{name}</b>
                        <br/>
                        <br/>
                    </label>
                    <label>
                        價格 : {price} 元 , 烹調時間 : {time}  分鐘<br/><br/>
                    </label>
                    <button onClick = {()=> onDelete(name,no)}>Delete</button><b>  {this.props.name}</b>
                </div>                
            </div>
        );    
    }
}


export default Modify;