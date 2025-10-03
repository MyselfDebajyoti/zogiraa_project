// components/Sidebar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaHeartbeat, 
  FaHome, 
  FaTools, 
  FaHotel, 
  FaSeedling, 
  FaIndustry, 
  FaCouch, 
  FaHeadset, 
  FaCog 
} from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: FaHeartbeat, label: 'Health Care', href: '/health-care' },
    { icon: FaHome, label: 'Domestic Workers', href: '/domestic-workers' },
    { icon: FaTools, label: 'Machinery & Tools', href: '/machinery-tools' },
    { icon: FaHotel, label: 'Hospitality', href: '/hospitality' },
    { icon: FaSeedling, label: 'Agriculture', href: '/agriculture' },
    { icon: FaIndustry, label: 'Rubber & Chemical', href: '/rubber-chemical' },
    { icon: FaCouch, label: 'Furniture', href: '/furniture' },
    { icon: FaHeadset, label: 'Support', href: '/support' },
    { icon: FaCog, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-4 z-50 p-3 bg-white text-black rounded-lg hover:bg-white transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo Section */}
        <div className="bg-white p-6 text-[#2A5EB1]">
          <h2 className="text-2xl font-bold">Zogiraa</h2>
          <p className="text-sm text-[#2A5EB1] mt-1">Supplier Central</p>
        </div>

        {/* Menu Items */}
        <nav className="py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={toggleSidebar}
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                >
                  <item.icon className="mr-4 text-gray-600 group-hover:text-blue-600" size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

// Alternative version without react-icons (using emojis)
// components/SidebarSimple.js

export function SidebarSimple() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: '🏥', label: 'Health Care', href: '/health-care' },
    { icon: '🏠', label: 'Domestic Workers', href: '/domestic-workers' },
    { icon: '🔧', label: 'Machinery & Tools', href: '/machinery-tools' },
    { icon: '🏨', label: 'Hospitality', href: '/hospitality' },
    { icon: '🌱', label: 'Agriculture', href: '/agriculture' },
    { icon: '🏭', label: 'Rubber & Chemical', href: '/rubber-chemical' },
    { icon: '🛋️', label: 'Furniture', href: '/furniture' },
    { icon: '💬', label: 'Support', href: '/support' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Zogiraa</h2>
          <p className="text-sm text-blue-100 mt-1">Supplier Central</p>
        </div>

        <nav className="py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="mr-4 text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}