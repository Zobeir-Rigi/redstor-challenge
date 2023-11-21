import { useEffect, useState } from "react"
import axios from "axios"

export const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const fetchAllItems = async () => {
            try{
                const res = await axios.get('http://localhost:8800/items');
                console.log(res)
                // setItems()
            }catch(err){
                console.log(err)
            }
        }
        fetchAllItems()
    },[])
    return(
        <div>
            items
        </div>
    )
}