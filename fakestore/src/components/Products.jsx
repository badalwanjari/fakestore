import React from "react";

function Products({products, addToCart}) {
    return (
        <>
            <h2>Products</h2>
            <div className="row" style={{rowGap:"0.5rem"}}>
                {products.map((product, i) => (
                    <div key={i} className="card col-auto p-2" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top"
                            src={product.image}
                            alt={product.title}
                            height={"250px"}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.title.slice(0, 25)}
                            </h5>
                            <p className="card-text">
                                {product.description.slice(0, 60) + "..."}
                            </p>
                            <p className="card-text">${product.price}</p>
                            <button className="btn btn-primary" onClick={(e)=>addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
