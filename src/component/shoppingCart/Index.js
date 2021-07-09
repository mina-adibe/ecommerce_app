import React from "react";
import shoppingCart from "../../assets/images/shopping-cart.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingCart,
  HiOutlinePlusCircle,
  HiOutlineMinusCircle,
} from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/actions/cartActions";

const ShoppingCart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div>
      <div className="p-0">
        <div className="dropdown inline-block relative">
          <button className=" text-gray-700 font-semibold py-2 px-4  inline-flex items-center">
            <span className="text-white  bg-red-800 z-30 rounded-full w-5 text-sm relative left-9 bottom-5">
              {cartItems.length}
            </span>
            <span className="mr-1">
              <HiOutlineShoppingCart size="45" />
            </span>

            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>

          <ul className="dropdown-menu absolute right-0 hidden text-gray-700  border-2 border-indigo-800">
            {cartItems.length === 0 ? (
              <div className=" w-72  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <li>empty</li>
              </div>
            ) : (
              cartItems.map((item) => (
                <li
                  key={item.id}
                  className=" w-72  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  <div className="flex flex-row justify-between">
                    <ul className="flex flex-row justify-between">
                      <li>
                        <Link to={`/products/${item.id}`}>
                          <img
                            src={item.image}
                            alt="Logo"
                            className="w-12 h-12"
                          />
                        </Link>
                      </li>
                      <div className="flex flex-col mx-5">
                        <li>
                          <Link to={`/products/${item.id}`}>{item.title}</Link>
                        </li>
                        <li>
                          <span className="font-bold">Price:{item.price}</span>
                          <span className="font-bold text-purple-600 mx-2">
                            NO: {item.quantity}
                          </span>
                        </li>
                      </div>
                    </ul>
                    <div>
                      <li>
                        <a href onClick={() => increaseQuantity(item)}>
                          <HiOutlinePlusCircle />
                        </a>
                      </li>
                      <li>
                        <a href onClick={() => removeFromCart(item)}>
                          <IoTrashOutline />
                        </a>
                      </li>
                      <li>
                        <a href onClick={() => decreaseQuantity(item)}>
                          <HiOutlineMinusCircle />
                        </a>
                      </li>
                    </div>
                  </div>
                </li>
              ))
            )}

            {cartItems.length > 0 ? (
              <div className=" w-72  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <svg class="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <Link to={`/checkout`}>PROCEED TO CHECKOUT</Link>
                  </span>
                </button>
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cart,
  };
}

const mapDispatchToProps = {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

ShoppingCart.defaultProps = {
  cartItems: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
