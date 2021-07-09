import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { productSearch } from "../../redux/actions/searchActions";

const SearchBar = ({ productSearch }) => {
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

const mapDispatchToProps = {
  productSearch,
};

SearchBar.propTypes = {
  productSearch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBar);
