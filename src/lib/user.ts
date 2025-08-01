import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export interface UserStats {
  coins: number
  xp: number
  streak: number
  isPremium: boolean
}

export async function getUserStats(userId: string): Promise<UserStats | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        coins: true,
        xp: true,
        streak: true,
        isPremium: true,
      }
    })
    
    return user
  } catch (error) {
    console.error('Error getting user stats:', error)
    return null
  }
}

export async function updateUserStats(
  userId: string, 
  updates: Partial<UserStats>
): Promise<UserStats | null> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: updates,
      select: {
        coins: true,
        xp: true,
        streak: true,
        isPremium: true,
      }
    })
    
    return user
  } catch (error) {
    console.error('Error updating user stats:', error)
    return null
  }
}

export async function addCoins(userId: string, amount: number): Promise<number | null> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        coins: {
          increment: amount
        }
      },
      select: { coins: true }
    })
    
    return user.coins
  } catch (error) {
    console.error('Error adding coins:', error)
    return null
  }
}

export async function addXP(userId: string, amount: number): Promise<number | null> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        xp: {
          increment: amount
        }
      },
      select: { xp: true }
    })
    
    return user.xp
  } catch (error) {
    console.error('Error adding XP:', error)
    return null
  }
}

export async function updateStreak(userId: string, newStreak: number): Promise<number | null> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { streak: newStreak },
      select: { streak: true }
    })
    
    return user.streak
  } catch (error) {
    console.error('Error updating streak:', error)
    return null
  }
}

export async function upgradeToPremium(userId: string): Promise<boolean> {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { isPremium: true }
    })
    
    return true
  } catch (error) {
    console.error('Error upgrading to premium:', error)
    return false
  }
} 