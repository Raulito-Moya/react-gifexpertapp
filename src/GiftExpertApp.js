import React, {useState} from "react"
import ReactDOM from "react-dom"
import {AddCategory} from './components/AddCategory'
import { Giftgrid } from "./components/GiftGrid";
const GiftExpertApp = ()=>{

    //const categories =[ 'One Punch', 'Samurai X', 'Dragon Ball'];
     const [categories, setCategories] = useState([ 'One Punch']);
      /*const handleAdd = ()=>{
         
               //setCategories([...categories, 'Naruto']) tmbien puede tener un callback que es el estado anterior
               setCategories( cats => [...cats, 'Naruto'])     
      }*/
     return <>
          <h2>GiftExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr />
         
              {  
                  categories.map( (category) =>(
                     
                     <Giftgrid key={category} category={category}/>
                  ))
              }
         
     </>
   

      
}

export default GiftExpertApp
