import React from 'react';
import './Era00s.css'; 

export default function Era00s({ items }) {
    return (
        <>
            <section className="item-section">
                <h3 className="text-center my-4">00's Era</h3>
                <div className="items-grid">
                    {items.map((item, i) => (
                        <div className="item-card" key={i}>
                            <div className="item-image">
                                <img src={item.imageUrl} alt={item.name} />
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p className="price">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
