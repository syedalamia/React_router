import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function Product(props) {

  const history=useHistory();

    
const getClickId =(ideal)=>{
    
    history.push(`/about/${ideal}`)


}

    
   
    return (
        <>
            {
                props.product.map((data,index)=>{
                    return (
                    <>
                    
                    <h2 >Product Name {index+1}</h2> 
                    <h2>{data.name}</h2>
                    <button onClick={()=>getClickId(index+1)} >click here</button>
                   

                    
                    

                    </>
                    
                    
                    )

                    
                })

                
            }


                    



        </>
    )
}