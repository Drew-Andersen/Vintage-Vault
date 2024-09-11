import { Link } from 'react-router-dom';

export default function Era70s({ items }) {
    return (
        <>
            <section className="item-section">
                <h3 className="text-center my-4">70's Era</h3>
                <div className="items-grid">
                    {items && items.map((item) => (
                        <div className="item-card" key={item._id}>
                            <div className="item-image">
                                <img src={item.imageURL} alt={item.name} />
                            </div>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}