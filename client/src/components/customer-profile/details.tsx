
const dummyData = [
  {
    label: "Customer ID",
    value: "2567890",
  },
  {
    label: "Risk Level",
    value: "Low",
  },
  {
    label: "Credit Score",
    value: "785",
  },
  {
    label: "KYC Status",
    value: "Verified",
  },
]

const CustomerDetails = () => {
  return (
    <div className="p-6 md:border-r border-gray-200 md:w-1/3">
      <div className="flex flex-col items-center text-center mb-4">
        <img
          src="https://avatar.iran.liara.run/public/girl"
          alt="Customer Avatar"
          className="w-24 h-24 rounded-full mb-3 active-edit-image"
        />
        <h3 className="text-xl font-semibold text-gray-800">Sarah Williams</h3>
        <p className="text-gray-600">Customer since June 2018</p>
        <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
          Premium Customer
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        {dummyData.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span className="text-gray-600">{item.label}:</span>
            <span className="font-medium text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;