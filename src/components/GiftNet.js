import React  from 'react'
import Proptypes from 'prop-types';
import ReactDOM from "react-dom";
import { useGiftsFetch } from '../hooks/useGiftsFetch'
// import { getGifts } from '../helpers/getGifs'
import { GiftItem } from './GiftItem'


export const GiftNet = ({category}) => {

 const {data:images, loading } = useGiftsFetch( category );

 

    return ( 
        <>
      <h3 className='animate__animated animate__flip'>{category}</h3>
  
      {loading && <p className='animate__animated animate__flash'>Loading</p> /* esto significa que si no es true no regresa nada*/  } 

     <div className='card-grid  animate__animated animate__fadeInDownBig'>
              {   
           
                      images.map( (img) =>( 
                        <GiftItem 
                        key={img.id}
                        {...img}
                         />
                    ))
                   } 
             
               </div> 
        
        </>
    )
}

GiftNet.propTypes ={
    
  category: Proptypes.string.isRequired
}


