"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  HiHome, HiMagnifyingGlass, HiOutlineTrophy, HiBars3, 
  HiArrowLeft, HiStar, HiClock, HiClipboardDocumentCheck,
  HiChevronRight, HiHeart, HiArrowRight, HiArrowRightOnRectangle
} from 'react-icons/hi2';

export default function ProfilePage() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<'menu' | 'history' | 'checkup' | 'annual'>('menu');

  const getMockImg = (text: string, color: string = "blue") => 
    `https://placehold.co/600x400/${color}/white?text=${text.replace(/ /g, '+')}`;

  const MainMenu = () => (
    <div className="space-y-6">
      <header className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full mb-4 flex items-center justify-center text-3xl font-bold shadow-lg">C</div>
        <h1 className="text-2xl font-bold">CHAI 56</h1>
      </header>

      <div className="space-y-3">
        {[
          { label: "ประวัติการจองคิว", view: 'history' },
          { label: "ตรวจสุขภาพ (รายละเอียด)", view: 'checkup' },
          { label: "โปรแกรมตรวจสุขภาพประจำปี", view: 'annual' },
        ].map((item) => (
          <button key={item.view} onClick={() => setCurrentView(item.view as any)} className="w-full p-5 bg-[#0d0d0d] border border-gray-800 rounded-2xl flex justify-between items-center hover:border-blue-500 transition active:scale-[0.98]">
            <span className="font-medium">{item.label}</span>
            <HiChevronRight />
          </button>
        ))}
        
        <button onClick={() => router.push('/')} className="w-full p-5 mt-6 border border-red-900/30 rounded-2xl flex justify-between items-center text-red-500 hover:bg-red-950/20 transition">
          <span className="font-medium">ออกจากระบบ</span>
          <HiArrowRightOnRectangle size={20} />
        </button>
      </div>
    </div>
  );

  const HistoryView = () => (
    <div className="space-y-4 pb-20">
      {[
        { title: "นัดหมายการตรวจเลือด", hospital: "โรงพยาบาลสมิติเวช" },
        { title: "นัดหมายเอกซเรย์", hospital: "ศูนย์รังสีวินิจฉัย" },
        { title: "นัดหมายตรวจสุขภาพประจำปี", hospital: "โรงพยาบาลบีแคร์" }
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-3xl p-3 flex gap-4 text-black items-center shadow-lg">
          <div className="w-24 h-24 rounded-2xl overflow-hidden relative bg-gray-200">
            {/* เปลี่ยนเป็น img tag ปกติ */}
            <img src={getMockImg("History")} className="w-full h-full object-cover" alt="History" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm">{item.title}</h4>
            <p className="text-[10px] text-gray-500">{item.hospital}</p>
            <button className="bg-cyan-600 text-white text-[10px] px-4 py-1 rounded-lg mt-2">ดูรายละเอียด</button>
          </div>
        </div>
      ))}
    </div>
  );

  const CheckupDetail = () => (
    <div className="space-y-6 pb-32">
      <div className="relative rounded-3xl overflow-hidden h-64 border border-gray-800 bg-gray-800">
        <img src={getMockImg("Checkup", "green")} className="w-full h-full object-cover" alt="Checkup" />
        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full text-red-500 shadow-xl"><HiHeart size={24} /></button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">แพ็กเกจตรวจคัดกรองโรคร้าย</h2>
        <p className="text-gray-400 text-sm">โปรแกรมตรวจคัดกรองสุขภาพเชิงลึก พร้อมวิเคราะห์ผลจากผู้เชี่ยวชาญ</p>
      </div>
      <div className="fixed bottom-24 left-6 right-6 z-40 bg-[#050505]/90 backdrop-blur-md p-4 rounded-3xl border border-gray-800 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">ราคา</p>
          <p className="text-2xl font-bold">$ 4,900</p>
        </div>
        <button className="bg-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
          จองคิว <HiArrowRight />
        </button>
      </div>
    </div>
  );

  const AnnualProgram = () => (
    <div className="space-y-6 pb-20">
      <div className="relative rounded-3xl overflow-hidden h-80 bg-gray-800">
        <img src={getMockImg("Annual", "purple")} className="w-full h-full object-cover" alt="Annual" />
      </div>
      <h2 className="text-2xl font-bold">โปรแกรมตรวจสุขภาพประจำปี</h2>
      <p className="text-gray-400 text-sm">ตรวจครบทุกระบบร่างกาย เพื่อความมั่นใจในสุขภาพที่ดีของคุณตลอดปี</p>
      <button className="w-full bg-blue-600 py-5 rounded-2xl font-bold shadow-lg shadow-blue-600/40">ยืนยันการจองคิว</button>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans pb-32">
      {/* ส่วนอื่นๆ เหมือนเดิม */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => currentView === 'menu' ? router.back() : setCurrentView('menu')} className="p-2 bg-[#0d0d0d] rounded-full border border-gray-800">
          <HiArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold capitalize">{currentView === 'menu' ? 'Profile' : currentView}</h1>
      </div>

      {currentView === 'menu' && <MainMenu />}
      {currentView === 'history' && <HistoryView />}
      {currentView === 'checkup' && <CheckupDetail />}
      {currentView === 'annual' && <AnnualProgram />}

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/90 backdrop-blur-xl border-t border-gray-800 p-4 flex justify-around z-50">
        <button onClick={() => router.push('/home')} className="p-2 text-gray-600"><HiHome size={28} /></button>
        <button onClick={() => router.push('/search')} className="p-2 text-gray-600"><HiMagnifyingGlass size={28} /></button>
        <button onClick={() => router.push('/rewards')} className="p-2 text-gray-600"><HiOutlineTrophy size={28} /></button>
        <button className="p-2 text-blue-500"><HiBars3 size={28} /></button>
      </nav>
    </main>
  );
}