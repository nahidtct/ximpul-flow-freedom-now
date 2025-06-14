
import { cn } from "@/lib/utils"
import { Mockup } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"

interface HeroWithMockupProps {
  title: string
  description: string
  // Remove unused CTA props for this minimalist variant
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
  // Fallback to uploaded image if none provided
  const image = mockupImage ?? {
    src: "/lovable-uploads/d6a90878-c7f3-45a5-b375-17431754b055.png",
    alt: "Hands holding water",
    width: 1152,
    height: 768
  };

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        // Padding reduced to tighten section vertically
        "py-6 px-4 md:py-14 lg:py-18",
        "overflow-hidden",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[900px] flex flex-col gap-8 lg:gap-14">
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 pt-4 md:pt-10 text-center">
          {/* Heading with slightly increased size */}
          <h1
            className={cn(
              "inline-block animate-appear",
              "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent",
              // 50% reduction before, now about 60% of original (20% larger than before, but not full)
              "text-2xl font-bold tracking-tight sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl",
              "leading-tight sm:leading-tight",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            )}
            style={{
              // For finer control: if you want exactly 20% more than last time, you could use fontSize (but utility classes cover this well)
              marginBottom: '0.25em'
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-[520px] animate-appear opacity-0 [animation-delay:120ms]",
              "text-base sm:text-lg",
              "text-muted-foreground",
              "font-medium",
            )}
            style={{ marginBottom: '0.5em' }}
          >
            {description}
          </p>

          {/* Mockup */}
          <div className="relative w-full flex justify-center pt-7 px-2 sm:px-4">
            <div className="max-h-[340px] w-full flex justify-center items-end">
              <Mockup
                className={cn(
                  "animate-appear opacity-0 [animation-delay:400ms]",
                  "shadow-[0_0_34px_-8px_rgba(0,0,0,0.21)] dark:shadow-[0_0_20px_-8px_rgba(255,255,255,0.07)]",
                  "border-brand/10 dark:border-brand/5",
                  "flex items-end justify-center w-full h-auto",
                  "max-w-[500px]",
                  "max-h-[340px]"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-contain max-h-[320px]"
                  style={{ maxHeight: '320px' }}
                  loading="lazy"
                  decoding="async"
                />
              </Mockup>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 [animation-delay:600ms]"
        />
      </div>
    </section>
  )
}
