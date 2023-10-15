import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline d-flex justify-content-space-between">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </nav>
    );
}

export default Navbar;
