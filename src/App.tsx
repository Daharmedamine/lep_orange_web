import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Rocket,
  Cpu,
  Camera,
  GalleryHorizontalEnd,
  Sparkles,
} from "lucide-react";

const TEAM_LOGO = "/images/team-logo.png";
const FTC_LOGO = "/images/ftc-logo.png";
const Caleb_IMG = "/images/PXL_20250917_144116629.jpg";
const Amine_IMG = "/images/PXL_20250911_195556373~2 (2).jpg";
const Luka_IMG = "/images/PXL_20250911_195621210.jpg";
const Rayan_IMG = "/images/PXL_20250612_120515550.jpg";
const Camilo_IMG = "/images/PXL_20250915_124033367.jpg";
const Asher_IMG = "/images/PXL_20250911_195607567.jpg";
const Franklin_IMG = "/images/PXL_20250915_124102814.MP.jpg";
const Zavier_IMG = "/images/PXL_20250915_124150078 (1).jpg"; // fixed leading slash
const Jack_IMG = "/images/PXL_20250916_180914033.jpg"; // fixed leading slash
const Sebas_IMG = "/images/IMG_20250925_201031.jpg";
const RayanR_IMG = "/images/PXL_20250916_122903643.MP.jpg"; // fixed leading slash
const Pedro_IMG = "/images/PXL_20250915_123935344 (1).jpg"; // fixed leading slash

/** Content */
const about = {
  title: "About Us",
  body: "We are LEP EDIT Orange Team 22310. We design, build, and program high performance robots for the FIRST Tech Challenge. Our mission is to learn fast, help our community, and push engineering creativity with bold ideas and disciplined execution.",
  bullets: [
    { k: "School", v: "Lo-Ellen Park Secondary School" },
    { k: "Members", v: "12 Students" },
  ],
};

const robotSpecs = [
  { icon: <Cpu className="w-5 h-5" />, k: "bla bla", v: "Bla bla " },
  { icon: <Rocket className="w-5 h-5" />, k: "Drive", v: "4-wheel omni drive" },
  { icon: <Camera className="w-5 h-5" />, k: "Strategy", v: "bla bla " },
  {
    icon: <Sparkles className="w-5 h-5" />,
    k: "special features",
    v: "bla bla",
  },
];

const teamMembers = [
  { name: "Caleb Rybachuk", role: "Captain / Lead Reach", img: Caleb_IMG },
  { name: "Amine Dahar", role: "Lead Automation/ Reach", img: Amine_IMG },
  { name: "Luka Andler", role: "Trades", img: Luka_IMG },
  { name: "Rayan Moradi", role: "Design", img: Rayan_IMG },
  { name: "Camilo Correa", role: "Trades", img: Camilo_IMG },
  { name: "Asher Hunt", role: "Design", img: Asher_IMG },
  { name: "Franklin Nyegen", role: "Trades", img: Franklin_IMG },
  { name: "Zavier Simard", role: "Design", img: Zavier_IMG },
  { name: "Jack Zhang", role: "Automation/ Reach", img: Jack_IMG },
  { name: "Pedro Orcon Romero", role: "Design", img: Pedro_IMG },
  { name: "Sebastian Breton", role: "Trades", img: Sebas_IMG },
  { name: "Ryan Rebiz", role: "Design/ Reach", img: RayanR_IMG },
];

const galleryImages = [TEAM_LOGO, FTC_LOGO, TEAM_LOGO, FTC_LOGO];

/** Utilities */
const HERO_BG_SCRIM =
  "data:image/svg+xml;utf8,\
  <svg xmlns='http://www.w3.org/2000/svg' width='1400' height='900'>\
    <defs>\
      <radialGradient id='g' cx='50%' cy='40%'>\
        <stop offset='0%' stop-color='%23ff7a18' stop-opacity='0.65'/>\
        <stop offset='60%' stop-color='%23121212' stop-opacity='0.2'/>\
        <stop offset='100%' stop-color='%23000000' stop-opacity='0.85'/>\
      </radialGradient>\
    </defs>\
    <rect width='100%' height='100%' fill='url(%23g)'/>\
  </svg>";

const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const offsets = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Number.POSITIVE_INFINITY };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    document.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => document.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
};

const Blob = ({ className = "" }: { className?: string }) => (
  <motion.div
    aria-hidden
    className={`pointer-events-none absolute blur-3xl opacity-30 ${className}`}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    style={{
      background:
        "radial-gradient(closest-side, rgba(255,140,0,.8), rgba(255,114,28,.4), rgba(0,0,0,0))",
    }}
  />
);

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-10">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-3 text-neutral-300/90 max-w-3xl"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`glass-card ${className}`}
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 250, damping: 16 }}
  >
    {children}
  </motion.div>
);

