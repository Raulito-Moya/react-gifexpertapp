import React, {useState} from "react"
import ReactDOM from "react-dom"
import {AddCategory} from './components/AddCategory'
import { Giftgrid } from "./components/GiftGrid";


export const GiftExpertApp = ({ defaultCategories = [] })=>{  //este default categorie se puso para hacer el eejemplo de la prueba

 
    // const [categories, setCategories] = useState([ 'One Punch']);
     const [categories, setCategories] = useState(defaultCategories);
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
