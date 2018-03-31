import React, { Component } from 'react';

// class Content extends Component {
//     render(){
//         // console.log(this.props);
//         // const data = this.props.data || []
//         const { data, onMenuClick, check, No } = this.props;
//       return (
//         <div id={data.name}>
//             <h3>
//                 <input type="radio" checked={check} onChange={()=>onMenuClick(No)}                
//                 /> 
//                 {No+1} 號餐                      
//             </h3>            
//                 餐點: <b>{data.name}</b> , 
//                 價格: <b>{data.price}</b> 元,
//                 烹調時間:<b> {data.time}</b> 分鐘            
//         </div>
//       )
//     }
//   }

  const Content = ({ data, onMenuClick, check, No }) => (
    <div id={data.name}>
        <h3>
            <input type="radio" checked={check} onChange={()=>onMenuClick(No)}                
            /> 
            {No+1} 號餐                      
        </h3>            
            餐點: <b>{data.name}</b> , 
            價格: <b>{data.price}</b> 元,
            烹調時間:<b> {data.time}</b> 分鐘            
    </div>
  )
  export default Content;