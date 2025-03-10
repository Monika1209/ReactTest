import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CardDetails = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [cartId]);

  if (!cart) return <h4 className="text-center text-white">Loading...</h4>;

  const product = cart.products[0]; 

  return (
    <div className="container mt-4">
      <h2 className="text-center text-white mb-4">Cart Details</h2>

      <div className="card bg-secondary text-white p-4">
        <h3>Cart ID: {cart.id}</h3>
        <p><strong>Total Products:</strong> {cart.totalProducts}</p>
        <p><strong>Total Price:</strong> ${cart.total}</p>
        <p><strong>Discounted Price:</strong> ${cart.discountedTotal}</p>
        <p><strong>User ID:</strong> {cart.userId}</p>

        <h4 className="mt-3">Product Details:</h4>
        {product && (
          <div className="card bg-dark text-white p-3 mb-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="card-img-top mx-auto d-block"
              style={{ height: "150px", width: "150px", objectFit: "cover" }} // Smaller Image
            />
            <div className="card-body">
              <h5>{product.title}</h5>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
              <p><strong>Stock:</strong> {product.stock} left</p>
            </div>
          </div>
        )}

        <Link to="/" className="btn btn-light mt-3">Back to Carts</Link>
      </div>
    </div>
  );
};

export default CardDetails;
