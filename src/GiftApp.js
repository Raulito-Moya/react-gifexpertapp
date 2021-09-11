import React, {useState} from "react"
import ReactDOM from "react-dom"
import {AddGiftCategory} from './components/AddGiftCategory'
import { GiftNet } from "./components/GiftNet";


export const GiftsApp = ({ defaultCategories = [] })=>{  //este default categorie se puso para hacer el eejemplo de la prueba

 
    // const [categories, setCategories] = useState([ 'One Punch']);
     const [categories, setCategories] = useState(defaultCategories);
      /*const handleAdd = ()=>{
         
               //setCategories([...categories, 'Naruto']) tmbien puede tener un callback que es el estado anterior
               setCategories( cats => [...cats, 'Naruto'])     
      }*/
     return <>
          <h2>GiftExpertApp</h2>
          <AddGiftCategory setCategories={setCategories}/>
          <hr />
         
              {  
                  categories.map( (category) =>(
                     
                     <GiftNet key={category} category={category}/>
                  ))
              }
         
           </>
   

      
}

export default GiftsApp
