'use client';

import { useState, ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;  // Ubah dari string ke ReactNode untuk support JSX
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        isHovered
          ? 'border-green-500 bg-green-50 shadow-lg transform -translate-y-2'
          : 'border-gray-200 bg-white hover:shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      
      <button
        className={`mt-4 px-4 py-2 rounded-md font-semibold transition-all ${
          isHovered
            ? 'bg-green-500 text-white'
            : 'bg-green-100 text-green-700 hover:bg-green-200'
        }`}
      >
        Pelajari Lebih Lanjut
      </button>
    </div>
  );
}
