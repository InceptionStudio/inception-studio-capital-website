'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

// --- Data: single unified list (no VP vs Advisor split) ---
export const advisors: Array<{
  name: string;
  tagline?: string;
  avatar?: string;
  linkedin?: string;
}> = [
  { name: "Michael Liu", tagline: "Serial founder, ecosystem builder; ex‑PwC", linkedin: "https://www.linkedin.com/in/michaelshliu/" },
  { name: "Tiffine Wang", tagline: "Investor; ex‑Partner MS&AD Ventures (100+ deals)", linkedin: "https://www.linkedin.com/in/tiffinewang/" },
  { name: "Monisha Perkash", tagline: "2× exited founder; Stanford Startup Garage", linkedin: "" },
  { name: "Patricia Liu", tagline: "Angel; pitch‑deck strategist; ex‑Accenture" },
  { name: "Andrew Radin", tagline: "5× founder (2 exits); StartX lead mentor" },
  { name: "Steve Barsh", tagline: "Founder/operator; former MP @ Dreamit" },
  { name: "Shreeganesh Ramanan", tagline: "20+ yrs software; Microsoft/Apple/Optimizely" },
  { name: "Kathy Wang", tagline: "Security & ops leader" },
  { name: "Andrew Scheuermann", tagline: "Deep‑tech founder/operator; Stanford" },
  { name: "Sophie Vu", tagline: "GTM & brand leader (3× acquired)" },
  { name: "Assaf Einat", tagline: "Founder Boom Entertainment; Stanford MBA" },
  { name: "Ben Peters", tagline: "Product & growth advisor" },
  { name: "Anand Atreya", tagline: "AI researcher & startup advisor" },
  { name: "Pablo Bariola", tagline: "Growth & investing" },
  { name: "Evonne Johnson", tagline: "Product design & UX mentor" },
  { name: "Shawn Kung", tagline: "AI/data infra founder‑operator" },
  { name: "Adria Hou", tagline: "Design lead; angel" },
  { name: "Arisa Makihara", tagline: "GenAI fund community; ANOBAKA (Tokyo)" },
  { name: "Natsuki Tamura", tagline: "Head of G‑STARTUP; Globis MBA" },
  { name: "Sae Nuruki", tagline: "MeltingHack founder; SWE @ Mercari" },
  { name: "Yukio Uematsu", tagline: "AI researcher; startup mentor (JP)" },
  { name: "Ed Kim", tagline: "Ex‑VMware; COO @ GuestOS" },
];

// --- Card component ---
function AdvisorCard({ name, tagline, avatar, linkedin }: (typeof advisors)[number]) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur transition hover:shadow-md hover:bg-white/10">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/10">
          {avatar ? (
            <Image src={avatar} alt={name} fill sizes="56px" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
              {name.split(" ").map(n=>n[0]).slice(0,2).join("")}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-base font-semibold leading-6 text-white">{name}</div>
          {tagline && <p className="mt-0.5 truncate text-sm text-neutral-300">{tagline}</p>}
        </div>
      </div>
    </div>
  );
}

// --- Auto-scrolling carousel with 3 rows ---
function AutoScrollCarousel({ items }: { items: (typeof advisors) }) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateScroll = (element: HTMLDivElement | null, speed: number) => {
      if (!element) return;

      let scrollPosition = 0;
      const scroll = () => {
        scrollPosition += speed;
        if (scrollPosition >= element.scrollWidth / 2) {
          scrollPosition = 0;
        }
        element.scrollLeft = scrollPosition;
      };

      const intervalId = setInterval(scroll, 50);
      return () => clearInterval(intervalId);
    };

    const cleanup1 = animateScroll(row1Ref.current, 1);
    const cleanup2 = animateScroll(row2Ref.current, 0.6);
    const cleanup3 = animateScroll(row3Ref.current, 1.3);

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  }, []);

  // Split items into 3 rows and duplicate for seamless loop
  const itemsPerRow = Math.ceil(items.length / 3);
  const row1Items = items.slice(0, itemsPerRow);
  const row2Items = items.slice(itemsPerRow, itemsPerRow * 2);
  const row3Items = items.slice(itemsPerRow * 2);

  const Row = ({ items, rowRef }: { items: typeof advisors; rowRef: React.RefObject<HTMLDivElement | null> }) => (
    <div className="relative overflow-hidden">
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-hidden pb-2 pt-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((advisor, idx) => (
          <div key={`${advisor.name}-${idx}`} className="w-80 shrink-0">
            <AdvisorCard {...advisor} />
          </div>
        ))}
      </div>
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent" />
    </div>
  );

  return (
    <div className="space-y-4">
      <Row items={row1Items} rowRef={row1Ref} />
      <Row items={row2Items} rowRef={row2Ref} />
      <Row items={row3Items} rowRef={row3Ref} />
    </div>
  );
}

// --- Section wrapper for /team page ---
export default function AdvisorsSection() {
  return (
    <section id="advisors" className="w-full py-16 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center">Advisors & Partners</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">A global network of founder‑first experts</h2>
          <p className="mt-3 text-xl text-neutral-300">These operators, founders, and investors help us vet and support exceptional AI‑native teams from idea to Series A.</p>
        </div>
      </div>

      <AutoScrollCarousel items={advisors} />
    </section>
  );
}

