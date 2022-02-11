import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Homepage from '../../components/Homepage'; 

export default function index() {

    const [writers, setWriters] = useState([]);

    const fetchWriters = async() => {
        const response = await fetch('/api/writers');
        const data = await response.json();
        console.log(data)
        setWriters(data);
    }

    useEffect(() => {
        fetchWriters();
    }, []);



    return (
        <>
        <Homepage/>
        <div className='container mt-5'>
            <div style={{display: "flex", flexWrap: "wrap"}}>
            {writers.map(writer => (
                <Card
                    id = {writer.id}
                    name={writer.name}
                    book={writer.book}
                    image={writer.image}
                />
            ))}
            </div>
        </div>
        </>
    )
}