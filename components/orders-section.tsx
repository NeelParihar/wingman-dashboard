"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Order, SortField, SortOrder } from "@/types/order"

interface OrdersResponse {
  data: Order[]
  metadata: {
    currentPage: number
    pageSize: number
    totalPages: number
    totalItems: number
  }
}

export function OrdersSection() {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sortField, setSortField] = useState<SortField>('date')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [currentPage, sortField, sortOrder])

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `/api/orders?page=${currentPage}&sortField=${sortField}&sortOrder=${sortOrder}`
      )
      const data: OrdersResponse = await response.json()
      setOrders(data.data)
      setTotalPages(data.metadata.totalPages)
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    }
    setIsLoading(false)
  }

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('desc')
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <div className="flex items-center gap-2">
          <Select
            value={`${sortField}-${sortOrder}`}
            onValueChange={(value) => {
              const [field, order] = value.split('-') as [SortField, SortOrder]
              setSortField(field)
              setSortOrder(order)
            }}
            disabled={isLoading}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date (Newest first)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest first)</SelectItem>
              <SelectItem value="orderValue-desc">Order Value (High to Low)</SelectItem>
              <SelectItem value="orderValue-asc">Order Value (Low to High)</SelectItem>
              <SelectItem value="commission-desc">Commission (High to Low)</SelectItem>
              <SelectItem value="commission-asc">Commission (Low to High)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Product</TableHead>
              <TableHead 
                className="text-muted-foreground cursor-pointer"
                onClick={() => !isLoading && handleSort('date')}
              >
                Date
                {sortField === 'date' && (
                  <ChevronDown className={`ml-1 h-4 w-4 inline-block transform ${
                    sortOrder === 'asc' ? 'rotate-180' : ''
                  }`} />
                )}
              </TableHead>
              <TableHead className="text-muted-foreground">Time spent</TableHead>
              <TableHead 
                className="text-muted-foreground cursor-pointer"
                onClick={() => !isLoading && handleSort('orderValue')}
              >
                Order Value
                {sortField === 'orderValue' && (
                  <ChevronDown className={`ml-1 h-4 w-4 inline-block transform ${
                    sortOrder === 'asc' ? 'rotate-180' : ''
                  }`} />
                )}
              </TableHead>
              <TableHead 
                className="text-muted-foreground cursor-pointer"
                onClick={() => !isLoading && handleSort('commission')}
              >
                Commission
                {sortField === 'commission' && (
                  <ChevronDown className={`ml-1 h-4 w-4 inline-block transform ${
                    sortOrder === 'asc' ? 'rotate-180' : ''
                  }`} />
                )}
              </TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={order.product.image}
                          alt={order.product.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <span className="font-medium">{order.product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{new Date(order.date).toLocaleDateString()}</div>
                      <div className="text-sm text-muted-foreground">{order.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.timeSpent}</TableCell>
                  <TableCell>{formatCurrency(order.orderValue)}</TableCell>
                  <TableCell>{formatCurrency(order.commission)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" className="hover:bg-transparent hover:text-primary">
                      View Chat
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || isLoading}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || isLoading}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

