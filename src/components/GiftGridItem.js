import React from 'react'
import PropTypes from 'prop-types'

export const GiftGridItem = ({title,url}) => {
  
    //console.log({id,title,url})

    return (
        <div className='card animate__animated animate__fadeInDownBig'>
           
            <img src={url} alt={title}/>
            <p>{ title }</p>
            
        </div>
    )
}

GiftGridItem.propTypes ={
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
