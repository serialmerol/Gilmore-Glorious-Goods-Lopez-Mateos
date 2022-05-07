import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({items}) => {

  return (
    <div className='flex'>
      {items.map(i => <ItemCard key={i.id} data={i}/>)}
    </div>
  )
}

export default ItemList