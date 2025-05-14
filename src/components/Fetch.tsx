import { useState, useEffect } from 'react'

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string;
};

export const Fetch = () => {

    const [data, setData] = useState<Product | null >(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = (await fetch('https://dummyjson.com/product/1')).json();
                setData(await response);
            } catch (error) {
                console.log('Error: ', error);
            }
        }

        fetchData();
    },[])

    return (
        <div>
            {data ? (
                <div>
                   <p>id: { data.id }</p> 
                   <p>title: { data.title }</p> 
                   <p>description: { data.description }</p> 
                   <p>price: { data.price }</p> 
                   <p>discountPercentage: { data.discountPercentage }</p> 
                   <p>rating: { data.rating }</p>
                   <p>stock: { data.stock }</p>
                   <p>brand: { data.brand }</p>
                   <p>category: { data.category }</p>
                   <p>thumbnail: { data.thumbnail }</p>
                   <img src={ data.images } width={300} />
               </div> 
            ): (<p>Loading...</p>) }
        </div>
    )
};
