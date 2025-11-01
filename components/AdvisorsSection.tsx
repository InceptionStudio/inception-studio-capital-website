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
  {
    name: "Tiffine Wang",
    tagline: "Investor & startup advisor; former Partner at MS&AD Ventures (100+ deals); ex-Singtel Innov8",
    linkedin: "https://www.linkedin.com/in/tiffinewang/",
    avatar: "/team/tiffine-wang.jpg"
  },
  {
    name: "Patricia Liu",
    tagline: "Angel investor & pitch-deck specialist; ex-Accenture consultant; hospitality entrepreneur",
    linkedin: "https://www.linkedin.com/in/pjlconsulting/",
    avatar: "/team/patricia-liu.jpg"
  },
  {
    name: "Andrew Radin",
    tagline: "5× founder (2 exits); StartX lead mentor; advisor to top investors; BS/MS CS @ Stanford BMI",
    linkedin: "https://www.linkedin.com/in/andrewradin/",
    avatar: "/team/andrew-radin.jpg"
  },
  {
    name: "Steve Barsh",
    tagline: "40 yrs founder/operator/investor; former Managing Partner Dreamit Ventures; ex-CEO & tech founder",
    linkedin: "https://www.linkedin.com/in/stevebarsh/",
    avatar: "/team/steve-barsh.jpg"
  },
  {
    name: "Michael Liu",
    tagline: "Serial founder & nonprofit ecosystem builder; ex-PwC; Rotman Commerce U of T",
    linkedin: "https://www.linkedin.com/in/michaelshliu/",
    avatar: "/team/michael-liu.jpg"
  },
  {
    name: "Monisha Perkash",
    tagline: "2× exited founder (Lumo Bodytech, TuitionCoach); Meta intrapreneur; teaches Startup Garage @ Stanford",
    linkedin: "https://www.linkedin.com/in/monishaperkash/",
    avatar: "/team/monisha-perkash.jpg"
  },
  {
    name: "Assaf Einat",
    tagline: "Founder @ Boom Entertainment; 20 yrs in tech, product & biz; Stanford MBA / CS BS",
    linkedin: "https://www.linkedin.com/in/assafeinat",
    avatar: "/team/assaf-einat.jpg"
  },
  {
    name: "Shreeganesh Ramanan",
    tagline: "20 yrs software @ Microsoft, Amazon, Apple; early Optimizely; UIUC CS",
    linkedin: "https://www.linkedin.com/in/shreeganesh",
    avatar: "/team/shreeganesh-ramanan.jpg"
  },
  {
    name: "Sophie Vu",
    tagline: "Marketing & GTM exec (3× acquired); BroadVision, Google, Hootsuite, Unbabel; UCLA Anderson MBA",
    linkedin: "https://www.linkedin.com/in/sophie-vu415",
    avatar: "/team/sophie-vu.jpg"
  },
  {
    name: "Arisa Makihara",
    tagline: "Community Manager @ ANOBAKA (GenAI fund); sales background @ Sekisui House; Japan startup connector",
    linkedin: "https://www.linkedin.com/in/arisa-makihara-1a083617a",
    avatar: "/team/arisa-makihara.jpg"
  },
  {
    name: "Natsuki Tamura",
    tagline: "Head of G-STARTUP Accelerator; Waseda BS, Globis MBA; Nikon & Recruit alum",
    linkedin: "https://www.linkedin.com/in/natsuki-tamura-4a245545",
    avatar: "/team/natsuki-tamura.jpg"
  },
  {
    name: "Sae Nuruki",
    tagline: "Founder MeltingHack International Hackathon Community; Software Engineer @ Mercari; Tokyo Tech & Toronto",
    linkedin: "https://www.linkedin.com/in/saenuruki/",
    avatar: "/team/sae-nuruki.jpg"
  },
  {
    name: "Ed Kim",
    tagline: "COO @ GuestOS; ex-Airbnb, Facebook, VMware; Stanford MBA, Cornell BS",
    linkedin: "https://www.linkedin.com/in/ed-kim-4594231/",
    avatar: "/team/ed-kim.jpg"
  },
  {
    name: "Kathy Wang",
    tagline: "Product designer (ex-Dropbox, IBM); Cornell MPS Info Sci (UX); Red Dot ‘Best of the Best’ award",
    linkedin: "https://www.linkedin.com/in/kathytwang/",
    avatar: "/team/kathy-wang.jpg"
  },
  {
    name: "Andrew Scheuermann",
    tagline: "Deep-tech founder & operator; Stanford PhD (Materials Science)",
    linkedin: "https://www.linkedin.com/in/andrewscheuermann/",
    avatar: "/team/andrew-scheuermann.jpg"
  },
  {
    name: "Ben Peters",
    tagline: "Product & growth advisor; former product lead at Google and Dropbox",
    linkedin: "https://www.linkedin.com/in/ben-peters-6ba44ab",
    avatar: "/team/ben-peters.jpg"
  },
  {
    name: "Anand Atreya",
    tagline: "AI researcher and startup advisor; former DeepMind & Stanford AI Lab",
    linkedin: "https://www.linkedin.com/in/anandatreya/",
    avatar: "/team/anand-atreya.jpg"
  },
  {
    name: "Pablo Bariola",
    tagline: "Growth & investment advisor; ex-SoftBank Ventures",
    linkedin: "https://www.linkedin.com/in/pbariola",
    avatar: "/team/pablo-bariola.jpg"
  },
  {
    name: "Evonne Johnson",
    tagline: "Product design & UX mentor; founder & creative director background",
    linkedin: "https://www.linkedin.com/in/evonnejohnson/",
    avatar: "/team/evonne-johnson.jpg"
  },
  {
    name: "Shawn Kung",
    tagline: "AI infra & data systems founder-operator; ex-Google Cloud ML platform",
    linkedin: "https://www.linkedin.com/in/shawnkung/",
    avatar: "/team/shawn-kung.jpg"
  },
  {
    name: "Adria Hou",
    tagline: "Design lead & angel investor; UX/UI advisor to AI startups in Asia and US",
    linkedin: "https://www.linkedin.com/in/adriahou/",
    avatar: "/team/adria-hou.jpg"
  },
  {
    name: "Yukio Uematsu",
    tagline: "AI researcher and startup mentor (Japan); focus on LLM applications & robotics",
    linkedin: "https://www.linkedin.com/in/yukio-uematsu-baab277",
    avatar: "/team/yukio-uematsu.jpg"
  }
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

