import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {
    const params=useParams();
  
    
    return (
        <div>
            <p>Product Name : {props.product[params.id].name}</p>
         
            <p>Product Price : {props.product[params.id].price}</p>
            <p>Product category :{props.product[params.id].category}</p>
       
         
        </div>
    )
}
