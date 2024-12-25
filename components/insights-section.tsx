"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const weeklyData = [
  { day: "Mon", incoming: 32, answered: 28, expertsOnline: true },
  { day: "Tue", incoming: 35, answered: 30, expertsOnline: true },
  { day: "Wed", incoming: 38, answered: 32, expertsOnline: true },
  { day: "Thu", incoming: 45, answered: 40, expertsOnline: false },
  { day: "Fri", incoming: 42, answered: 35, expertsOnline: true },
  { day: "Sat", incoming: 48, answered: 38, expertsOnline: true },
  { day: "Sun", incoming: 50, answered: 36, expertsOnline: true },
];

const comparisonData = [
  {
    period: "This week",
    consultations: 22,
    ordersClosed: 18,
  },
  {
    period: "Last week",
    consultations: 15,
    ordersClosed: 12,
  },
];

export function InsightsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Insights</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        <Card className="p-6 md:col-span-2 lg:col-span-6">
          <div className="font-medium text-muted-foreground mb-4">
            CONSULTATIONS
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666" }}
                />
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="answered"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-slate-400"></div>
              <span className="text-muted-foreground">Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-emerald-500"></div>
              <span className="text-muted-foreground">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-100"></div>
              <span className="text-muted-foreground">Experts online</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:col-span-2 lg:col-span-3">
          <div className="font-medium text-muted-foreground mb-4">
            VS PAST PERIOD
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="period"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666" }}
                />
                <Bar dataKey="consultations" fill="#86efac" />
                <Bar dataKey="ordersClosed" fill="#065f46" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-200"></div>
              <span className="text-muted-foreground">Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-800"></div>
              <span className="text-muted-foreground">Orders closed</span>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 text-white md:col-span-2 lg:col-span-3 relative"
          style={{
            background: " linear-gradient(180deg, #15B79F 0%, #0E9382 100%)",
          }}
        >
          <div className="font-medium mb-4 ">FORECASTS</div>

          <svg
            width="260"
            height="435"
            viewBox="0 0 260 435"
            className="absolute top-0 left-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <g filter="url(#filter0_d_1_3551)">
                <circle
                  cx="36.9748"
                  cy="37.9746"
                  r="280.703"
                  transform="rotate(135 36.9748 37.9746)"
                  fill="url(#paint0_linear_1_3551)"
                  shapeRendering="crispEdges"
                />
                <circle
                  cx="36.9748"
                  cy="37.9746"
                  r="280.328"
                  transform="rotate(135 36.9748 37.9746)"
                  stroke="url(#paint1_linear_1_3551)"
                  strokeWidth="0.75"
                  shapeRendering="crispEdges"
                />
              </g>
              <g filter="url(#filter1_d_1_3551)">
                <circle
                  cx="36.9742"
                  cy="37.9746"
                  r="183.067"
                  transform="rotate(135 36.9742 37.9746)"
                  fill="url(#paint2_linear_1_3551)"
                  shapeRendering="crispEdges"
                />
                <circle
                  cx="36.9742"
                  cy="37.9746"
                  r="182.692"
                  transform="rotate(135 36.9742 37.9746)"
                  stroke="url(#paint3_linear_1_3551)"
                  strokeWidth="0.75"
                  shapeRendering="crispEdges"
                />
              </g>
              <g opacity="0.5" filter="url(#filter2_d_1_3551)">
                <circle
                  cx="36.9742"
                  cy="37.9744"
                  r="89.4996"
                  transform="rotate(135 36.9742 37.9744)"
                  fill="url(#paint4_linear_1_3551)"
                  shapeRendering="crispEdges"
                />
                <circle
                  cx="36.9742"
                  cy="37.9744"
                  r="89.1246"
                  transform="rotate(135 36.9742 37.9744)"
                  stroke="url(#paint5_linear_1_3551)"
                  strokeWidth="0.75"
                  shapeRendering="crispEdges"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_1_3551"
                x="-257.729"
                y="-253.729"
                width="589.407"
                height="589.407"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3551"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3551"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_1_3551"
                x="-160.093"
                y="-156.093"
                width="394.135"
                height="394.135"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3551"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3551"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_1_3551"
                x="-66.5254"
                y="-62.5252"
                width="206.999"
                height="206.999"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3551"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3551"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_3551"
                x1="36.9748"
                y1="-288.496"
                x2="36.9748"
                y2="17.3208"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00508045" stopColor="white" />
                <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_3551"
                x1="45.3654"
                y1="-248.831"
                x2="28.5842"
                y2="125.694"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ECECEC" />
                <stop offset="1" stopColor="#F9F9F9" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_3551"
                x1="36.9742"
                y1="-174.941"
                x2="36.9742"
                y2="24.5048"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00508045" stopColor="white" />
                <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_3551"
                x1="42.4464"
                y1="-149.072"
                x2="31.5021"
                y2="95.1832"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ECECEC" />
                <stop offset="1" stopColor="#F9F9F9" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_1_3551"
                x1="36.9742"
                y1="-66.1175"
                x2="36.9742"
                y2="31.3892"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00508045" stopColor="white" />
                <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_3551"
                x1="39.6495"
                y1="-53.4708"
                x2="36.9742"
                y2="47.0761"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#F9F9F9" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[56px] font-bold">
                +15%
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <p className="text-sm mt-2">
                forecasted increase in your sales closed by the end of the
                current month
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[56px] font-bold">
                +20%
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <p className="text-sm mt-2">
                forecasted increase in consultations by the end of the current
                month
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
