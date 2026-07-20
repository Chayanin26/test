"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiHome, HiMagnifyingGlass, HiOutlineTrophy, HiBars3, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  // ข้อมูลโรงพยาบาลพร้อมรูปภาพ Mockup
  const hospitals = [
    { name: "โรงพยาบาลบีแคร์", location: "กรุงเทพมหานคร", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
    { name: "โรงพยาบาลภูมิพล", location: "กรุงเทพมหานคร, เขต XXX", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
    { name: "โรงพยาบาลสินแพทย์", location: "ชลบุรี, อ.XXX", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  ];

  const filteredHospitals = hospitals.filter(h => 
    h.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-[#0d0d0d] rounded-full border border-gray-800">
          <HiArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">ค้นหาสถานที่</h1>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="ค้นหาชื่อโรงพยาบาล..." 
          className="w-full p-4 pl-12 rounded-2xl bg-[#0d0d0d] border border-gray-800 focus:border-blue-500 outline-none transition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <HiMagnifyingGlass className="absolute left-4 top-4 text-gray-500" size={20} />
      </div>

      {/* Results List - แสดงแบบ Card ภาพใหญ่ตามรูป */}
      <div className="space-y-6">
        {filteredHospitals.map((h, i) => (
          <div key={i} className="bg-[#0d0d0d] rounded-3xl overflow-hidden border border-gray-800 group cursor-pointer hover:border-blue-500 transition">
            <div className="h-48 relative">
              <img src={h.img} alt={h.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition" />
            </div>
            <div className="p-5 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-gray-500 uppercase">{h.location}</p>
                <h3 className="font-bold text-lg">{h.name}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition">
                <HiArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
        {filteredHospitals.length === 0 && (
          <p className="text-gray-500 text-center mt-10">ไม่พบโรงพยาบาลที่คุณค้นหา</p>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/90 backdrop-blur-xl border-t border-gray-800 p-4 flex justify-around z-50">
        <button onClick={() => router.push('/home')} className="p-2 text-gray-600 hover:text-blue-500"><HiHome size={28} /></button>
        <button className="p-2 text-blue-500"><HiMagnifyingGlass size={28} /></button>
        <button onClick={() => router.push('/rewards')} className="p-2 text-gray-600 hover:text-blue-500"><HiOutlineTrophy size={28} /></button>
        <button onClick={() => router.push('/profile')} className="p-2 text-gray-600 hover:text-blue-500"><HiBars3 size={28} /></button>
      </nav>
    </main>
  );
}