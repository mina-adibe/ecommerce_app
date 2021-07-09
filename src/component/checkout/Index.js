import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
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
    },
  });

  return (
    <div className="w-1/2 mx-auto">
      <h1>Review Order</h1>

      <form className="space-y-4 text-gray-700" onSubmit={formik.handleSubmit}>
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
            <input
              className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              id="formGridCode_card"
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
  );
};

export default Checkout;
