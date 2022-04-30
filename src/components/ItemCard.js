const ItemCard = ( {data}) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl flex-1 hover:bg-violet-600">
      <figure className="px-10 pt-10">
        <img src={data.img} alt="item" class="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>PRICE: {data.cost}</p>
        <div className="card-actions">
          <button class="btn btn-primary hover:scale-105">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
  export default ItemCard