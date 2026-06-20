import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import AuthForm from './AuthForm'

export const metadata = { title: 'Sign in | DSA Prep' }

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { tab?: string; error?: string; callbackUrl?: string }
}) {
  const session = await auth()
  if (session?.user) redirect(searchParams.callbackUrl ?? '/')
  return (
    <main style={{ minHeight:'100vh', background:'#0d0d0d', display:'flex',
      alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <AuthForm
        defaultTab={searchParams.tab === 'register' ? 'register' : 'login'}
        errorParam={searchParams.error ?? null}
        callbackUrl={searchParams.callbackUrl ?? '/'}
      />
    </main>
  )
}
