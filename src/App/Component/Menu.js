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
//do not use "=" to assign state : XX num => {this.state.checked = num}
// componentDidUpdate(){
//   this.setState
// }
  handleAdd (obj) {
    
    // console.log(obj);
    const oldMenu = this.state.menu;
   // menu[this.state.menu.length] = obj;

    const newMenu = [...oldMenu,obj];
    // console.log(menu[menu.length-1]);
    this.setState({ menu:newMenu });
  }

  handleDelete(del,id){
    console.log('del',del);
    const menu = this.state.menu;
    // console.log('menu',menu);
    // menu.map((obj,index)=>{
    //   if(menu[index].name === del){
    //     menu.splice(index,1);        
    //   }
    // })
    for(let i in menu){
      if(menu[i].name === del && i === id){
        menu.splice(i,1);
        break;
      }
    }
    this.setState({ menu ,checked:0 });
    // document.getElementById(obj).remove();
  }

  handlePriceChange = newValue =>{
    const { menu, checked } = this.state;
    // menu[this.state.checked].price = newValue;
    const newMenu = menu.map((ele,index)=>{
      if(index !== checked){
        return ele
      }else{
        return{
          ...ele,
          price : newValue
        }        
      }
    })
    this.setState({ menu : newMenu });
  }

  handleTimeChange = newValue => {
    const { menu, checked } = this.state;
    menu[checked].time = newValue;
    this.setState({ menu });
  }
  render() {
    const { menu,checked } = this.state;    
    console.log('this.state',this.state);
    console.log('this.state.menu[this.state.checked]',this.state.menu[this.state.checked])
    console.log('checked:',this.state.checked);
    return (          
      <div>
        <h2>Menu</h2>
        <div>          
            {
              menu.map((obj, index) => {
                return (
                  <Content
                    key = {index}
                    No = {index} 
                    check = { checked === index }                     
                    data = {obj} 
                    onMenuClick = {this.handleSelect}
                  />
                );
              })
            } 
        </div>
        <h2>Modify</h2>
        <Modify          
          currentSelected = {checked}
          no = {checked}
          name = {menu[checked].name}
          data = {menu[checked]}
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