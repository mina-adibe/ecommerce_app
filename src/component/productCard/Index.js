import React from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const productCard = ({ item, addToCart, removeFromCart }) => {
  const { category, title, price, image, id } = item;
  return (
    <div>
      <div className="antialiased  text-gray-900 font-sans p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full    p-4">
              <div
                href="/"
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden">
                  <Link to={`/products/${id}`}>
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {category}
                  </span>
                  <h2 className="mt-2 mb-2  font-bold">
                    <Link to={`/products/${id}`}>{title}</Link>
                  </h2>

                  <div className="mt-3 flex items-center"></div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                  <span className="flex items-center mb-1">Price: {price}</span>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className="bg-gray-600 w-full hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                  >
                    add to cart
                  </button>
                  <button
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    className="bg-red-700 w-full hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                  >
                    remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

productCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(null, mapDispatchToProps)(productCard);
