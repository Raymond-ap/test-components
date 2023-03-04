import React from "react";

const OrderSummary = () => {
  return (
    <div className="bg-white w-full px-4"> {/* adjust width */}
      <div className="flex justify-center text-center items-center py-4">
        <h4 className="text-lg font-bold">Order Summary</h4>
      </div>

      <div className="my-4 ">
        <div className="flex justify-between items-center mb-4">
          <p className="text-base text-gray-700 capitalize">price</p>
          <p className="text-base text-black font-semibold capitalize">
            Subtotal
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-base text-gray-700 capitalize">Handling Charges</p>
          <p className="text-base text-green-600 font-semibold capitalize">
            Subtotal
          </p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-base text-black font-bold capitalize">Total</p>
          <p className="text-base text-black font-bold capitalize">Subtotal</p>
        </div>
        <div className="flex justify-end items-end">
          <p className="text-sm text-gray-500">
            (Prices are inclusive of all taxes)
          </p>
        </div>

        <div className="flex w-full mt-4">
          <button className="bg-black text-white w-full rounded-md h-11 items-center justify-center">
            Place Order
          </button>
        </div>

        <div className="w-full mt-7">
          <h4 className="text-base font-bold">Apply Coupon Code</h4>
          <p className="text-sm text-gray-500 mt-2">
            Have a coupon code? Apply in this field and fill out!
          </p>

          <div className="flex items-center h-11 w-full mt-4">
            <input
              type="text"
              className="w-full h-full outline-none px-4 bg-gray-100"
              placeholder="Code"
            />
            <button className="bg-black text-white w-32 h-full outline-none items-center justify-center">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
