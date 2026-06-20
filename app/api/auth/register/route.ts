import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password)
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })

    if (password.length < 8)
      return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })

    const exists = await db.user.findUnique({ where: { email } })
    if (exists)
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 })

    const hashed = await bcrypt.hash(password, 12)
    const user = await db.user.create({
      data: { name, email, password: hashed }
    })

    return NextResponse.json({ success: true, userId: user.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 })
  }
}
