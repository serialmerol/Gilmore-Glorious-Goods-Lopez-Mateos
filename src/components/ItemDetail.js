import React from 'react'

const ItemDetail = ({item}) => {

    return (
      <div className="card w-auto bg-base-100 shadow-xl flex-1">
        <figure className="px-10 pt-10">
          <img src={item.img} alt="item" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>Type: {item.type}</p>            
            <p>{item.description}</p>
            <p>PRICE: {item.cost}</p>
            <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
      </div>
    )
  }
    export default ItemDetail