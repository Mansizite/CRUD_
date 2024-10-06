import React from 'react';
import Create from './Create'; 
import Read from './Read'; 
import './Main.css'; 

const Main = () => {
    return (
        <div className="main-container">
            <h1 className="title">My Collection</h1>
            <Create />
            <Read />
        </div>
    );
};

export default Main;
