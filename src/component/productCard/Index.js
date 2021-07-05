import React from "react";

const productCard = ({ category, title, description, price, image }) => {
  return (
    <div>
      <div className="antialiased  text-gray-900 font-sans p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full    p-4">
              <a
                href="/"
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {category}
                  </span>
                  <h2 className="mt-2 mb-2  font-bold">{title}</h2>
                  <p className="text-sm">{description}</p>
                  <div className="mt-3 flex items-center"></div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                  <span className="flex items-center mb-1">Price: {price}</span>
                  <button class="bg-gray-600 hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                    add to cart
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCard;
