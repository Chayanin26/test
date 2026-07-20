"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { HiHome, HiMagnifyingGlass, HiOutlineTrophy, HiBars3, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    { title: "ปรึกษาโรคทั่วไป", subtitle: "Primary Care", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
    { title: "แผนกมะเร็ง", subtitle: "Oncology Center", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
    { title: "แพ็กเกจตรวจโรค", subtitle: "Health Check-up", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
    { title: "ประวัติส่วนบุคคล", subtitle: "Personal History", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
    { title: "คลินิกเฉพาะทาง", subtitle: "Specialist Clinics", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-[#0d0d0d] rounded-full border border-gray-800">
          <HiArrowLeft size={20} />
        </button>
        <div>
          <p className="text-[10px] uppercase text-gray-500 tracking-widest">Clinical Services</p>
          <h1 className="text-xl font-bold">เข้าปรึกษาตรวจโรค</h1>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((s, i) => (
          <div key={i} className="relative h-28 rounded-3xl overflow-hidden border border-gray-800 group cursor-pointer hover:border-blue-500 transition shadow-lg">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
            
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-6">
              <div className="flex-1">
                <p className="text-[10px] text-blue-400 uppercase tracking-widest">{s.subtitle}</p>
                <h3 className="font-bold text-lg">{s.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 transition">
                <HiArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/90 backdrop-blur-xl border-t border-gray-800 p-4 flex justify-around z-50">
        <button onClick={() => router.push('/home')} className="p-2 text-gray-600 hover:text-blue-500"><HiHome size={28} /></button>
        <button onClick={() => router.push('/search')} className="p-2 text-gray-600 hover:text-blue-500"><HiMagnifyingGlass size={28} /></button>
        <button onClick={() => router.push('/rewards')} className="p-2 text-gray-600 hover:text-blue-500"><HiOutlineTrophy size={28} /></button>
        <button onClick={() => router.push('/profile')} className="p-2 text-gray-600 hover:text-blue-500"><HiBars3 size={28} /></button>
      </nav>
    </main>
  );
}