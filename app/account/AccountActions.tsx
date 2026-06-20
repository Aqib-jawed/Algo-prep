"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      style={{
        background: '#1c1c1c', color: '#e5e5e5', border: '1px solid #2a2a2a',
        borderRadius: 8, padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontWeight: 500
      }}
    >
      Sign out
    </button>
  );
}

export function DeleteAccountButton() {
  const [confirming, setConfirming] = useState(false);

  async function handleDelete() {
    const res = await fetch('/api/user/delete', { method: 'POST' });
    if (res.ok) {
      await signOut({ callbackUrl: '/' });
    }
  }

  if (!confirming) {
    return (
      <button
        onClick={() => setConfirming(true)}
        style={{
          background: 'none', color: '#ff375f', border: '1px solid #ff375f',
          borderRadius: 8, padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontWeight: 500
        }}
      >
        Delete account
      </button>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button
        onClick={handleDelete}
        style={{
          background: '#ff375f', color: '#fff', border: 'none',
          borderRadius: 8, padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontWeight: 500
        }}
      >
        Confirm delete
      </button>
      <button
        onClick={() => setConfirming(false)}
        style={{
          background: 'none', color: '#a3a3a3', border: '1px solid #2a2a2a',
          borderRadius: 8, padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontWeight: 500
        }}
      >
        Cancel
      </button>
    </div>
  );
}
