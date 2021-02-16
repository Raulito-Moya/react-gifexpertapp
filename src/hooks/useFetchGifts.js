import {useState ,useEffect} from 'react'
import { getGifts } from '../helpers/getGifs'


export const useFetchGifts = ( category ) => {

   const [state, setstate] = useState({
        
       data: [],
       loading: true
   })

  useEffect( ()=>{
       
     getGifts(category)
       .then( imgs =>{

       // setTimeout(()=>{ //deje el settimeout para estilo porque el api responde rapido
        setstate({
               data:imgs,
               loading:false 
               
           });
             console.log(imgs)

      // },1000)
     })
          

  }, [category])  //el array es una lista de dependecinas es com el componentdidMount en react con clases ,hace que el compoenente se dispara una sola vez o sea sia l acategoria cambia
   
 
 
     return state

}

