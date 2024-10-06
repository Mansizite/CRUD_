import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Read.css';
import { useNavigate } from 'react-router-dom';

export default function Read() {
    const [read, setRead] = useState([]);
    const [expandedCards, setExpandedCards] = useState({}); // Track expanded state for each card

    const getData = async () => {
        const response = await axios.get('https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post');
        setRead(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const remove = async (id) => {
        await axios.delete(`https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post/${id}`);
        getData();
    };

    const navigate = useNavigate();
    const update = (id) => {
        navigate(`/update/${id}`);
    };

    const toggleRead = (id) => {
        setExpandedCards(prev => ({ ...prev, [id]: !prev[id] })); // Toggle the specific card's state
    };

    return (
        <>
            <h1>My Collection</h1>
            <div className="container">
                {read.map((item) => {
                    const { id, name, image, info } = item;
                    const isExpanded = expandedCards[id]; // Get the expanded state for this card
                    const desc = isExpanded ? info : info.substring(0, 100) + "....";

                    return (
                        <div key={id} className="card">
                            <img src={image} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <div className="info">
                                    {desc}
                                    <span 
                                        onClick={() => toggleRead(id)} 
                                        style={{ color: isExpanded ? "green" : "red", cursor: 'pointer' }}
                                    >
                                        {isExpanded ? " Read less" : " Read more"}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='button bg-danger' onClick={() => remove(id)}>Delete</button>
                                <button className='button bg-primary' onClick={() => update(id)}>Edit</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
