import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../medicine.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
}

export default useProducts;