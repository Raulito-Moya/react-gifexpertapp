import React from 'react'
import PropTypes from 'prop-types'

export const GiftItem = ({title,url}) => {
  
    //console.log({id,title,url})

    return (
        <div className='card animate__animated animate__fadeInDownBig'>
           
            <img src={url} alt={title}/>
            <p>{ title }</p>
            
        </div>
    )
}

GiftItem.propTypes ={
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
