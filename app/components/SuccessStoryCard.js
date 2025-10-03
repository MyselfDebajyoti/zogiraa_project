import { User } from "lucide-react";

export function SuccessStoryCard({ name, role, story }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-3">{role}</p>
          <p className="text-gray-700">"{story}"</p>
        </div>
      </div>
    </div>
  );
}
