
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';

export function Features() {
  const items = [
    {
      icon: <Zap className="w-6 h-6 mr-2 inline" />,
      title: 'Faaast',
      desc: 'It supports an entire helping developers and innovate.'
    },
    {
      icon: <Cpu className="w-6 h-6 mr-2 inline" />,
      title: 'Powerful',
      desc: 'It supports an entire helping developers and businesses.'
    },
    {
      icon: <Fingerprint className="w-6 h-6 mr-2 inline" />,
      title: 'Security',
      desc: 'It supports an helping developers businesses.'
    },
    {
      icon: <Pencil className="w-6 h-6 mr-2 inline" />,
      title: 'Customization',
      desc: 'It supports helping developers and businesses innovate.'
    },
    {
      icon: <Settings2 className="w-6 h-6 mr-2 inline" />,
      title: 'Control',
      desc: 'It supports helping developers and businesses innovate.'
    },
    {
      icon: <Sparkles className="w-6 h-6 mr-2 inline" />,
      title: 'Built for AI',
      desc: 'It supports helping developers and businesses innovate.'
    },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border rounded-xl overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={[
                "flex flex-col gap-2 p-8 bg-white",
                "border-b",
                (idx % 3 !== 2) && "border-r",
                idx >= 3 ? "" : "sm:border-b",
                "justify-start"
              ].join(' ').replace(/\s+/g,' ').trim()}
              style={{
                borderBottom: idx < 3 ? "1px solid #ddd" : "",
                borderRight: (idx % 3 !== 2) ? "1px solid #ddd" : ""
              }}
            >
              <div className="flex items-center mb-2">
                {item.icon}
                <span className="font-semibold text-[1.05rem]">{item.title}</span>
              </div>
              <p className="text-[0.97rem] text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
