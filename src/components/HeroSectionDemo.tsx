
"use client"

import { HeroSection } from "@/components/ui/hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Premium Water Freedom"
      description="Experience the future of hydration with our revolutionary water bottle designed for the modern lifestyle. Make water free again with Ximpul Flow."
      actions={[]}
      image={{
        light: "/lovable-uploads/7f9c38b9-1af0-4100-bd39-a29962064023.png",
        dark: "/lovable-uploads/7f9c38b9-1af0-4100-bd39-a29962064023.png",
        alt: "Pure water flowing into cupped hands representing water freedom",
      }}
    />
  )
}
