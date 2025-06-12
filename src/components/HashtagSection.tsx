
import React from 'react';
import { HighlightGroup, HighlighterItem, Particles } from '@/components/ui/highlighter';
import { Hash } from 'lucide-react';

export const HashtagSection = () => {
  const hashtags = [
    '#MakeWaterFreeAgain',
    '#YourWaterYourFreedom',
    '#XimpulFlow',
    '#FlowWithFreedom',
    '#StopBuyingPlastic',
    '#BangladeshLifestyle',
    '#XimpulMovement',
    '#RefillRevolution'
  ];

  return (
    <section className="apple-spacing bg-gradient-to-br from-primary/5 to-primary/10 fade-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Be part of the revolution that's making water free again
          </p>
        </div>

        <HighlightGroup className="group">
          <div className="group/item">
            <HighlighterItem className="rounded-3xl p-6">
              <div className="relative z-20 overflow-hidden rounded-3xl border border-border bg-background/80 backdrop-blur-sm">
                <Particles
                  className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-60"
                  quantity={150}
                  color="#3b82f6"
                  vy={-0.05}
                  vx={0.02}
                  staticity={20}
                  ease={20}
                />
                
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-8">
                    <Hash className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl md:text-3xl font-light text-foreground">
                      Spread the Word
                    </h3>
                  </div>
                  
                  <div className="relative max-w-5xl mx-auto min-h-[400px] flex flex-wrap content-start gap-4">
                    {hashtags.map((hashtag, index) => (
                      <div
                        key={index}
                        className="group/hashtag relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{
                          position: 'absolute',
                          left: `${Math.random() * 70}%`,
                          top: `${Math.random() * 60}%`,
                          transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                        }}
                      >
                        <div className="p-4 text-center">
                          <p className="text-primary font-medium text-sm md:text-base leading-relaxed group-hover/hashtag:text-primary/80 transition-colors whitespace-nowrap">
                            {hashtag}
                          </p>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/hashtag:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-16 text-center">
                    <p className="text-muted-foreground font-light text-lg mb-6">
                      Share your Ximpul Flow journey and inspire others to choose freedom
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-muted/30">Instagram</span>
                      <span className="px-3 py-1 rounded-full bg-muted/30">Facebook</span>
                      <span className="px-3 py-1 rounded-full bg-muted/30">Twitter</span>
                      <span className="px-3 py-1 rounded-full bg-muted/30">LinkedIn</span>
                    </div>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </HighlightGroup>
      </div>
    </section>
  );
};
