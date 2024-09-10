export default function Era80s (){
    return(
        <>
            <section className="item-section">
                <h3 className="text-center my-4">80's Era</h3>
                <div className="items-grid">
                    {[...Array(6)].map((_, i) => (
                        <div className="item-card" key={i}>
                            <div className="item-image"></div>
                            <p>Description</p>
                            <p>$$$$$</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}