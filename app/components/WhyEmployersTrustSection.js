export function WhyEmployersTrustSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Employers Trust Zogiraa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* 100% Background Verified */}
          <div className="bg-white shadow-md w-[200 px] h-[312px] rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <img
              src= "./img23.png" // your image path here
              alt="100% Background Verified"
              className="w-[100px] h-[100px] rounded-full mx-auto mb-4 object-cover mt-5"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2 ">
              100% Background 
              <br/>
              Verified
            </h3>
            <p className="text-sm text-gray-600">
              All workers undergo thorough background verification process.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="bg-white shadow-md w-[200 px] h-[312px]  rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <img
              src= "./img24.png"
              alt="Transparent Pricing"
              className="w-[100px] h-[100px]  rounded-full mx-auto mb-4 object-cover  mt-5"
            />
            <h3 className="text-xl  font-bold text-gray-900 mb-2">
              Transparent 
              <br/>
              Pricing
            </h3>
            <p className="text-sm text-gray-600">
              Secure escrow system ensures payment protection for both parties.
            </p>
          </div>

          {/* Gold Employer Badge */}
          <div className="bg-white shadow-md w-[200 px] h-[312px]  rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <img
              src= "./img25.png"
              alt="Gold Employer Badge"
              className="w-[100px] h-[100px]  rounded-full mx-auto mb-4 object-cover  mt-5"
            />
            <h3 className="text-xl  font-bold text-gray-900 mb-2">
              Gold Employer Badge
            </h3>
            <p className="text-sm text-gray-600">
              Earn premium status and get priority access to top workers.
            </p>
          </div>

          {/* 24x7 Support */}
          <div className="bg-white shadow-md w-[200 px] h-[312px]  rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <img
              src= "./img26.png"
              alt="24x7 Support"
              className="w-[100px] h-[100px]  rounded-full mx-auto mb-4 object-cover  mt-5"
            />
            <h3 className="text-xl  font-bold text-gray-900 mb-2">24x7 Support</h3>
            <p className="text-sm text-gray-600">
              Round-the-clock support team for any assistance or issues.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
