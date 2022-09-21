import { useState, useEffect } from "react";
import paginate from "./pagination";
const url = "https://premsaitoram.github.io/jasonapi/data.json"
export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setData(paginate(data));
        setLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return{loading, data}
}