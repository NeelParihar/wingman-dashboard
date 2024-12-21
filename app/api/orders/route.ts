import { NextRequest, NextResponse } from 'next/server'
import { orders } from '@/lib/data'
import { SortField, SortOrder } from '@/types/order'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '5')
  const sortField = (searchParams.get('sortField') || 'date') as SortField
  const sortOrder = (searchParams.get('sortOrder') || 'desc') as SortOrder

  // Sort orders
  const sortedOrders = [...orders].sort((a, b) => {
    let aValue = a[sortField]
    let bValue = b[sortField]

    if (sortField === 'timeSpent') {
      // Convert "Xh Ym" to minutes for comparison
      aValue = convertTimeToMinutes(a.timeSpent)
      bValue = convertTimeToMinutes(b.timeSpent)
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1
    }
    return aValue < bValue ? 1 : -1
  })

  // Paginate orders
  const start = (page - 1) * pageSize
  const paginatedOrders = sortedOrders.slice(start, start + pageSize)
  const totalPages = Math.ceil(orders.length / pageSize)

  // wait for 1 second to simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({
    data: paginatedOrders,
    metadata: {
      currentPage: page,
      pageSize,
      totalPages,
      totalItems: orders.length,
    }
  })
}

function convertTimeToMinutes(timeSpent: string): number {
  const [hours, minutes] = timeSpent.split(' ')
  return parseInt(hours) * 60 + parseInt(minutes)
}

