import { useEffect, useState } from "react"
import axios from "axios"

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
                        <h2>{item.name}</h2>
                        <span>{item.barcode}</span>
                        <span>{item.price}</span>
                        {item.specialPrice && <span>{item.specialPrice}</span>}
                        <p>{item.about}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}