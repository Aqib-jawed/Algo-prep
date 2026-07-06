import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await db.user.findUnique({
          where: { email: credentials.email as string }
        })
        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )
        if (!isValid) return null

        return { id: user.id, name: user.name, email: user.email, image: user.image, role: user.role }
      }
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    session({ session, token, user }) {
      if (session.user) {
        session.user.id = token?.sub ?? user?.id
        session.user.role = (token?.role as string) ?? 'STUDENT'
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        const dbUser = await db.user.findUnique({ where: { id: user.id }, select: { role: true } })
        token.role = dbUser?.role ?? 'STUDENT'
      }
      return token
    },
  },
  pages: { signIn: '/login', error: '/login' },
})