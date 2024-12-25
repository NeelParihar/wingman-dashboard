"use client";

import * as React from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Grid } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { Text } from "@visx/text";
import { TooltipWithBounds, useTooltip, defaultStyles } from "@visx/tooltip";

interface ChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export function Chart({
  data,
  width,
  height,
  margin = { top: 20, right: 20, bottom: 40, left: 40 },
  xAxisLabel,
  yAxisLabel,
}: ChartProps) {
  const { showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop } =
    useTooltip<{ name: string; value: number }>();

  // Define scales
  const xScale = scaleBand<string>({
    range: [margin.left, width - margin.right],
    domain: data.map((d) => d.name),
    padding: 0.2,
  });

  const yScale = scaleLinear<number>({
    range: [height - margin.bottom, margin.top],
    domain: [0, Math.max(...data.map((d) => d.value))],
  });

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <Group>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={width - margin.left - margin.right}
            height={height - margin.top - margin.bottom}
            left={margin.left}
            top={margin.top}
            // stroke={theme.grid.stroke}
            // strokeOpacity={theme.grid.strokeOpacity}
          />
          {data.map((d) => {
            const barWidth = xScale.bandwidth();
            const barHeight = height - margin.bottom - yScale(d.value);
            const barX = xScale(d.name);
            const barY = yScale(d.value);

            return (
              <Bar
                key={`bar-${d.name}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                // fill={theme.colors.primary}
                onMouseLeave={() => hideTooltip()}
                onMouseMove={() => {
                  const top = barY;
                  const left = (barX ?? 0) + barWidth / 2;
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: top,
                    tooltipLeft: left,
                  });
                }}
              />
            );
          })}
          <AxisBottom
            top={height - margin.bottom}
            scale={xScale}
            // stroke={theme.axis.stroke}
            // tickStroke={theme.axis.stroke}
            tickLabelProps={{
              // fill: theme.axis.color,
              fontSize: 12,
              textAnchor: "middle",
            }}
          />
          <AxisLeft
            left={margin.left}
            scale={yScale}
            // stroke={theme.axis.stroke}
            // tickStroke={theme.axis.stroke}
            tickLabelProps={{
              // fill: theme.axis.color,
              fontSize: 12,
              textAnchor: "end",
              dy: "0.33em",
              dx: "-0.33em",
            }}
          />
          {xAxisLabel && (
            <Text
              x={width / 2}
              y={height - 5}
              textAnchor="middle"
              // fill={theme.axis.color}
              fontSize={12}
            >
              {xAxisLabel}
            </Text>
          )}
          {yAxisLabel && (
            <Text
              x={-height / 2}
              y={15}
              transform={`rotate(-90)`}
              textAnchor="middle"
              // fill={theme.axis.color}
              fontSize={12}
            >
              {yAxisLabel}
            </Text>
          )}
        </Group>
      </svg>
      {tooltipData && (
        //@ts-expect-error this is a bug in the visx types
        <TooltipWithBounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            ...defaultStyles,
            minWidth: 60,
            // backgroundColor: theme.tooltip.backgroundColor,
            // color: theme.tooltip.color,
          }}
        >
          <div style={{ }}>
            <strong>{tooltipData?.name}</strong>
          </div>
          <div>{tooltipData?.value}</div>
        </TooltipWithBounds>
      )}
    </div>
  );
}

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-[350px] w-full", className)} {...props} />
));
ChartContainer.displayName = "ChartContainer";

export const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute rounded-md border bg-background px-3 py-1.5 text-sm shadow-md",
      className
    )}
    {...props}
  />
));
ChartTooltip.displayName = "ChartTooltip";

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
ChartTooltipContent.displayName = "ChartTooltipContent";

export const ChartTooltipTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-medium", className)} {...props} />
));
ChartTooltipTitle.displayName = "ChartTooltipTitle";

export const ChartTooltipValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm", className)} {...props} />
));
ChartTooltipValue.displayName = "ChartTooltipValue";

import { cn } from "@/lib/utils";
