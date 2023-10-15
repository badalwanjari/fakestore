import React from "react";

function Categories({ categories, handleCategoryChange }) {
    return (
        <>
            <h2>Categories</h2>
            <select
                className="mt-5"
                style={{ height: "60px", fontSize: "1.4rem" }}
                onChange={handleCategoryChange}
            >
                {categories.map((category, i) => (
                    <option key={i}>{category}</option>
                ))}
            </select>
        </>
    );
}

export default Categories;
