const personalData = [
  {
    label: "Full Name",
    value: "Sarah Elizabeth Williams",
  },
  {
    label: "Date of Birth",
    value: "April 15, 1985",
  },
  {
    label: "SSN",
    value: "XXX-XX-7890",
  },
  {
    label: "Occupation",
    value: "Software Engineer",
  },
  {
    label: "Employer",
    value: "TechCorp Inc.",
  },
  {
    label: "Annual Income",
    value: "$75,000",
  },
];

const contactData = [
  {
    label: "Email",
    value: "sarah.williams@example.com",
  },
  {
    label: "Address",
    value: "123 Main St, New York, NY 10001",
  },
  {
    label: "Phone Number",
    value: "+1-123-456-7890",
  },
  {
    label: "Mobile Number",
    value: "+1-123-456-7890",
  },
  {
    label: "Preferred Communication Method",
    value: "Mobile Phone",
  },
  {
    label: "Emergency Contact",
    value: "John Doe",
  },
  {
    label: "Preferred Language",
    value: "English",
  },
];

const CustomerPersonalDetails = () => {
  return (
    <div className="p-6 md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-left text-sm font-medium text-gray-500 uppercase mb-3">
            Personal Information
          </h4>
          <div className="space-y-2">
            {personalData.map((item, index) => (
              <div key={index} className="flex flex-col items-start mb-2">
                <span className="text-gray-600">{item.label}:</span>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-left text-sm font-medium text-gray-500 uppercase mb-3">
            Contact Information
          </h4>
          <div className="space-y-2">
            {contactData.map((item, index) => (
              <div key={index} className="flex flex-col items-start mb-2">
                <span className="text-gray-600">{item.label}:</span>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
          Notes
        </h4>
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 text-sm">
          <p>
            Customer prefers digital statements and has opted out of paper mail.
            Interested in investment opportunities and has mentioned plans to
            purchase a home in the next year.
          </p>
          <p className="mt-2">
            Last contact: May 15, 2023 - Discussed retirement planning options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerPersonalDetails;
