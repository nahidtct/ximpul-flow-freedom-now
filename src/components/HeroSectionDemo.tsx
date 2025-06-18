
"use client"

import { HeroSection } from "@/components/ui/hero-section"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Carry Your Freedom"
      description="In Bangladesh, we still rely on natural groundwater — but we buy bottled water daily, wrapped in plastic, priced unfairly. Ximpul Flow is your tool to change that. Built to last. Designed for freedom. This isn't just a bottle — it's a movement."
      actions={[]}
      image={{
        light: "/lovable-uploads/cb3c2f8e-6d98-4e79-9ec2-dd6f530d3590.png",
        dark: "/lovable-uploads/cb3c2f8e-6d98-4e79-9ec2-dd6f530d3590.png",
        alt: "Ximpul Flow Water Bottle with complete accessory set including cleaning brushes and carabiner",
      }}
    />
  )
}
