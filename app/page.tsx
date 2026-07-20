"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push('/home');
      } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <form onSubmit={handleLogin} className="relative z-10 w-full max-w-sm space-y-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
           <div className="w-60 h-30 ">
               <img src="/dadwa.png" alt="GoFeed Platform" className=" opacity-95" />
           </div>
         
           <h1 className="text-3xl font-bold tracking-tight"></h1>
           <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-1"></p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Welcome!</h2>
          <p className="text-gray-500 text-sm">welcome to PREDETECT.</p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Username</label>
            <input 
              type="text" 
              placeholder="ชื่อผู้ใช้งาน" 
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none backdrop-blur-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-400 ml-1">Password</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none backdrop-blur-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <AiFillEyeInvisible className="absolute right-4 top-5 text-gray-500" size={20} />
            </div>
          </div>
        </div>

        <div className="text-right text-[11px] text-blue-700 font-bold cursor-pointer hover:underline">
          หากลืมรหัสผ่าน
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-800 to-blue-900 font-bold text-white shadow-2xl shadow-blue-900/50 hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'ลงทะเบียนเข้าใช้'}
        </button>

        {/* Social Login */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-500 text-[10px] uppercase">Or continue with</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="flex justify-center gap-4">
          {[FcGoogle, FaApple, FaFacebook].map((Icon, i) => (
            <button type="button" key={i} className="w-16 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
              <Icon size={24} />
            </button>
          ))}
        </div>
      </form>
    </main>
  );
}