const Nav = ({ active }: { active: string }) => {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "robot", label: "Robot" },
    { id: "team", label: "Team" },
    { id: "gallery", label: "Gallery" },
  ];
  return (
    <div className="fixed z-50 top-4 left-1/2 -translate-x-1/2">
      <nav className="nav">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`nav-link ${active === it.id ? "is-active" : ""}`}
          >
            {it.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[92vh] flex items-center overflow-hidden"
  >
    <img
      src={HERO_BG_SCRIM}
      className="absolute inset-0 w-full h-full object-cover opacity-90"
      alt="gradient"
    />
    <Blob className="w-[60vw] h-[60vw] -top-40 -left-20" />
    <Blob className="w-[50vw] h-[50vw] top-40 -right-16" />

    <div className="container mx-auto px-6 lg:px-10 relative">
      <motion.div
        className="max-w-[980px]"
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={TEAM_LOGO}
            alt="LEP EDIT ORANGE"
            className="w-16 h-16 rounded-2xl shadow-2xl object-contain ring-1 ring-white/10"
          />
          <div className="text-sm tracking-wider text-orange-300/90 uppercase">
            LEP EDIT ORANGE • FTC #22310
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight title-font">
          LEP{" "}
          <span className="text-orange-400 drop-shadow-[0_0_30px_rgba(255,120,0,.35)]">
            EDIT ORANGE
          </span>
          <br /> Team 22310
        </h1>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#robot" className="btn-primary">
            <Rocket className="w-4 h-4" />
            Meet Our Robot
          </a>
          <a href="#gallery" className="btn-ghost">
            <GalleryHorizontalEnd className="w-4 h-4" />
            View Gallery
          </a>
        </div>

        <motion.div
          className="mt-12 flex items-center gap-4 text-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={FTC_LOGO}
            alt="FIRST Tech Challenge"
            className="h-10 object-contain opacity-80"
          />
          <span className="text-neutral-400">
            Proud competitors in the FIRST Tech Challenge
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-down"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title={about.title} subtitle={about.body}>
    <div className="grid md:grid-cols-2 gap-6">
      {about.bullets.map((b, i) => (
        <Card key={i}>
          <div className="p-6">
            <div className="text-neutral-400 text-sm uppercase tracking-wider">
              {b.k}
            </div>
            <div className="text-xl font-semibold mt-1">{b.v}</div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Robot = () => (
  <Section
    id="robot"
    title="Our Robot"
    subtitle="A balance of speed, precision, and reliability purpose built for FTC challenges."
  >
    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
      <Card className="lg:col-span-2 overflow-hidden">
        <div className="relative aspect-video bg-[linear-gradient(45deg,rgba(255,126,0,.12),rgba(255,255,255,.04))]">
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-sm text-neutral-400">Robot Placeholder</div>
              <div className="text-xs text-neutral-500">
                (embed a video or CAD render here)
              </div>
            </motion.div>
          </div>
        </div>
      </Card>
      <div className="space-y-4">
        {robotSpecs.map((s, i) => (
          <Card key={i}>
            <div className="p-5 flex items-start gap-3">
              <div className="icon-chip">{s.icon}</div>
              <div>
                <div className="font-semibold">{s.k}</div>
                <div className="text-neutral-300/90 text-sm">{s.v}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

const Team = () => (
  <Section
    id="team"
    title="Our Team"
    subtitle="The brilliant minds behind LEP EDIT ORANGE 22310."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((m, i) => (
        <Card key={i}>
          <div className="p-6">
            <div className="flex items-center gap-4">
              <img
                src={m.img}
                alt={m.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-400/30 shadow-[0_8px_30px_rgba(255,120,0,.25)]"
              />
              <div>
                <div className="font-semibold text-lg">{m.name}</div>
                <div className="text-sm text-orange-300/90">{m.role}</div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Lightbox = ({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {src && (
      <motion.div
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm grid place-items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={src}
          alt="preview"
          className="max-h-[86vh] max-w-[92vw] rounded-2xl shadow-2xl"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />
        <button className="absolute top-6 right-6 btn-ghost" onClick={onClose}>
          Close
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section
      id="gallery"
      title="Gallery"
      subtitle="Moments from build season, scrimmages, and competition days."
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((g, i) => (
          <motion.button
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ y: -4 }}
            onClick={() => setOpen(g)}
          >
            <img
              src={g}
              alt={`gallery ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/50 rounded-full px-2 py-1">
              Click to enlarge
            </div>
          </motion.button>
        ))}
      </div>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </Section>
  );
};

function Footer() {
  return (
    <footer className="relative py-14 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-neutral-400">
          <img src={TEAM_LOGO} className="w-9 h-9 rounded-lg" alt="logo" />
          <span className="text-sm">
            © {new Date().getFullYear()} LEP EDIT ORANGE | Team 22310 • Built
            for FTC
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const active = useScrollSpy(["home", "about", "robot", "team", "gallery"]);
  return (
    <main className="site-wrapper">
      <Nav active={active} />
      <Hero />
      <About />
      <Robot />
      <Team />
      <Gallery />
      <Footer />
    </main>
  );
}
