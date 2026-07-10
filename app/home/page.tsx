"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { HiHome, HiMagnifyingGlass, HiOutlineTrophy, HiBars3 } from 'react-icons/hi2'; 

export default function HomePage() {
  const router = useRouter();

  // ข้อมูลโรงพยาบาลพร้อมรูปภาพ Mockup
  const hospitals = [
    { name: "โรงพยาบาลแพทย์รังสิต", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
    { name: "โรงพยาบาลเปาโล", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  ];

  // เมนูนำทาง
  const navItems = [
    { icon: HiHome, path: '/home' },
    { icon: HiMagnifyingGlass, path: '/search' },
    { icon: HiOutlineTrophy, path: '/rewards' },
    { icon: HiBars3, path: '/profile' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans pb-24">
      {/* Header Profile */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-400">Welcome to PREDETECT,</p>
          <h1 className="text-2xl font-bold">CHAI 56</h1>
        </div>
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <span className="font-bold text-sm">C</span>
        </div>
      </header>

      {/* Search Box */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-4 pl-12 rounded-2xl bg-[#0d0d0d] border border-gray-800 text-sm outline-none focus:border-blue-500 transition"
        />
        <HiMagnifyingGlass className="absolute left-4 top-4 text-gray-500" size={20} />
      </div>

      {/* Hospital Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">โรงพยาบาล</h2>
          <span className="text-xs text-gray-500">โรงพยาบาลที่ใกล้ฉัน</span>
        </div>

        <div className="space-y-6">
          {hospitals.map((h, i) => (
            <div key={i} className="bg-[#0d0d0d] rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer hover:border-blue-500 transition duration-300">
              <div className="h-40 relative">
                <img src={h.img} alt={h.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-medium">{h.name}</h3>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/90 backdrop-blur-xl border-t border-gray-800 p-4 flex justify-around z-50">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            onClick={() => router.push(item.path)}
            className="p-2 transition hover:text-blue-500"
          >
            <item.icon size={28} className={index === 0 ? "text-blue-500" : "text-gray-600"} />
          </button>
        ))}
      </nav>
    </main>
  );
}