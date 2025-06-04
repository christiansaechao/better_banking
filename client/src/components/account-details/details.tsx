import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-6">
      <div className="text-left mb-2">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
          Account Information
        </h4>
        <div className="space-y-2">
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Account Type:</span>
            <p className="font-medium text-gray-800">High-Yield Savings</p>
          </div>
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Account Number:</span>
            <p className="font-medium text-gray-800">7890-1234-5678-9012</p>
          </div>
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Routing Number:</span>
            <p className="font-medium text-gray-800">123456789</p>
          </div>
          <div className="text-left mb-2">
            F<span className="text-gray-600 text-sm">SWIFT/BIC:</span>
            <p className="font-medium text-gray-800">BOFAUS3N</p>
          </div>
        </div>
      </div>

      <div className="text-left mb-2">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
          Account Details
        </h4>
        <div className="space-y-2">
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Date Opened:</span>
            <p className="font-medium text-gray-800">June 15, 2018</p>
          </div>
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Interest Rate:</span>
            <p className="font-medium text-gray-800">1.75% APY</p>
          </div>
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Last Statement:</span>
            <p className="font-medium text-gray-800">June 1, 2023</p>
          </div>
          <div className="text-left mb-2">
            <span className="text-gray-600 text-sm">Statement Cycle:</span>
            <p className="font-medium text-gray-800">Monthly (1st)</p>
          </div>
        </div>
      </div>

          <div className="text-left mb-2">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
          Account Owner
        </h4>
        <div className="flex items-start">
          <img
            src="https://avatar.iran.liara.run/public/girl"
            alt="Account Owner"
            className="w-10 h-10 rounded-full mr-3 active-edit-image"
          />
          <div className="text-left mb-2">
            <p className="font-medium text-gray-800">Sarah Williams</p>
            <p className="text-gray-600 text-sm">Primary</p>
            <Link
              to="/customer-profile"
              className="mt-2 text-blue-600 text-sm hover:text-blue-800"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
