"use client"

import { useState, useEffect, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface AuthFormProps {
  defaultTab: 'login' | 'register'
  errorParam: string | null
  callbackUrl: string
}

function getStrength(pw: string): 0 | 1 | 2 | 3 {
  if (!pw) return 0
  const hasUpper = /[A-Z]/.test(pw)
  const hasNumber = /[0-9]/.test(pw)
  const hasSymbol = /[^A-Za-z0-9]/.test(pw)
  const hasLetter = /[a-zA-Z]/.test(pw)
  if (pw.length < 8) return 1
  const types = [hasLetter, hasNumber, hasSymbol].filter(Boolean).length
  if (types <= 1) return 1
  if (hasUpper && hasNumber && hasSymbol) return 3
  return 2
}

const strengthLabel = ['', 'Weak', 'Fair', 'Strong']
const strengthColor = ['', '#ff375f', '#ffc01e', '#00b8a3']

export default function AuthForm({ defaultTab, errorParam, callbackUrl }: AuthFormProps) {
  const router = useRouter()
  const [tab, setTab] = useState<'login' | 'register'>(defaultTab)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    if (!errorParam) return
    const map: Record<string, string> = {
      OAuthAccountNotLinked: 'This email is already registered. Sign in with email instead.',
      CredentialsSignin: 'Invalid email or password.',
    }
    setError(map[errorParam] || 'Something went wrong. Try again.')
  }, [errorParam])

  function switchTab(t: 'login' | 'register') {
    setTab(t)
    setError('')
    setSuccess('')
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  function validate(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (tab === 'login') {
      if (!email || !emailRegex.test(email)) { setError('Please enter a valid email address.'); return false }
      if (!password) { setError('Password is required.'); return false }
    } else {
      if (!name || name.trim().length < 2) { setError('Name must be at least 2 characters.'); return false }
      if (!email || !emailRegex.test(email)) { setError('Please enter a valid email address.'); return false }
      if (password.length < 8) { setError('Password must be at least 8 characters.'); return false }
      if (getStrength(password) < 1) { setError('Password is too weak.'); return false }
      if (confirmPassword !== password) { setError('Passwords do not match.'); return false }
    }
    return true
  }

  async function handleLogin() {
    setLoading(true)
    setError('')
    const result = await signIn('credentials', {
      email, password, redirect: false, callbackUrl
    })
    if (result?.error) {
      setError('Invalid email or password.')
      setLoading(false)
    } else {
      router.push(callbackUrl)
      router.refresh()
    }
  }

  async function handleRegister() {
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error); setLoading(false); return }
    setSuccess('Account created! Signing you in...')
    await signIn('credentials', { email, password, callbackUrl, redirect: false })
    router.push(callbackUrl)
    router.refresh()
  }

  async function handleGoogle() {
    setLoading(true)
    await signIn('google', { callbackUrl })
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    if (!validate()) return
    if (tab === 'login') handleLogin()
    else handleRegister()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSubmit()
  }

  const strength = getStrength(password)

  const inputStyle: React.CSSProperties = {
    background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: 8,
    padding: '9px 12px', fontSize: 13, color: '#f5f5f5', width: '100%',
    outline: 'none', transition: 'border-color 150ms', fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 11, color: '#a3a3a3', marginBottom: 5, display: 'block',
  }

  const EyeIcon = ({ show, onClick }: { show: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
        background: 'none', border: 'none', cursor: 'pointer', color: '#525252',
        padding: 0, display: 'flex', alignItems: 'center',
      }}
    >
      {show ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )}
    </button>
  )

  return (
    <div style={{
      background: '#141414', border: '1px solid #2a2a2a', borderRadius: 12,
      padding: '28px 28px', width: '100%', maxWidth: 380, margin: '0 auto',
    }}>
      {/* Header */}
      <p style={{ fontSize: 20, fontWeight: 500, color: '#f97316', margin: 0, marginBottom: 2 }}>DSA Prep</p>
      <p style={{ fontSize: 13, color: '#525252', margin: 0, marginBottom: 20 }}>Crack the pattern.</p>

      {/* Tabs */}
      <div style={{ display: 'flex' }}>
        <button
          type="button"
          onClick={() => switchTab('login')}
          style={{
            flex: 1, padding: '8px 0', background: 'none', border: 'none',
            borderBottom: `2px solid ${tab === 'login' ? '#f97316' : '#2a2a2a'}`,
            color: tab === 'login' ? '#f97316' : '#525252',
            fontWeight: tab === 'login' ? 500 : 400,
            fontSize: 14, cursor: 'pointer', transition: 'all 150ms', fontFamily: 'inherit',
          }}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => switchTab('register')}
          style={{
            flex: 1, padding: '8px 0', background: 'none', border: 'none',
            borderBottom: `2px solid ${tab === 'register' ? '#f97316' : '#2a2a2a'}`,
            color: tab === 'register' ? '#f97316' : '#525252',
            fontWeight: tab === 'register' ? 500 : 400,
            fontSize: 14, cursor: 'pointer', transition: 'all 150ms', fontFamily: 'inherit',
          }}
        >
          Create account
        </button>
      </div>
      <div style={{ height: 1, background: '#2a2a2a', marginBottom: 20 }} />

      {/* Error Banner */}
      {error && (
        <div style={{
          background: '#1a0505', border: '1px solid #ff375f44', borderRadius: 8,
          padding: '8px 12px', fontSize: 12, color: '#ff375f', marginBottom: 12,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style={{ flex: 1 }}>{error}</span>
          <button type="button" onClick={() => setError('')} style={{
            background: 'none', border: 'none', color: '#ff375f', cursor: 'pointer',
            padding: 0, display: 'flex', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      )}

      {/* Success Banner */}
      {success && (
        <div style={{
          background: '#041a0e', border: '1px solid #00b8a344', borderRadius: 8,
          padding: '8px 12px', fontSize: 12, color: '#00b8a3', marginBottom: 12,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span style={{ flex: 1 }}>{success}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Register: Name field */}
        {tab === 'register' && (
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Full name</label>
            <input
              type="text"
              placeholder="Aqib Jawed"
              autoComplete="name"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#f97316'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: 12 }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#f97316'}
            onBlur={e => e.target.style.borderColor = '#2a2a2a'}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: tab === 'login' ? 4 : 12 }}>
          <label style={labelStyle}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ ...inputStyle, paddingRight: 36 }}
              onFocus={e => e.target.style.borderColor = '#f97316'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
            <EyeIcon show={showPassword} onClick={() => setShowPassword(p => !p)} />
          </div>

          {/* Strength bars (register only) */}
          {tab === 'register' && (
            <>
              <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{
                    flex: 1, height: 3, borderRadius: 2,
                    background: i <= strength ? strengthColor[strength] : '#2a2a2a',
                    transition: 'background 150ms',
                  }} />
                ))}
              </div>
              {strength > 0 && (
                <p style={{
                  fontSize: 11, color: strengthColor[strength], margin: '3px 0 0',
                  textAlign: 'right',
                }}>
                  {strengthLabel[strength]}
                </p>
              )}
              <p style={{ fontSize: 11, color: '#525252', margin: '3px 0 0' }}>
                At least 8 characters
              </p>
            </>
          )}
        </div>

        {/* Forgot password (login only) */}
        {tab === 'login' && (
          <p
            style={{
              fontSize: 12, color: '#f97316', textAlign: 'right', margin: '0 0 12px',
              cursor: 'pointer',
            }}
            onClick={() => setError('Password reset coming soon. Use Google sign-in for now.')}
          >
            Forgot password?
          </p>
        )}

        {/* Confirm Password (register only) */}
        {tab === 'register' && (
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Confirm password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ ...inputStyle, paddingRight: 36 }}
                onFocus={e => e.target.style.borderColor = '#f97316'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
              <EyeIcon show={showConfirm} onClick={() => setShowConfirm(p => !p)} />
            </div>
            {confirmPassword.length > 0 && confirmPassword !== password && (
              <p style={{ fontSize: 11, color: '#ff375f', margin: '4px 0 0' }}>
                Passwords do not match
              </p>
            )}
            {confirmPassword.length > 0 && confirmPassword === password && (
              <p style={{ fontSize: 11, color: '#00b8a3', margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Passwords match
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%', height: 44, background: '#f97316', color: '#fff',
            border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 500,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontFamily: 'inherit', transition: 'opacity 150ms',
          }}
        >
          {loading ? (
            <>
              <div style={{
                width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%',
                animation: 'spin 0.6s linear infinite',
              }} />
              Please wait...
            </>
          ) : (
            tab === 'login' ? 'Sign in' : 'Create account'
          )}
        </button>
      </form>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
        <span style={{ fontSize: 12, color: '#525252', padding: '0 10px' }}>or</span>
        <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
      </div>

      {/* Google Button */}
      <button
        type="button"
        onClick={handleGoogle}
        disabled={loading}
        style={{
          width: '100%', height: 42, background: '#fff', color: '#111',
          border: '1px solid #2a2a2a', borderRadius: 8, fontSize: 13,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1, fontFamily: 'inherit', transition: 'opacity 150ms',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 48 48">
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Continue with Google
      </button>

      {/* Footer */}
      <p style={{ fontSize: 11, color: '#525252', textAlign: 'center', margin: '16px 0 0' }}>
        {tab === 'login' ? (
          <>No account?{' '}<span style={{ color: '#f97316', cursor: 'pointer' }} onClick={() => switchTab('register')}>Create one</span></>
        ) : (
          <>Have an account?{' '}<span style={{ color: '#f97316', cursor: 'pointer' }} onClick={() => switchTab('login')}>Sign in</span></>
        )}
      </p>
      <p style={{ fontSize: 11, color: '#525252', textAlign: 'center', margin: '8px 0 0' }}>
        By continuing you agree to our Terms and Privacy
      </p>

      {/* Spinner keyframes */}
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
