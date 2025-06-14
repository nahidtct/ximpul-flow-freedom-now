
import { cn } from "@/lib/utils"

interface HeroWithMockupProps {
  title: string
  description: string
  mockupImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
  className?: string
}

export function HeroWithMockup({
  title,
  description,
  mockupImage,
  className,
}: HeroWithMockupProps) {
  // Use uploaded image as background by default
  const image = mockupImage ?? {
    src: "/lovable-uploads/d6a90878-c7f3-45a5-b375-17431754b055.png",
    alt: "Hands holding water",
    width: 1152,
    height: 768
  };

  return (
    <section
      className={cn(
        "relative min-h-[380px] flex items-center justify-center w-full bg-black",
        "overflow-hidden",
        "py-0 px-0", // Remove extra space for edge-to-edge image
        className,
      )}
      style={{
        // Ensure section takes full width
        width: "100%",
      }}
    >
      {/* Full-bleed background image */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          objectFit: "cover",
        }}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      
      {/* Centered text content */}
      <div className="relative z-20 w-full max-w-[900px] mx-auto flex flex-col items-center justify-center px-4 py-12 md:py-24">
        <h1
          className={cn(
            "text-white text-center font-bold tracking-tight bg-gradient-to-b from-white via-white/90 to-gray-200 bg-clip-text text-transparent",
            "animate-appear",
            // 20% larger than previous reduced size; adjust responsively
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "leading-tight"
          )}
          style={{
            marginBottom: '0.3em'
          }}
        >
          {title}
        </h1>
        <p
          className={cn(
            "max-w-[580px] text-center animate-appear opacity-0 [animation-delay:120ms]",
            "text-lg sm:text-xl md:text-2xl text-white/80 font-medium",
          )}
          style={{
            marginBottom: '0.3em'
          }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
