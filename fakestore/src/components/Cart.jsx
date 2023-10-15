import React from "react";

function Cart({ cartItems, removeFromCart }) {
    return (
        <>
            <h2>Cart</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{item.title.slice(0, 10)}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={(e) => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Cart;
