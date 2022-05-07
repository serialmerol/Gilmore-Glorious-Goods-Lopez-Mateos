import { Link } from "react-router-dom"
const ItemCard = ( {data}) => {
  const urlDireccion ="/item/"+data.id;
  return (
    <div className="card w-auto bg-base-100 shadow-xl flex-1 hover:bg-violet-600 hover:scale-105 card-actions">
      <Link to={urlDireccion}>
        <figure className="px-10 pt-10">
          <img src={data.img} alt="item" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.name}</h2>
          <p>TYPE: {data.type}</p>
        </div>
      </Link>
    </div>
  )
}
  export default ItemCard