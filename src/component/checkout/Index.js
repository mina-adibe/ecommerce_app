import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearCart } from "../../redux/actions/cartActions";

const Checkout = ({ clearCart, cartItems }) => {
  const formik = useFormik({
    initialValues: {
      address: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      phone: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      clearCart();
    },
  });

  return (
    <div className="w-3/4 mx-auto ">
      <h1 className="text-center text-5xl text-gray-600 my-11">Review Order</h1>
      <div className="grid grid-cols-2">
        <div className="mx-10">
          <form
            className="space-y-4 text-gray-700"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block mb-1" for="formGridCode_card">
                  Address
                </label>
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  id="formGridCode_card"
                />
                {formik.errors.address && formik.touched.address && (
                  <p className="text-red-600">{formik.errors.address}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block mb-1" for="formGridCode_card">
                  Phone
                </label>

                <PhoneInput
                  inputStyle={{
                    width: "100%",
                    height: "2.5rem ",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    borderWidth: "1px",
                  }}
                  country={"eg"}
                  type="number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={(e) => formik.setFieldValue("phone", e)}
                />

                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-red-600">{formik.errors.phone}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block mb-1" for="formGridCode_card">
                  Email
                </label>
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="formGridCode_card"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-600">{formik.errors.email}</p>
                )}
              </div>
              <div className="my-7 ">
                <button
                  type="submit"
                  className="bg-gray-400 text-lg px-4 py-2  border-gray-600 rounded-lg hover:bg-gray-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mx-10 text-gray-700 text-xl">
          <h2>cart Summary</h2>
          <div>
            {cartItems.map((item, index) => (
              <div key="item.key">
                <p>item: {index}</p>
                <p>title:{item.title}</p>
                <p>
                  price: {item.price} X No: {item.quantity} =
                  <span className="text-red-700 text-2xl">
                    {" "}
                    {item.price * item.quantity}
                  </span>
                </p>
                <p>--------</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  clearCart,
};

function mapStateToProps(state) {
  return {
    cartItems: state.cart,
  };
}

Checkout.propTypes = {
  clearCart: PropTypes.func.isRequired,
};
Checkout.defaultProps = {
  cartItems: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
