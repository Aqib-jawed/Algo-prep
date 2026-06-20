import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { db } from '@/lib/db'
import type { Metadata } from 'next'
import { SignOutButton, DeleteAccountButton } from './AccountActions'

export const metadata: Metadata = {
  title: 'Account | Algo Prep',
  description: 'Manage your Algo Prep account and preferences.',
}

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')
  const user = await db.user.findUnique({ where: { id: session.user.id } })
  if (!user) redirect('/login')

  const initials = user.name?.charAt(0)?.toUpperCase() ?? user.email?.charAt(0)?.toUpperCase() ?? '?'
  const memberSince = new Date(user.createdAt).toLocaleDateString('en-IN')

  return (
    <div style={{ maxWidth: 600 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>Account</h1>

      {/* Profile card */}
      <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: '#1c1c1c',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#f97316', fontSize: 18, fontWeight: 600
          }}>
            {initials}
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 15 }}>{user.name ?? 'No name'}</p>
            <p style={{ color: '#a3a3a3', fontSize: 13 }}>{user.email}</p>
            <p style={{ color: '#666', fontSize: 12, marginTop: 2 }}>Member since {memberSince}</p>
          </div>
        </div>
      </div>

      {/* Sign out */}
      <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 12, padding: 20, marginBottom: 20 }}>
        <p style={{ fontSize: 14, color: '#a3a3a3', marginBottom: 12 }}>Sign out of your account</p>
        <SignOutButton />
      </div>

      {/* Danger zone */}
      <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 12, padding: 20 }}>
        <p style={{ fontSize: 14, color: '#ff375f', fontWeight: 600, marginBottom: 4 }}>Danger Zone</p>
        <p style={{ fontSize: 13, color: '#a3a3a3', marginBottom: 12 }}>Permanently delete your account and all associated data. This action cannot be undone.</p>
        <DeleteAccountButton />
      </div>
    </div>
  )
}
