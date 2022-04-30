import React, { useEffect, useState } from 'react'
import { ItemData } from './data/ItemData'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    getItems().then( data =>{
      setItems( data)
    })
  }, [])
  
  const getItems = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(ItemData)
      }, 3000);

    })
  }

  return (
    <div className='flex'>
      {items.map(i => <ItemCard key={i.id} data={i}/>)}
    </div>
  )
}

export default ItemList