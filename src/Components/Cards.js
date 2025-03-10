import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data.carts));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-white mb-4">Shopping Carts</h2>

      <div className="row">
        {carts.map((cart) => (
          <div className="col-md-4" key={cart.id}>
            <div className="card bg-dark text-white p-3 mb-4">
              {cart.products.length > 0 && (
                <img
                  src={cart.products[0].thumbnail}
                  alt="Product"
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5>Cart ID: {cart.id}</h5>
                <p>Products: {cart.totalProducts}</p>
                <p>Total: ${cart.total}</p>
                <Link to={`/cart/${cart.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
