import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { productSearch } from "../../redux/actions/searchActions";

const SearchBar = ({ searchItems, productSearch }) => {
  useEffect(() => {
    console.log("*********>>>>>>>?????searchItems:", searchItems);
  }, [searchItems]);

  return (
    <div>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="search"
        name="address"
        placeholder="search"
        onChange={(e) => productSearch(e.target.value)}
      />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    searchItems: state.searchItems,
  };
}

const mapDispatchToProps = {
  productSearch,
};

SearchBar.propTypes = {
  searchItems: PropTypes.array.isRequired,
  productSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchItems: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
