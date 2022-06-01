import React from 'react'
import './feature.css'

const Feature = ({text,title}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container_feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature