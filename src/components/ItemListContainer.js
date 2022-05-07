import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { ItemData } from './data/ItemData'
import { useParams } from 'react-router-dom'

const styles = {
    header:"text-3xl font-extrabold underline text-primary pb-5",
}
  
const ItemListContainer = (props) => {    
    
    const { categoriaid } = useParams();

    const [items, setItems] = useState([])
        useEffect(() => {
            getItems(categoriaid).then( data =>{
                setItems( data )
            })
        })
        
        const getItems = (categoriaid) => {
            return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if (categoriaid === undefined) resolve(ItemData);
                const request = ItemData.filter ((item)=>{ return item.category === categoriaid})
                resolve(request)
            }, 3000);

        })
    }
    return(
        <div>
            <h1 className={styles.header}>Welcome Intrepid {props.job}</h1>
            <ItemList items={items}/>
        </div>
    )
};

export default ItemListContainer