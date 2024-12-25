"use client"

import { MessageCircle, Tags, PieChart } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MetricsGrid } from "@/components/metrics-grid"
import { Sidebar } from "@/components/sidebar"
import { InsightsSection } from "@/components/insights-section"
import { OrdersSection } from "@/components/orders-section"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f7f9fb]">
      <Sidebar />
      <div className="flex-1 ml-16 overflow-auto">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="summary" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="summary"
                  className="text-base data-[state=active]:bg-[#e6f7f3] data-[state=active]:text-teal-700 text-gray-500 rounded-lg px-6 py-2"
                >
                  <PieChart className="mr-2 h-4 w-4" />
                  Summary
                </TabsTrigger>
                <TabsTrigger
                  value="sales"
                  className="text-base data-[state=active]:bg-[#e6f7f3] data-[state=active]:text-teal-700 text-gray-500 rounded-lg px-6 py-2"
                >
                  <Tags className="mr-2 h-4 w-4" />
                  Sales
                </TabsTrigger>
                <TabsTrigger
                  value="chats"
                  className="text-base data-[state=active]:bg-[#e6f7f3] data-[state=active]:text-teal-700 text-gray-500 rounded-lg px-6 py-2"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chats
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="summary" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">At a glance</h2>
                <div className="flex items-center space-x-2">
                  <Select defaultValue="7days">
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Select a timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <MetricsGrid />
              <InsightsSection />
              <OrdersSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

