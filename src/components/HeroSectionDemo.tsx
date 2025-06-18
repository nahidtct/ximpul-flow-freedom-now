
"use client"

import { HeroSection } from "@/components/ui/hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Carry Your Freedom"
      description="In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly. Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement."
      actions={[]}
      image={{
        light: "/lovable-uploads/3571bcd7-9657-4f1b-81c0-2154e44c244c.png",
        dark: "/lovable-uploads/3571bcd7-9657-4f1b-81c0-2154e44c244c.png",
        alt: "Ximpul Flow Water Bottle with accessories including cleaning brushes and carabiner",
      }}
    />
  )
}
