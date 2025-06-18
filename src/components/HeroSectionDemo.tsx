
"use client"

import { HeroSection } from "@/components/ui/hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Carry Your Freedom"
      description="In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly. Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement."
      actions={[]}
      image={{
        light: "/lovable-uploads/6e9c56b5-1da4-4f5b-b10f-e1eeea35c436.png",
        dark: "/lovable-uploads/6e9c56b5-1da4-4f5b-b10f-e1eeea35c436.png",
        alt: "Ximpul Flow Water Bottle with modern gray design and textured grip",
      }}
    />
  )
}
