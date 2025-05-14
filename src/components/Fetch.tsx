import { useState, useEffect } from 'react';

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
    return (<div>
    {data ? (
        (() => {
            const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = data;
            return (
                <div>
                    <p>id: {id}</p>
                    <p>title: {title}</p>
                    <p>description: {description}</p>
                    <p>price: {price}</p>
                    <p>discountPercentage: {discountPercentage}</p>
                    <p>rating: {rating}</p>
                    <p>stock: {stock}</p>
                    <p>brand: {brand}</p>
                    <p>category: {category}</p>
                    <p>thumbnail: {thumbnail}</p>
                    <img src={images} width={300} />
                </div>
            );
        })()
    ) : (
        <p>Loading...</p>
    )}
</div>)
};
