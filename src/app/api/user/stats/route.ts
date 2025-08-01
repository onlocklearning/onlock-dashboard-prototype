import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getUserStats, updateUserStats, addCoins, addXP, updateStreak } from '@/lib/user'

export async function GET() {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const stats = await getUserStats(session.user.id)
    
    if (!stats) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error getting user stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { action, amount, updates } = body

    let result

    switch (action) {
      case 'addCoins':
        result = await addCoins(session.user.id, amount)
        break
      case 'addXP':
        result = await addXP(session.user.id, amount)
        break
      case 'updateStreak':
        result = await updateStreak(session.user.id, amount)
        break
      case 'updateStats':
        result = await updateUserStats(session.user.id, updates)
        break
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    if (result === null) {
      return NextResponse.json({ error: 'Failed to update stats' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Error updating user stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 