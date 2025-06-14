
"use client"

import { HeroSection } from "@/components/ui/hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Premium Water Freedom"
      description="Experience the future of hydration with our revolutionary water bottle designed for the modern lifestyle. Make water free again with Ximpul Flow."
      actions={[]}
      image={{
        light: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1248&h=765&fit=crop&crop=center",
        dark: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1248&h=765&fit=crop&crop=center",
        alt: "Ximpul Flow Water Bottle Premium Experience",
      }}
    />
  )
}
