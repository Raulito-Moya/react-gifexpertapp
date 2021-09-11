import {useState ,useEffect} from 'react'
import { getGiftsForGiftAPi } from '../helpers/getGifsForGiftAPI'


export const useGiftsFetch = ( category ) => {

   const [state, setstate] = useState({
        
       data: [],
       loading: true
   })

  useEffect( ()=>{
       
   getGiftsForGiftAPi(category)
       .then( imgs =>{

       // setTimeout(()=>{ //deje el settimeout para estilo porque el api responde rapido
        setstate({
               data:imgs,
               loading:false 
               
           });
           //  console.log(imgs)

      // },1000)
     })
          

  }, [category])  
   
 
 
     return state

}

