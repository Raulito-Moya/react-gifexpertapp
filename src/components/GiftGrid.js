import React  from 'react'
import Proptypes from 'prop-types';
import ReactDOM from "react-dom";
import { useFetchGifts } from '../hooks/useFetchGifts'
// import { getGifts } from '../helpers/getGifs'
import { GiftGridItem } from './GiftGridItem'

//nota importamos useeffect ya que con el  eejemplo del count al dar click en el boton React intrpreta que hay un cambio en los eleementos y lee el codigo nuevamente y pasa el proceso de el fetch de nuevo
export const Giftgrid = ({category}) => {

 const {data:images, loading } = useFetchGifts( category );

 

    return ( 
        <>
      <h3 className='animate__animated animate__flip'>{category}</h3>
  
      {loading && <p className='animate__animated animate__flash'>Loading</p> /* esto significa que si no es true no regresa nada*/  } 

     <div className='card-grid  animate__animated animate__fadeInDownBig'>
              {   
           
                      images.map( (img) =>( 
                        <GiftGridItem 
                        key={img.id}
                        {...img}
                         />
                    ))
                   } 
             
               </div> 
        
        </>
    )
}

Giftgrid.propTypes ={
    
  category: Proptypes.string.isRequired
}


