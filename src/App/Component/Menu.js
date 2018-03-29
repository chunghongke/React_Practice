import React, { Component } from 'react';
import Content from './Content';

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
  };  
  
  handleSelect = num => this.setState({ checked: num });

  render() {
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
      </div>
    )
  };
}

export default Menu;