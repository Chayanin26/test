import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // ตรงนี้คือจุดเชื่อมต่อฐานข้อมูลจริง
  // ตัวอย่าง: ตรวจสอบ username/password ในฐานข้อมูล (เช่น MongoDB หรือ PostgreSQL)
  if (username === "admin" && password === "1234") {
    return NextResponse.json({ 
      success: true, 
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." 
    });
  }

  return NextResponse.json(
    { message: "Invalid credentials" }, 
    { status: 401 }
  );
}