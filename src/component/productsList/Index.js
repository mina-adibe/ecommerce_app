import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/productsActions";

import { ProductCard } from "../index";

const ProductsList = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  const ProductsData = products.map((elm) => {
    return (
      <ProductCard
        key={elm.id}
        category={elm.category}
        title={elm.title}
        description={elm.description}
        price={elm.price}
        image={elm.image}
      />
    );
  });

  return (
    <div>
      <div>{products.length}</div>
      <div className="grid grid-cols-4 gap-2">{ProductsData}</div>
    </div>
  );
};

ProductsList.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  loadProducts,
};

ProductsList.defaultProps = {
  products: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
