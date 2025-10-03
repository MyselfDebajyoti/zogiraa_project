import { UserCheck, Zap, Calendar, Shield } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
          <p className="text-gray-600">Everything you need to hire the right people</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Verified Profiles */}
          <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Profiles</h3>
            <p className="text-sm text-gray-600">
              All workers are background verified and skill-tested for your safety
            </p>
          </div>

          {/* Quick Hiring */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Hiring</h3>
            <p className="text-sm text-gray-600">
              Find and hire workers in minutes with our instant matching system
            </p>
          </div>

          {/* Attendance Logs */}
          <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Attendance Logs</h3>
            <p className="text-sm text-gray-600">
              Track worker attendance and performance with detailed logs
            </p>
          </div>

          {/* Secure Payments */}
          <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-sm text-gray-600">
              Safe and secure payment processing with multiple payment options
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
