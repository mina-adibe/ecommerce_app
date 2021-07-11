import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/productsActions";
import { ProductCard } from "../index.js";
import Loader from "react-loader-spinner";

const ProductsList = ({ products, loadProducts, searchProduct }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  const ProductsData = products.map((item) => {
    return <ProductCard key={item.id} item={item} />;
  });

  const ProductsDataFromSearch = searchProduct.map((item) => {
    return <ProductCard key={item.id} item={item} />;
  });

  return (
    <div className="flex flex-wrap  overflow-hidden px-12">
      {searchProduct.length >= 1 ? (
        <div className="grid xl:grid-cols-5 sm:grid-cols-2  md:grid-cols-3 gap-2">
          {ProductsDataFromSearch}
        </div>
      ) : (
        <div className="grid xl:grid-cols-5 sm:grid-cols-2  md:grid-cols-3 gap-2">
          {products.length === 0 ? (
            <div className="flex w-screen h-96 items-center justify-center">
              <Loader
                type="ThreeDots"
                color="#2BAD60"
                height="100"
                width="100"
              />
            </div>
          ) : (
            ProductsData
          )}
        </div>
      )}
    </div>
  );
};

ProductsList.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
    searchProduct: state.search,
  };
}

const mapDispatchToProps = {
  loadProducts,
};

ProductsList.defaultProps = {
  products: [],
  searchProduct: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
