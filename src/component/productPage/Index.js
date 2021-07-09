import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/productsActions";
import PropTypes from "prop-types";
import { addToCart } from "../../redux/actions/cartActions";

const ProductPage = ({ loadProducts, products, addToCart }) => {
  const { category, title, description, price, image } = products;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 px-20">
      <div className="h-1/2 m-7">
        <img src={image} alt="" className="h-full" />
      </div>
      <div>
        <div className="text-blue-700 my-7 font-bold text-2xl">
          <h1>{title}</h1>
        </div>
        <div className="my-4 text-gray-600 text-xl">
          <h2 className="font-bold my-2">category:</h2>
          <h2>{category}</h2>
        </div>
        <div className="my-4 text-gray-600 text-xl">
          <h2 className="font-bold my-2">description:</h2>
          <p>{description}</p>
        </div>

        <div className="my-4 text-gray-600 text-xl">
          <h2 className="text-gray-500 text-xl">price:</h2>
          <h2> {price}$</h2>
        </div>
        <div>
          <button
            onClick={() => {
              addToCart(products);
            }}
            className="bg-green-700 h-11 w-5/12 hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loadProducts,
  addToCart,
};

function mapStateToProps(state, ownProps) {
  const id = +ownProps.match.params.id;
  return {
    products: state.products.find((item) => item.id === id),
  };
}

ProductPage.propTypes = {
  products: PropTypes.object.isRequired,
  loadProducts: PropTypes.func.isRequired,
};
ProductPage.defaultProps = {
  products: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
