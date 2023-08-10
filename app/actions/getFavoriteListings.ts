import prisma from '@/app/libs/prismadb'

import getCurrentUser from './getCurrentUser';

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export async function getFavoriteListings() {
  const currentUser = await getCurrentUser()

  if(!currentUser) {
    return []
  }

  try{
    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])]
        }
      },
    })

    return favorites
  } catch(error: any) {
    throw new Error(error)
  }
}