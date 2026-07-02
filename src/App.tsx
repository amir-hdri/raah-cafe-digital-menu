import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Coffee,
  IceCream,
  Flame,
  Wind,
  Leaf,
  Instagram,
  ArrowDownCircle,
  Zap,
  Sparkles,
  Droplet,
  QrCode,
  X,
  Info,
  CreditCard,
  ChevronUp,
} from 'lucide-react';
import { MENU_DATA, MenuItemData } from './constants';
import { Logo, PathDecoration } from './components/Logo';

/* ─── Category icon ────────────────────────────────────────────── */
const CategoryIcon = ({ id, className = 'w-4 h-4' }: { id: string; className?: string }) => {
  const p = { className };
  switch (id) {
    case 'espresso':     return <Coffee   {...p} />;
    case 'iced-coffee':  return <Droplet  {...p} />;
    case 'matcha':       return <Zap      {...p} />;
    case 'refreshers':   return <Wind     {...p} />;
    case 'hot-comforts': return <Flame    {...p} />;
    case 'shakes':       return <IceCream {...p} />;
    case 'tea':          return <Leaf     {...p} />;
    default:             return <Sparkles {...p} />;
  }
};

/* ─── Scroll progress bar ──────────────────────────────────────── */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(isNaN(pct) ? 0 : pct);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress * 100}%` }}
    />
  );
};

/* ─── Menu image ───────────────────────────────────────────────── */
const MenuItemImage = ({
  src, alt, className = '', priority = false,
}: { src: string; alt: string; className?: string; priority?: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError]   = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(false);
    setError(false);
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div className={`overflow-hidden relative rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-white/10" />
          <span className="text-[10px] text-white/15 uppercase tracking-widest">Unavailable</span>
        </div>
      )}
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        className="img-reveal w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

