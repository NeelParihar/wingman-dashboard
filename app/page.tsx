"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MetricsGrid } from "@/components/metrics-grid";
import { Sidebar } from "@/components/sidebar";
import { InsightsSection } from "@/components/insights-section";
import { OrdersSection } from "@/components/orders-section";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f7f9fb]">
      <Sidebar />
      <div className="flex-1 ml-16 overflow-auto">
        <div className="flex-1 space-y-4 pt-6 bg-white">
          <Tabs defaultValue="summary" className="w-full">
            <div className="flex items-center justify-between mb-4  px-8 pb-6 border-b border-gray-200">
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="summary"
                  className="text-base data-[state=active]:bg-[#CCFBEF] data-[state=active]:text-black text-gray-500 rounded-full px-4 py-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM18.125 10C18.1256 11.7837 17.5393 13.518 16.4564 14.9354C15.3735 16.3528 13.8543 17.3745 12.1332 17.8428C10.4121 18.3111 8.58472 18.2 6.93298 17.5267C5.28125 16.8534 3.89698 15.6553 2.99374 14.1172C2.95164 14.0461 2.92403 13.9675 2.91251 13.8857C2.901 13.8039 2.9058 13.7207 2.92665 13.6407C2.9475 13.5608 2.98398 13.4859 3.03398 13.4201C3.08398 13.3544 3.14651 13.2992 3.21796 13.2578L9.37499 9.67422V2.5C9.37499 2.33424 9.44084 2.17527 9.55805 2.05806C9.67526 1.94085 9.83423 1.875 9.99999 1.875C11.4179 1.87572 12.8109 2.24729 14.0408 2.95282C15.2706 3.65834 16.2946 4.67328 17.0109 5.89688C17.0195 5.90938 17.0273 5.92188 17.0351 5.93516C17.043 5.94844 17.0508 5.96406 17.0578 5.97812C17.7588 7.20247 18.1268 8.58916 18.125 10Z"
                      fill="#212636"
                    />
                  </svg>
                  Summary
                </TabsTrigger>
                <TabsTrigger
                  value="sales"
                  className="text-base data-[state=active]:bg-[#CCFBEF] data-[state=active]:text-black text-gray-500 rounded-full px-4 py-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0086 10.625L11.25 2.86641C11.1343 2.74983 10.9967 2.65741 10.845 2.59451C10.6933 2.5316 10.5306 2.49948 10.3664 2.50001H3.125C2.95924 2.50001 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95925 2.5 3.12501V10.3664C2.49948 10.5306 2.5316 10.6933 2.5945 10.845C2.6574 10.9967 2.74983 11.1344 2.86641 11.25L10.625 19.0086C10.7411 19.1247 10.8789 19.2168 11.0306 19.2796C11.1822 19.3425 11.3448 19.3748 11.509 19.3748C11.6732 19.3748 11.8357 19.3425 11.9874 19.2796C12.1391 19.2168 12.2769 19.1247 12.393 19.0086L19.0086 12.393C19.1247 12.2769 19.2168 12.1391 19.2796 11.9874C19.3425 11.8357 19.3748 11.6732 19.3748 11.509C19.3748 11.3448 19.3425 11.1822 19.2796 11.0306C19.2168 10.8789 19.1247 10.7411 19.0086 10.625ZM6.5625 7.50001C6.37708 7.50001 6.19582 7.44502 6.04165 7.34201C5.88748 7.239 5.76732 7.09258 5.69636 6.92127C5.62541 6.74997 5.60684 6.56147 5.64301 6.37961C5.67919 6.19775 5.76848 6.03071 5.89959 5.89959C6.0307 5.76848 6.19775 5.67919 6.3796 5.64302C6.56146 5.60685 6.74996 5.62541 6.92127 5.69637C7.09257 5.76733 7.23899 5.88749 7.342 6.04166C7.44502 6.19583 7.5 6.37709 7.5 6.56251C7.5 6.81115 7.40123 7.0496 7.22541 7.22542C7.0496 7.40123 6.81114 7.50001 6.5625 7.50001Z"
                      fill="#8A94A6"
                    />
                  </svg>
                  Sales
                </TabsTrigger>
                <TabsTrigger
                  value="chats"
                  className="text-base data-[state=active]:bg-[#CCFBEF] data-[state=active]:text-black text-gray-500 rounded-full px-6 py-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3125 1.875C8.24119 1.87727 6.25538 2.70111 4.79074 4.16574C3.32611 5.63038 2.50227 7.61619 2.5 9.6875V16.2758C2.50041 16.6003 2.62953 16.9115 2.85902 17.141C3.08852 17.3705 3.39966 17.4996 3.72422 17.5H10.3125C12.3845 17.5 14.3716 16.6769 15.8368 15.2118C17.3019 13.7466 18.125 11.7595 18.125 9.6875C18.125 7.6155 17.3019 5.62836 15.8368 4.16323C14.3716 2.6981 12.3845 1.875 10.3125 1.875ZM12.5 11.875H7.5C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25C6.875 11.0842 6.94085 10.9253 7.05806 10.8081C7.17527 10.6908 7.33424 10.625 7.5 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 9.375H7.5C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75C6.875 8.58424 6.94085 8.42527 7.05806 8.30806C7.17527 8.19085 7.33424 8.125 7.5 8.125H12.5C12.6658 8.125 12.8247 8.19085 12.9419 8.30806C13.0592 8.42527 13.125 8.58424 13.125 8.75C13.125 8.91576 13.0592 9.07473 12.9419 9.19194C12.8247 9.30915 12.6658 9.375 12.5 9.375Z"
                      fill="#8A94A6"
                    />
                  </svg>
                  Chats
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="summary" className="space-y-6 px-8 pt-6">
              <div className="flex flex-col gap-14 rounded-[20px] shadow-cardShadow  bg-white p-6 border border-gray-200">
                <div className="">
                  <div className="flex items-center justify-between pb-4">
                    <h2 className="text-2xl font-medium text-zinc-800 tracking-tight">
                      At a glance
                    </h2>
                    <div className="flex items-center space-x-2">
                      <Select defaultValue="7days">
                        <SelectTrigger className="w-[100px] bg-white">
                          <SelectValue placeholder="Select a timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7days">7 days</SelectItem>
                          <SelectItem value="30days">30 days</SelectItem>
                          <SelectItem value="90days">90 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <MetricsGrid />
                </div>

                <InsightsSection />
                <OrdersSection />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
