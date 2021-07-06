import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/productsActions";
import PropTypes from "prop-types";

const ProductPage = ({ loadProducts, products }) => {
  const { category, title, description, price, image } = products;

  useEffect(() => {
    loadProducts();
  }, []);

  console.log("props?????", category, title, description, price, image);
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{category}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loadProducts,
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
