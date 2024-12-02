import React,{useState,useEffect} from 'react'
import axios from "axios"
import NewsItem from './NewsItem'
import "./News.css"
function News(props) {
let [val,setval]=useState()
useEffect(()=>{
 let result= axios.get(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
result.then((res)=>{
// console.log(res.data.articles);
setval(res.data.articles)
})
 
},[props.category])

  return (
    <>
 
    {val?<div className='main'>
        {val.map((item)=>{
return(
    <NewsItem
    title={item.title}
    dec={item.description}
    idata={item.urlToImage}
    />
)
        })}
    </div>:<p>no data</p>}


    </>
  )
}

export default News