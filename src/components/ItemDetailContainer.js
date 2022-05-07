import React, { useEffect, useState } from 'react'
import { ItemData } from './data/ItemData'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({intro}) => {
    const {id} = useParams();
    let [item, setItem] = useState({})
        useEffect(() => {
            getItem(id).then( (data) =>{
                setItem( data );
            });
        }, []);
        
        const getItem = (idFnd) => {
            return new Promise( (resolve, reject) => {
            setTimeout(() => {
                const idReq = ItemData.find ((item)=>{return item.id === Number(idFnd)})
                resolve(idReq)
            }, 3000);

        })
    }
    return(

        <div>
            <h1>{intro}</h1>
            <ItemDetail item={item}/>
        </div>
    )
};

export default ItemDetailContainer