/* ─── Item detail modal ────────────────────────────────────────── */
const ItemDetailModal = ({
  item, categoryImage, onClose,
}: { item: MenuItemData | null; categoryImage: string; onClose: () => void }) => {
  if (!item) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-lg"
      />

      <motion.div
        layoutId={`item-${item.id}`}
        transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative w-full max-w-2xl bg-matte-gray border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-black/30 backdrop-blur-sm rounded-full text-white/50 hover:text-white hover:bg-black/50 transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="max-h-[88vh] overflow-y-auto no-scrollbar">
          {/* Hero image */}
          <div className="relative aspect-[16/9]">
            <MenuItemImage src={categoryImage} alt={item.name} className="h-full rounded-none border-0" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-gray via-matte-gray/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-10 right-10">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-3xl md:text-4xl font-light text-matte-white tracking-tight"
              >
                {item.name}
              </motion.h2>
              {item.isPopular && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="inline-block mt-3 text-[8px] text-white/70 border border-white/25 px-3 py-1 rounded-full uppercase tracking-[0.35em] font-bold"
                >
                  Signature Selection
                </motion.span>
              )}
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left — description */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold flex items-center gap-2">
                  <Info className="w-3 h-3" /> Description
                </h4>
                <p className="text-white/55 leading-relaxed font-light text-[14px]">
                  {item.description || 'A masterfully crafted beverage that embodies the essence of Raah\'s philosophy.'}
                </p>
                <div className="space-y-4 pt-2">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Customization</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Extra Shot', 'Oat Milk', 'Vanilla Syrup'].map((opt) => (
                      <span
                        key={opt}
                        className="text-[11px] text-white/35 border border-white/8 px-4 py-1.5 rounded-xl bg-white/[0.025]"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right — pricing + nutrition */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="p-6 bg-white/[0.025] border border-white/6 rounded-2xl space-y-5">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold flex items-center gap-2">
                    <CreditCard className="w-3 h-3" /> Pricing
                  </h4>
                  {typeof item.price === 'string' ? (
                    <div className="flex justify-between items-center">
                      <span className="text-white/45 text-sm font-light">Standard</span>
                      <div className="text-right">
                        <span className="text-3xl font-light text-matte-white">{item.price}</span>
                        <span className="block text-[9px] text-white/25 uppercase tracking-[0.2em] mt-1">Toman (×1k)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-white/35 text-[9px] uppercase tracking-[0.2em] block mb-0.5">
                            {item.id.startsWith('hc') ? 'Medium (مدیوم)' : 'Commercial'}
                          </span>
                          <span className="text-white/60 font-light text-sm">
                            {item.id.startsWith('hc') ? 'Standard size' : 'Bold & Classic'}
                          </span>
                        </div>
                        <span className="text-2xl font-light text-white/80">{item.price.commercial}</span>
                      </div>
                      <div className="h-px bg-white/6" />
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-white/50 text-[9px] uppercase tracking-[0.2em] block mb-0.5">
                            {item.id.startsWith('hc') ? 'Large (لارج)' : 'Premium Origin'}
                          </span>
                          <span className="text-white/80 font-light text-sm">
                            {item.id.startsWith('hc') ? 'Generous size' : 'Exotic & Refined'}
                          </span>
                        </div>
                        <span className="text-3xl font-light text-matte-white">{item.price.premium}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Calories', val: item.calories !== undefined ? `${item.calories} kcal` : '—' },
                    { label: 'Caffeine', val: item.caffeine || '—' },
                    { label: 'Serving',  val: item.serving  || '—' },
                    { label: 'Origins',  val: item.origins  || '—' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 bg-white/[0.02] rounded-xl">
                      <span className="text-[9px] text-white/20 uppercase tracking-wider block mb-1">{s.label}</span>
                      <span className="text-[13px] text-white/55 font-light leading-tight">{s.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-3">
              <Logo size="sm" animated={false} />
              <p className="text-white/10 text-[8px] tracking-[0.8em] uppercase font-light">The Way of Flavor</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Menu item row ─────────────────────────────────────────────── */
const MenuItemRow = React.memo(({
  item, idx, onSelect,
}: { item: MenuItemData; idx: number; onSelect: (item: MenuItemData) => void }) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id   = Date.now();
    setRipples(prev => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    setTimeout(() => onSelect(item), 200);
  };

  return (
    <motion.div
      layoutId={`item-${item.id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: Math.min(idx * 0.04, 0.25), duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
      className="item-row group relative cursor-pointer py-5 px-5 rounded-2xl overflow-hidden transition-colors duration-200"
    >
      <AnimatePresence>
        {ripples.map(r => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.25 }}
            animate={{ scale: 9, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute bg-white/10 rounded-full pointer-events-none z-0"
            style={{ left: r.x, top: r.y, width: 40, height: 40, marginLeft: -20, marginTop: -20 }}
          />
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex justify-between items-start gap-4 px-2">
        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-lg md:text-xl font-light text-white/75 group-hover:text-matte-white transition-colors duration-300 leading-snug">
              {item.name}
            </h3>
            {item.isPopular && (
              <span className="flex-none text-[7px] text-white/50 border border-white/15 px-2.5 py-0.5 rounded-full uppercase tracking-[0.3em] font-bold">
                Signature
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-[12px] text-white/35 font-light mt-1.5 leading-relaxed max-w-xs line-clamp-2">
              {item.description}
            </p>
          )}
          {item.calories !== undefined && (
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-white/25 font-light">
              <span className="w-1.5 h-1.5 bg-rose-500/40 rounded-full" />
              <span>{item.calories} kcal</span>
              {item.caffeine && item.caffeine !== 'None' && (
                <>
                  <span className="text-white/10">·</span>
                  <span>{item.caffeine.split(' ')[0]} caffeine</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex-none flex flex-col items-end gap-1 pt-0.5 font-heading">
          {typeof item.price === 'string' ? (
            <div className="flex flex-col items-end">
              <span className="text-2xl font-light text-matte-white">{item.price}</span>
              <span className="text-[8px] text-white/25 uppercase tracking-[0.3em] mt-1 font-sans">×1k T</span>
            </div>
          ) : (
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex flex-col items-end">
                <span className="text-[8px] text-white/35 uppercase tracking-[0.18em] font-sans">
                  {item.id.startsWith('hc') ? 'Med' : 'Comm.'}
                </span>
                <span className="text-sm font-light text-white/65 group-hover:text-white/85 transition-colors">
                  {item.price.commercial}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[8px] text-white/50 uppercase tracking-[0.18em] font-sans">
                  {item.id.startsWith('hc') ? 'Lrg' : 'Prem.'}
                </span>
                <span className="text-2xl font-light text-matte-white">{item.price.premium}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

/* ─── Back to top button ────────────────────────────────────────── */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`back-top fixed bottom-8 left-6 z-50 p-3 rounded-full bg-white/8 border border-white/10 text-white/50 hover:bg-white/15 hover:text-white hover:border-white/20 transition-all duration-200 ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
};

/* ─── App ───────────────────────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab]       = useState(MENU_DATA[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const isScrollingRef = useRef(false);
  const navScrollRef   = useRef<HTMLDivElement>(null);
  const headerRef      = useRef<HTMLElement>(null);

  const activeCategory = MENU_DATA.find(s => s.items.some(i => i.id === selectedItem?.id));

  const scrollToSection = (id: string) => {
    if (isScrollingRef.current) return;
    const el = document.getElementById(id);
    if (!el) return;
    isScrollingRef.current = true;
    setActiveTab(id);
    const navH = navScrollRef.current?.parentElement?.offsetHeight ?? 80;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH, behavior: 'smooth' });
    const navItem = document.getElementById(`nav-${id}`);
    const cont    = navScrollRef.current;
    if (navItem && cont) {
      cont.scrollTo({ behavior: 'smooth', left: navItem.offsetLeft - cont.offsetWidth / 2 + navItem.offsetWidth / 2 });
    }
    setTimeout(() => { isScrollingRef.current = false; }, 900);
  };

  /* Scroll spy */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (isScrollingRef.current) return;
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActiveTab(e.target.id);
          const navItem = document.getElementById(`nav-${e.target.id}`);
          const cont    = navScrollRef.current;
          if (navItem && cont) {
            cont.scrollTo({ behavior: 'smooth', left: navItem.offsetLeft - cont.offsetWidth / 2 + navItem.offsetWidth / 2 });
          }
        }
      });
    }, { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    MENU_DATA.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* Header scroll visibility for sticky nav */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const obs = new IntersectionObserver(([entry]) => {
      setIsStickyVisible(!entry.isIntersecting);
    }, { root: null, threshold: 0 });
    obs.observe(header);
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  return (
    <div className="relative min-h-screen bg-matte-black text-matte-white selection:bg-matte-white selection:text-matte-black overflow-x-clip font-sans">
      <ScrollProgress />
      <PathDecoration />
      <BackToTop />

      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal
            item={selectedItem}
            categoryImage={activeCategory?.image ?? ''}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header ref={headerRef} className="relative pt-24 pb-16 flex flex-col items-center justify-center border-b border-white/5 z-10 px-6 overflow-hidden">
        {/* subtle radial glow behind logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[50vw] max-w-xl max-h-80 bg-white/[0.02] rounded-full blur-[80px]" />
        </div>

        <Logo size="lg" />

        {/* Category Icons Row / Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mt-12 flex overflow-x-auto no-scrollbar gap-5 px-4 justify-start md:justify-center py-2"
        >
          {MENU_DATA.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex-none flex flex-col items-center gap-2.5 group cursor-pointer w-20 text-center"
            >
              {/* Image Circle Container */}
              <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-white/10 to-white/30 group-hover:from-white/30 group-hover:to-white/60 transition-all duration-500 shadow-lg flex-none">
                <div className="w-full h-full rounded-full overflow-hidden bg-matte-gray relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
                {/* Tiny Icon Badge */}
                <div className="absolute -bottom-1 -right-1 p-1 bg-matte-black border border-white/10 rounded-full text-white/60 group-hover:text-white group-hover:border-white/30 transition-all duration-300 shadow-md">
                  <CategoryIcon id={section.id} className="w-3 h-3" />
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors duration-300 leading-tight">
                  {section.title.split('(')[0].trim()}
                </span>
                <span className="text-[8px] text-white/30 group-hover:text-white/40 tracking-wider font-sans uppercase mt-0.5 transition-colors duration-300">
                  {section.title.includes('(') ? section.title.split('(')[1].replace(')', '').trim().split(' ')[0] : ''}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="mt-12"
        >
          <ArrowDownCircle className="w-5 h-5 text-white/12" />
        </motion.div>
      </header>

      {/* ── Sticky nav ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-0 z-[60] nav-glass py-4"
          >
            <div ref={navScrollRef} className="max-w-2xl mx-auto flex overflow-x-auto no-scrollbar gap-2.5 px-5">
              {MENU_DATA.map(section => (
                <button
                  key={section.id}
                  id={`nav-${section.id}`}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`flex-none px-5 py-2.5 rounded-xl text-[11px] font-bold tracking-[0.04em] uppercase flex items-center gap-2 whitespace-nowrap border relative transition-colors duration-200 ${
                    activeTab === section.id
                      ? 'text-matte-black border-transparent'
                      : 'bg-white/[0.04] text-white/40 border-white/6 hover:text-white/70 hover:border-white/15'
                  }`}
                >
                  {activeTab === section.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-matte-white rounded-xl -z-10 shadow-lg"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.55 }}
                    />
                  )}
                  <CategoryIcon id={section.id} />
                  <span>{section.title.split('(')[0].trim()}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Main content ───────────────────────────────────────── */}
      <main className="max-w-2xl mx-auto px-5 py-10 space-y-20 pb-48 relative z-10">
        {MENU_DATA.map(section => (
          <section key={section.id} id={section.id} className="menu-section scroll-mt-28 group/section">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 mb-10 text-center items-center"
            >
              <div className="section-rule" />
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-matte-white">
                {section.title.split('(')[0].trim()}
              </h2>
              {section.title.includes('(') && (
                <span className="text-[11px] text-white/25 tracking-[0.3em] font-sans uppercase">
                  {section.title.split('(')[1].replace(')', '').trim()}
                </span>
              )}
            </motion.div>

            {/* Section image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="mb-10 group"
            >
              <MenuItemImage
                src={section.image}
                alt={section.title}
                priority={MENU_DATA.indexOf(section) === 0}
                className="aspect-[16/7] md:aspect-[21/8]"
              />
            </motion.div>

            {/* Items */}
            <div className="divide-y divide-white/[0.05]">
              {section.items.map((item, idx) => (
                <MenuItemRow key={item.id} item={item} idx={idx} onSelect={setSelectedItem} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="relative z-10 bg-matte-gray/30 border-t border-white/6 pt-20 pb-16 px-8">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-16 items-start">
          <div className="space-y-6">
            <h4 className="text-white/30 text-[8px] uppercase tracking-[1em] font-bold">موقعیت</h4>
            <p className="text-white/55 text-[13px] leading-relaxed font-light">
              همدان، خیابان میرزاده عشقی<br />
              روبروی بیمارستان سینا
              <span className="block text-[11px] text-white/30 mt-2 font-heading">
                Mirzadeh Eshghi St., Hamadan
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-10">
            <Logo size="sm" animated={false} />
            <p className="text-white/35 text-[12px] font-light italic tracking-[0.15em] text-center">
              "Every cup is a step in the journey"
            </p>
            <a
              href="https://instagram.com/Raahcoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/[0.03] border border-white/8 rounded-full hover:bg-matte-white hover:text-matte-black transition-all duration-500"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-6 text-right">
            <h4 className="text-white/30 text-[8px] uppercase tracking-[1em] font-bold">ساعات کاری</h4>
            <p className="text-white/55 text-[13px] leading-relaxed font-light">
              همه روزه از ۸ صبح تا ۱۱ شب
              <span className="block text-[11px] text-white/30 mt-2 font-heading">
                Open Daily: 08:00 — 23:00
              </span>
            </p>
          </div>
        </div>

        {/* QR */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center gap-5"
        >
          <div className="p-3.5 bg-white/[0.04] border border-white/8 rounded-2xl">
            <QRCodeSVG
              value={typeof window !== 'undefined' ? window.location.href : 'https://raah.cafe'}
              size={100}
              bgColor="transparent"
              fgColor="#e0e0e0"
              level="M"
              includeMargin={false}
              className="opacity-50"
            />
          </div>
          <div className="flex items-center gap-2 text-[8px] tracking-[0.4em] text-white/18 uppercase">
            <QrCode className="w-3 h-3" />
            Scan to share this menu
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-[7px] uppercase tracking-[1.5em] text-white/[0.06] select-none font-heading">
            RAAH CAFE · THE PASSAGE OF FLAVOR · SINCE MMXXIV
          </p>
        </div>
      </footer>
    </div>
  );
}
