import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className='title' >
        <h1>{props.subtitle}</h1>
        <p> {props.subtitleText}
        </p>
      
    </div>
  )
}

export default Title
