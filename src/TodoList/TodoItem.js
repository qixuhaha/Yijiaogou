import React from "react"
export default (props)=>{
return (
        <ul>
        {  props.list.map((value,index)=>{
            return <li key={index} onClick={()=>{
                props.onDeleteItem(index)
            }}>{value}</li>
        })
         } 
         <li id = "2"></li>
          {   
         React.createElement(
            "li",
            {
                "id":3
            },
            "abc")
         }
        </ul>
      )
}