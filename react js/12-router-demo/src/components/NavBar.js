import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/save">Add Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/list">Display</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/find">Find </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Update </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="#">Delete </Link>
                </li>

            </ul>

        </div>
    );
};

export default NavBar;