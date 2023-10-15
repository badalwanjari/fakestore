import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar"
import Categories from "./components/Categories";

function App() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");

    function loadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((json) => {
                setCategories(["all", ...json]);
            });
    }

    function loadProducts() {
        let url;
        if (activeCategory == "all") {
            url = "https://fakestoreapi.com/products";
        } else {
            url =
                "https://fakestoreapi.com/products/category/" + activeCategory;
        }
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
            });
    }

    function handleCategoryChange(e) {
        const newCategory = e.target.value;
        setActiveCategory(newCategory);
    }

    function addToCart(product) {
        cartItems.push(product);
        setCartItems(cartItems);
        setCartLength(cartLength + 1);
    }

    function removeFromCart(removeItem) {
        let temp = cartItems.filter((item) => item.id != removeItem.id);
        if (temp.length == 0) {
            setCartItems([]);
        } else {
            setCartItems(temp);
        }
        console.log(cartItems);
        setCartLength(cartLength - 1);
    }

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [activeCategory, cartLength]);

    return (
        <div>
            <Navbar />
            <div className="row py-5 mx-0">
                <div className="col-auto">
                    <Categories
                        categories={categories}
                        handleCategoryChange={handleCategoryChange}
                    />
                </div>
                <div className="col-7">
                    <Products products={products} addToCart={addToCart} />
                </div>
                <div className="col-3">
                    <Cart
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
