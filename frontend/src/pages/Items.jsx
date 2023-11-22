import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

export const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const fetchAllItems = async () => {
            try{
                const res = await axios.get('http://localhost:8800/items');
                console.log(res)
                setItems(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllItems()
    },[])
    return(
        <div>
            <h1>My little Supermarket</h1>
            <div className="items">
                {items.map(item =>(
                    <div className="item" key={item.id}>
                        <img src={item.pic} alt=""/>
                        <div className="name-barcode">
                            <span>{item.name}</span>
                            <span className="barcode">({item.barcode})</span>
                        </div>
                        <div className="price">
                            <span>{item.price}</span>
                            {item.specialPrice && (
                                item.barcode === "a" ? (
                                    <span>Buy 3 for {item.specialPrice}</span>
                                ) : item.barcode === "b" ? (
                                    <span>Buy 2 for {item.specialPrice}</span>
                                ) : (
                                    <span>No special offer</span>
                                )
                            )}
                        </div>                      <p>{item.about}</p>
                        <button><Link to="" >Add to the basket</Link></button>
                    </div>
                ))}
            </div>
        </div>
    )
}