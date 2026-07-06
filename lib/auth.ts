import { auth } from '@/auth'

export async function getSession() {
  return await auth()
}

export async function requireAuth() {
  const session = await auth()
  if (!session?.user) return null
  return session.user
}

export async function requireFaculty() {
  const session = await auth()
  if (!session?.user) return null
  if (session.user.role !== 'FACULTY' && session.user.role !== 'ADMIN') return null
  return session.user
}