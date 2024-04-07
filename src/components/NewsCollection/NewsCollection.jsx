import React, { useEffect, useState } from 'react'
import "./NewsCollection.css"
import Item from '../Item/Item'
const NewsCollection = () => {
  const [new_collection, setNew_collction] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcolection')
    .then((res)=>res.json())
    .then((data)=>{
      setNew_collction(data)
    })
  },[])
  return (
    <div className='collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections-item">
        {new_collection.map((item, i)=>{
            return <Item key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewsCollection
