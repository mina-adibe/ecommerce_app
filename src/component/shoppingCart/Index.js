import React from "react";
import shoppingCart from "../../assets/images/shopping-cart.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
  console.log("cart items :????????????", cartItems);

  return (
    <div>
      <div className="p-0">
        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4  inline-flex items-center">
            <span className="text-white  bg-red-800 z-30 rounded-full w-5 text-sm relative left-11 bottom-5">
              {cartItems.length}
            </span>
            <span className="mr-1">
              <img src={shoppingCart} alt="Logo" className="w-14" />
            </span>

            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>

          <ul className="dropdown-menu absolute right-0 hidden text-gray-700 pt-1">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className=" w-72  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
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
                        </li>
                        <li>
                          <span
                            className="font-bold"
                            onClick={() => removeFromCart(item)}
                          >
                            [X]
                          </span>
                        </li>
                        <li>
                          <span
                            className="font-bold"
                            onClick={() => increaseQuantity(item)}
                          >
                            [+]
                          </span>
                        </li>
                        <li>
                          <span
                            className="font-bold"
                            onClick={() => decreaseQuantity(item)}
                          >
                            [-]
                          </span>
                        </li>
                      </div>
                    </ul>
                    <span> {item.quantity} </span>
                  </div>
                </div>
              </li>
            ))}
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
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};
ShoppingCart.defaultProps = {
  cartItems: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
