import React from 'react'

function NewsItem(props) {
  return (
   <>
   <div className='mydata'>
    <img src={props.idata} alt="..."/>
    <h2>{props.title}</h2>
    <p>{props.dec}</p>
   </div>
   </>
  )
}

export default NewsItem