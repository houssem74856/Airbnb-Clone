import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/app/libs/prismadb'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try{
    const session = await getSession()

    if(!session?.user?.email) return;

    const currentUser = prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    })

    if(!currentUser) return;

    return currentUser;
  } catch(error: any) {
    return null
  }
}