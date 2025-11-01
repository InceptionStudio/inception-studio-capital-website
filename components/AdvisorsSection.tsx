'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// --- Data: single unified list (no VP vs Advisor split) ---
// Minimal taglines are drawn from your deck/update docs where available.
// Add headshot URLs when ready (local /public path or remote).
export const advisors: Array<{
  name: string;
  tagline?: string;
  avatar?: string; // e.g., "/team/michael-liu.jpg"
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
    <div className="group relative overflow-hidden rounded-2xl border bg-white/50 p-4 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
          {avatar ? (
            <Image src={avatar} alt={name} fill sizes="56px" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">{name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
          )}
        </div>
        <div className="min-w-0">
          <div className="truncate text-base font-semibold leading-6">{name}</div>
          {tagline && <p className="mt-0.5 truncate text-sm text-gray-600 dark:text-gray-300">{tagline}</p>}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm text-gray-500 underline-offset-4 hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1C12.7 8.7 14.3 8 16.2 8 21 8 22 10.9 22 15.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.8h-4V8z"/>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Carousel (mobile-first) ---
function Carousel({ items }: { items: (typeof advisors) }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // translate vertical wheel to horizontal scroll
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]"
        onMouseDown={(e) => {
          setDragging(true);
          setStartX(e.pageX - (trackRef.current?.offsetLeft || 0));
          setScrollLeft(trackRef.current?.scrollLeft || 0);
        }}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging || !trackRef.current) return;
          e.preventDefault();
          const x = e.pageX - (trackRef.current.offsetLeft || 0);
          const walk = (x - startX) * 1; // speed factor
          trackRef.current.scrollLeft = scrollLeft - walk;
        }}
        style={{ scrollbarWidth: "none" } as any}
      >
        {items.map((p) => (
          <div key={p.name} className="w-72 shrink-0">
            <AdvisorCard {...p} />
          </div>
        ))}
      </div>
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent dark:from-black/60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-black/60" />
    </div>
  );
}

// --- Grid (desktop) ---
function Grid({ items }: { items: (typeof advisors) }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <AdvisorCard key={p.name} {...p} />
      ))}
    </div>
  );
}

// --- Section wrapper for /team page ---
export default function AdvisorsSection() {
  return (
    <section id="advisors" className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-300">Advisors & Partners</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">A global network of founder‑first experts</h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">These operators, founders, and investors help us vet and support exceptional AI‑native teams from idea to Series A.</p>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="sm:hidden">
        <Carousel items={advisors} />
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:block">
        <Grid items={advisors} />
      </div>
    </section>
  );
}

/* --- Integration notes ---
1) Place <AdvisorsSection /> below your GP bios on /team.
2) Add headshots into /public/team and set the avatar fields.
3) Keep list unified: no VP vs Advisor split.
4) For very long rosters, consider pagination or an accordion by region.
*/

