'use client';

import React from 'react';
import { Circle } from 'lucide-react';

export default function Aboutus() {
  const timelineItems = [
    {
      id: 1,
      title: 'Chowk Workers Waiting',
      description: 'Traditional job hunting where gathering spots were the main source of daily work.',
      color: 'bg-red-500',
      bg: 'bg-red-50',
      position: 'left',
    },
    {
      id: 2,
      title: 'Digital Onboarding',
      description: 'Easy registration and identity verification through our digital platform.',
      color: 'bg-yellow-500',
      bg: 'bg-yellow-50',
      position: 'right',
    },
    {
      id: 3,
      title: 'Training & Certification',
      description: 'Skill enhancement and professional development through verified courses.',
      color: 'bg-blue-500',
      bg: 'bg-blue-50',
      position: 'left',
    },
    {
      id: 4,
      title: 'Job Placements',
      description: 'Connect-based employment opportunities with verified employers.',
      color: 'bg-purple-500',
      bg: 'bg-purple-50',
      position: 'right',
    },
    {
      id: 5,
      title: 'Financial Growth',
      description: 'Access to banking, payments, and tools for family prosperity.',
      color: 'bg-green-500',
      bg: 'bg-green-50',
      position: 'left',
    },
  ];
  const stories = [
    {
      name: "Ravi Kumar",
      role: "Carpenter",
      text: "Zogiraa helped me find steady work and support my family with dignity.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Cleaner",
      text: "Training programs gave me new skills and better job opportunities.",
      avatar: "PS",
      isCenter: true
    },
    {
      name: "Suresh Yadav",
      role: "Electrician",
      text: "Digital payments made my work transparent and trustworthy.",
      avatar: "SY"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================== Header Section ================== */}
      <section className="bg-[#2A5EB1] px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">
              About Zogiraa
            </h1>
            <h2 className="text-5xl font-bold text-yellow-300 mb-4 leading-tight">
              Hunar Bhi,  Rojgar <br /> Bhi
            </h2>
            <p className="text-white text-lg">
              Digitally organizing and empowering India’s semi-skilled workforce with jobs, dignity, and sustainable livelihoods.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/img28.png"
              alt="Construction workers"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ================== Timeline Section ================== */}
      <section className="py-16 px-8 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2A5EB1] mb-16">
            Our Story
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            For decades, daily wage workers relied on social chowks to find jobs. ZOGIRAA is transforming this traditional setup into a digital ecosystem where every worker has a verified identity, access to training, and dignified employment opportunities.
          </p>

          {/* Timeline Container */}
          <div className="relative pb-32">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-[#34751d]">
              {/* Faded bottom effect */}
              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item) => {
                const isLeft = item.position === 'left';
                const Icon = Circle;

                return (
                  <div key={item.id} className="relative">
                    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content Box */}
                      <div className={`w-1/2 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                        <div className={`${item.bg} p-6 rounded-lg shadow-md`}>
                          <h3 className="font-bold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Circle + Line Extension */}
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div
                          className={`
                            ${item.color}
                            rounded-full
                            h-10 w-10
                            border-4 border-white
                            shadow-lg
                            translate-y-6
                            flex items-center justify-center
                          `}
                        >
                          <Icon className="w-2 h-2 text-white" />
                        </div>

                        {/* Small connecting line below each circle (except last) */}
                        {item.id !== timelineItems.length && (
                          <div className="absolute left-1/2 w-1 h-10 bg-[#34751d] translate-x-[-50%] translate-y-10"></div>
                        )}
                      </div>

                      {/* Empty spacer */}
                      <div className="w-1/2"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

        {/* Vision & Mission Section */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2a10 10 0 0 0-7.07 17.07M12 2a10 10 0 0 1 7.07 17.07" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">
                Vision
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                To become India's leading workforce empowerment platform that transforms the lives of semi-skilled and daily wage workers by promoting dignity of labor, inclusion, and sustainable livelihoods.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500 text-center mb-6">
                Mission
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-700">Organize and empower India's labor force through digital identity & jobs</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-700">Provide skill enhancement, certification, and onboarding</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-700">Ensure transparency, trust, and fair wages</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-700">Build an inclusive ecosystem for long-term growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions for workforce empowerment and digital transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Digital Onboarding */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-600 text-center mb-2">
                Digital Onboarding
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Easy registration, verified identity and professional profiling
              </p>
            </div>

            {/* Skill Training */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                    <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-orange-500 text-center mb-2">
                Skill Training
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Orientation, upskilling programs and certifications
              </p>
            </div>

            {/* Job Matching */}
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-green-600 text-center mb-2">
                Job Matching
              </h3>
              <p className="text-gray-700 text-center text-sm">
                AI-powered, location and skill-based job placement
              </p>
            </div>

            {/* Employer Services */}
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" fill="currentColor"/>
                    <rect x="14" y="3" width="7" height="7" fill="currentColor"/>
                    <rect x="3" y="14" width="7" height="7" fill="currentColor"/>
                    <rect x="14" y="14" width="7" height="7" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-purple-600 text-center mb-2">
                Employer Services
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Verified worker pool and workforce management tools
              </p>
            </div>

            {/* Financial Inclusion */}
            <div className="bg-yellow-100 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-yellow-600 text-center mb-2">
                Financial Inclusion
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Bank accounts, digital payments and government schemes
              </p>
            </div>

            {/* Rating System */}
            <div className="bg-pink-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-pink-600 text-center mb-2">
                Rating System
              </h3>
              <p className="text-gray-700 text-center text-sm">
                Two-way feedback and trust building mechanism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zogiraa Matters Section */}
      <section className="bg-[#2A5EB1] px-8 py-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Why Zogiraa Matters
            </h2>
            <p className="text-lg leading-relaxed">
              ZOGIRAA is not just about jobs—it's about building futures. By connecting workers with opportunities, financial literacy, and social security, we ensure dignity and stability for every worker's family.
            </p>
          </div>
          <div className="flex-1">
           <img
              src="/img29.png"
              alt="Construction workers"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
       <div className="min-h-screen bg-gray-50">
      {/* Community & Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Community & Stories
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Behind every worker is a story of resilience. ZOGIRAA helps rewrite those stories with dignity and opportunity.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl ${
                  story.isCenter ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  {story.isCenter ? (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ) : (
                    story.avatar
                  )}
                </div>
              </div>
              <p className="text-gray-700 text-center mb-6 leading-relaxed min-h-[60px]">
                {story.text}
              </p>
              <p className="text-gray-500 text-sm text-center">
                - {story.name}, {story.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Blue Section */}
      <div className="bg-[#2A5EB1] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              ZOGIRAA – Hunar Bhi, Rojgar Bhi
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto px-4">
              Together, we are shaping a future where every worker finds dignity, growth, and opportunity.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-8 sm:mb-12">
             <img
              src="/img30.png"
              alt="Construction workers"
              className="rounded-lg w-full max-w-md"
            />
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">
              ZOGIRAA
            </h3>
            <p className="text-sm sm:text-base text-blue-100">
              Empowering India's workforce with dignity and opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
