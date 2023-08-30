import React from "react"
import { ResponsivePie } from "@nivo/pie"

export const data = [
  {
    id: "c",
    label: "c",
    value: 80,
    color: "hsl(8, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 188,
    color: "hsl(122, 70%, 50%)",
  },

  {
    id: "go",
    label: "go",
    value: 161,
    color: "hsl(111, 70%, 50%)",
  },
]

export default function PieChart() {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
  )
}
