import React, { Component } from 'react';
import Content from './Content';
import Modify from './Modify';

const menu_content = [
    { name : "Beef"  , price : "120" , time : "15"},
    { name : "Potato", price : "70"  , time : "8"},
    { name : "Meat"  , price : "150" , time : "12"}
];

class Menu extends Component{
  constructor(){
    super();
    this.state = {
      menu : menu_content,
      checked : 0
    };
    this.handleAdd = this.handleAdd.bind(this);     
    this.handleDelete = this.handleDelete.bind(this);     
  };  
  
  handleSelect = num => this.setState({ checked: num });

  handleAdd (obj) {
    // console.log(obj);
    const menu = this.state.menu;
    menu.push(obj);
    // console.log(menu[menu.length-1]);
    this.setState({ menu });
  }

  handleDelete(del){
    console.log('del',del);
    var menu = this.state.menu;
    // console.log('menu',menu);
    menu.map((obj,index)=>{
      if(menu[index].name === del){
        menu.splice(index,1);        
      }
    })    
    this.setState({ menu ,checked:0 });
    // document.getElementById(obj).remove();
  }

  handlePriceChange = newValue =>{
    const { menu, checked } = this.state;
    menu[this.state.checked].price = newValue;
    this.setState({ menu });
  }

  handleTimeChange = newValue => {
    const { menu, checked } = this.state;
    menu[this.state.checked].time = newValue;
    this.setState({ menu });
  }
  render() {    
    console.log('this.state',this.state);
    console.log('this.state.menu[this.state.checked]',this.state.menu[this.state.checked])
    return (          
      <div>
        <h2>Menu</h2>
        <div>          
            {
              this.state.menu.map((obj, index) => {
                return (
                  <Content
                    key = {index}
                    No = {index} 
                    check = {this.state.checked === index }                     
                    data = {obj} 
                    onMenuClick = {this.handleSelect}
                  />
                );
              })
            } 
        </div>

        <h2>Modify</h2>
        <Modify          
          currentSelected = {this.state.checked}
          name = {this.state.menu[this.state.checked].name || ''}
          data = {this.state.menu[this.state.checked]}
          onPriceChange = {this.handlePriceChange}          
          onTimeChange = {this.handleTimeChange}
          onAddNew = {this.handleAdd}     
          onDelete = {this.handleDelete}
          />   
      </div>
    )
  };
}

export default Menu;