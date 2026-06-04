import React, { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Coffee, 
  IceCream, 
  Flame, 
  Wind, 
  Leaf, 
  Compass,
  Instagram,
  ArrowDownCircle,
  Zap,
  Sparkles,
  Droplet,
  QrCode,
  X,
  Info,
  ChevronRight,
  CreditCard
} from 'lucide-react';
import { MENU_DATA, MenuItemData } from './constants';
import { Logo, PathDecoration } from './components/Logo';

const CategoryIcon = ({ id }: { id: string }) => {
  const iconProps = { className: "w-4 h-4" };
  switch (id) {
    case 'espresso': return <Coffee {...iconProps} />;
    case 'iced-coffee': return <Droplet {...iconProps} />;
    case 'matcha': return <Zap {...iconProps} />;
    case 'refreshers': return <Wind {...iconProps} />;
    case 'hot-comforts': return <Flame {...iconProps} />;
    case 'shakes': return <IceCream {...iconProps} />;
    case 'tea': return <Leaf {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

const MenuItemImage = ({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`overflow-hidden relative rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 z-10 bg-white/[0.03] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-shimmer" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/5 p-6 text-center">
          <Sparkles className="w-8 h-8 text-white/10 mb-4" />
          <span className="text-[10px] text-white/20 uppercase tracking-widest font-light">Image unavailable</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter,brightness] duration-700"
        loading={priority ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const ItemDetailModal = ({ item, categoryImage, onClose }: { item: MenuItemData | null; categoryImage: string; onClose: () => void }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        onClick={onClose}
        className="absolute inset-0 bg-matte-black/80 backdrop-blur-xl" 
      />
      
      <motion.div
        layoutId={`item-${item.id}`}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative w-full max-w-2xl bg-matte-gray border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-20 p-4 bg-black/20 backdrop-blur-md rounded-full text-white/50 hover:text-white hover:bg-black/40 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto no-scrollbar">
          <div className="relative aspect-[16/10]">
            <MenuItemImage src={categoryImage} alt={item.name} className="h-full rounded-none border-0" />
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-light text-matte-white tracking-tight"
                >
                  {item.name}
                </motion.h2>
                {item.isPopular && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="inline-block text-[8px] text-white/80 border border-white/30 px-4 py-1.5 rounded-full uppercase tracking-[0.4em] font-bold backdrop-blur-sm"
                  >
                    Signature Selection
                  </motion.span>
                )}
              </div>
            </div>
          </div>

          <div className="p-12 space-y-16">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="space-y-8"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold flex items-center gap-3">
                  <Info className="w-3 h-3" /> Description
                </h4>
                <p className="text-white/60 leading-relaxed font-light text-[15px]">
                  {item.description || "A masterfully crafted beverage that embodies the essence of Raah's philosophy. Every element is carefully balanced to create a unique flavor profile that resonates with the journey of coffee."}
                </p>
                
                <div className="space-y-8 pt-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Customization</h4>
                  <div className="flex flex-wrap gap-4">
                    {['Extra Shot', 'Oat Milk', 'Vanilla Syrup'].map((opt, i) => (
                      <motion.span 
                        key={opt}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="text-[11px] text-white/40 border border-white/5 px-5 py-2 rounded-xl bg-white/[0.02]"
                      >
                        {opt}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="space-y-12"
              >
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold flex items-center gap-3">
                    <CreditCard className="w-3 h-3" /> Pricing
                  </h4>
                  <div className="space-y-8">
                    {typeof item.price === 'string' ? (
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-sm font-light">Standard</span>
                        <div className="text-right">
                          <span className="text-4xl font-light text-matte-white">{item.price}</span>
                          <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] mt-2">Toman (x1k)</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center group">
                          <div>
                            <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] block mb-1">
                              {item.id.startsWith('hc') ? 'Medium Size (مدیوم)' : 'Commercial Blend'}
                            </span>
                            <span className="text-white/70 font-light">
                              {item.id.startsWith('hc') ? 'Standard serving size' : 'Bold & Classic'}
                            </span>
                          </div>
                          <span className="text-3xl font-light text-matte-white">{item.price.commercial}</span>
                        </div>
                        <div className="h-[1px] bg-white/5" />
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-white/60 text-[9px] uppercase tracking-[0.2em] block mb-1">
                              {item.id.startsWith('hc') ? 'Large Size (لارج)' : 'Premium Single Origin'}
                            </span>
                            <span className="text-white/90 font-light">
                              {item.id.startsWith('hc') ? 'Generous serving size' : 'Exotic & Refined'}
                            </span>
                          </div>
                          <span className="text-4xl font-light text-matte-white">{item.price.premium}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-6 px-4">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Nutritional Profile</h4>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                    {[
                      { label: 'Calories', val: item.calories !== undefined ? `${item.calories} kcal` : 'N/A' },
                      { label: 'Caffeine', val: item.caffeine || 'N/A' },
                      { label: 'Serving', val: item.serving || 'N/A' },
                      { label: 'Origins', val: item.origins || 'N/A' }
                    ].map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                      >
                        <span className="text-[10px] text-white/20 block mb-1 uppercase tracking-wider">{stat.label}</span>
                        <span className="text-sm text-white/60 font-light">{stat.val}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-12 border-t border-white/5 flex flex-col items-center"
            >
              <Logo size="sm" animated={false} />
              <p className="mt-8 text-white/10 text-[9px] tracking-[0.8em] uppercase font-light">The Way of Flavor</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MenuItemSection: React.FC<{ item: MenuItemData; idx: number; onSelect: (item: MenuItemData) => void }> = React.memo(({ item, idx, onSelect }) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const addRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    
    // Call onSelect after a small delay for the ripple effect to show
    setTimeout(() => onSelect(item), 250);
  };

  return (
    <motion.div 
      key={item.id}
      layoutId={`item-${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        delay: Math.min(idx * 0.05, 0.3), 
        duration: 0.5, 
        ease: [0.215, 0.61, 0.355, 1] 
      }}
      whileHover={{ scale: 1.01, y: -1, backgroundColor: "rgba(255,255,255,0.02)" }}
      whileTap={{ scale: 0.98 }}
      onClick={addRipple}
      className="group relative cursor-pointer py-4 px-4 rounded-[1.5rem] transition-colors duration-300 overflow-hidden"
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bg-white/10 rounded-full pointer-events-none z-0"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 50,
              height: 50,
              marginLeft: -25,
              marginTop: -25,
            }}
          />
        ))}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="flex justify-between items-center gap-6 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl md:text-2xl font-light text-white/80 group-hover:text-matte-white transition-colors duration-700">
                {item.name}
              </h3>
              {item.isPopular && (
                <span className="text-[7px] text-white/60 border border-white/20 px-3 py-1 rounded-full uppercase tracking-[0.3em] font-bold">Signature</span>
              )}
            </div>
            {item.description && (
              <p className="text-[13px] text-white/40 font-light mt-2 leading-relaxed max-w-sm">
                {item.description}
              </p>
            )}
            {item.calories !== undefined && (
              <div className="flex items-center gap-2 mt-3 text-[10px] text-white/35 font-light">
                <span className="inline-block w-1.5 h-1.5 bg-rose-500/50 rounded-full animate-pulse" />
                <span>{item.calories} kcal</span>
                {item.caffeine && item.caffeine !== 'None' && (
                  <>
                    <span className="text-white/10">•</span>
                    <span>{item.caffeine.split(' ')[0]} Caffeine</span>
                  </>
                )}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-end gap-2 pt-1 font-heading min-w-[100px]">
            {typeof item.price === 'string' ? (
              <div className="flex flex-col items-end">
                <span className="text-3xl font-light text-matte-white">{item.price}</span>
                <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] mt-2 font-sans">Toman (x1k)</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] font-sans">
                    {item.id.startsWith('hc') ? 'Med' : 'Commercial'}
                  </span>
                  <span className="text-base font-light text-white/80 group-hover:text-white transition-colors duration-700">{item.price.commercial}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[8px] text-white/60 uppercase tracking-[0.2em] font-sans">
                    {item.id.startsWith('hc') ? 'Lrg' : 'Premium'}
                  </span>
                  <span className="text-3xl font-light text-matte-white">{item.price.premium}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-4 right-4 h-[1px] bg-white/10 group-hover:bg-white/20 transition-all duration-[1.2s]" />
    </motion.div>
  );
});

export default function App() {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const isScrollingRef = React.useRef(false);
  const navScrollRef = React.useRef<HTMLDivElement>(null);

  const activeCategory = MENU_DATA.find(s => s.items.some(i => i.id === selectedItem?.id));

  const scrollToSection = (id: string) => {
    // If we're already scrolling, don't interrupt
    if (isScrollingRef.current) return;
    
    const element = document.getElementById(id);
    if (element) {
      isScrollingRef.current = true;
      setActiveTab(id);
      
      const navHeight = navScrollRef.current?.parentElement?.offsetHeight || 100;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const targetY = absoluteElementTop - navHeight;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      
      // Sync nav bar horizontal scroll safely
      const navItem = document.getElementById(`nav-${id}`);
      const container = navScrollRef.current;
      if (navItem && container) {
        const scrollLeft = navItem.offsetLeft - container.offsetWidth / 2 + navItem.offsetWidth / 2;
        container.scrollTo({ behavior: 'smooth', left: scrollLeft });
      }

      // Safety timeout to unlock observer
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Improved Scroll Spy with Intersection Observer
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveTab(id);
          const navItem = document.getElementById(`nav-${id}`);
          const container = navScrollRef.current;
          if (navItem && container) {
            const scrollLeft = navItem.offsetLeft - container.offsetWidth / 2 + navItem.offsetWidth / 2;
            container.scrollTo({ behavior: 'smooth', left: scrollLeft });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    MENU_DATA.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedItem]);

  return (
    <div className="relative min-h-screen bg-matte-black text-matte-white selection:bg-matte-white selection:text-matte-black overflow-x-hidden font-sans">
      <PathDecoration />

      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal 
            item={selectedItem} 
            categoryImage={activeCategory?.image || ''} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>

      <header className="relative pt-32 pb-24 flex flex-col items-center justify-center border-b border-white/5 z-10 px-6">
        <Logo size="lg" />

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-12"
        >
          <ArrowDownCircle className="w-5 h-5 text-white/10" />
        </motion.div>
      </header>

      <nav className="sticky top-0 z-[60] bg-matte-black/60 backdrop-blur-3xl border-b border-white/5 py-6">
        <div ref={navScrollRef} className="max-w-2xl mx-auto flex overflow-x-auto no-scrollbar gap-3 px-6">
          {MENU_DATA.map((section) => (
            <button
              key={section.id}
              id={`nav-${section.id}`}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className={`flex-none px-6 py-3 rounded-2xl text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase transition-all duration-300 flex items-center gap-2 whitespace-nowrap border relative ${
                activeTab === section.id 
                ? 'text-matte-black' 
                : 'bg-white/5 text-white/50 border-white/5 hover:border-white/20'
              }`}
            >
              {activeTab === section.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-matte-white rounded-2xl -z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <CategoryIcon id={section.id} />
              <span className="mt-0.5">{section.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12 space-y-24 pb-60 relative z-10">
        {MENU_DATA.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32 group/section">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 mb-12 text-center items-center"
            >
              <div className="w-12 h-[1px] bg-white/20 mb-2" />
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-matte-white flex flex-col gap-4">
                <span>{section.title.split('(')[0].trim()}</span>
                {section.title.includes('(') && (
                  <span className="text-sm md:text-base text-white/30 tracking-[0.3em] font-sans uppercase">
                    {section.title.split('(')[1].replace(')', '').trim()}
                  </span>
                )}
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-12"
            >
              <MenuItemImage 
                src={section.image} 
                alt={section.title} 
                priority={MENU_DATA.indexOf(section) === 0}
                className="aspect-[16/9] md:aspect-[21/9]" 
              />
            </motion.div>

            <div className="grid gap-8">
              {section.items.map((item, idx) => (
                <MenuItemSection key={item.id} item={item} idx={idx} onSelect={setSelectedItem} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="relative z-20 bg-matte-gray/40 border-t border-white/5 pt-56 pb-32 px-10 backdrop-blur-3xl">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-24 items-start">
          <div className="space-y-12">
            <h4 className="text-white/40 text-[9px] uppercase tracking-[1em] font-bold">The Passage</h4>
            <p className="text-white/70 text-[14px] leading-relaxed font-light">
              همدان، خیابان میرزاده عشقی، روبروی بیمارستان سینا<br/>
              <span className="text-[11px] opacity-80 font-heading">Mirzadeh Eshghi St., Front of Sina Hospital, Hamadan</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-20">
            <Logo size="sm" animated={false} />
            <div className="text-center space-y-10">
              <p className="text-white/60 text-sm font-light italic tracking-[0.2em]">"Every cup is a step in the journey"</p>
              <div className="flex gap-12 justify-center">
                <a href="https://instagram.com/Raahcoffee" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/[0.02] border border-white/5 rounded-full hover:bg-matte-white hover:text-matte-black transition-all duration-700">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12 text-right">
            <h4 className="text-white/40 text-[9px] uppercase tracking-[1em] font-bold">Moments</h4>
            <p className="text-white/70 text-[14px] leading-relaxed font-light">
              همه روزه از ۸ صبح تا ۱۱ شب<br/>
              <span className="text-[11px] opacity-80 font-heading">Open Daily: 08:00 — 23:00</span>
            </p>
          </div>
        </div>

        {/* QR Code Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 flex flex-col items-center space-y-8"
        >
          <div className="p-4 bg-white/5 border border-white/10 rounded-3xl relative group">
            <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-white/10 transition-colors rounded-3xl -z-10" />
            <QRCodeSVG 
              value={typeof window !== 'undefined' ? window.location.href : 'https://raah.cafe'} 
              size={120}
              bgColor="transparent"
              fgColor="#ffffff"
              level="H"
              includeMargin={false}
              className="opacity-60 grayscale"
            />
          </div>
          <div className="flex items-center gap-3 text-[9px] tracking-[0.4em] text-white/20 uppercase font-light">
            <QrCode className="w-3 h-3" />
            Scan to view digital menu
          </div>
        </motion.div>
        
        <div className="mt-40 text-center">
          <div className="text-[7px] uppercase tracking-[1.5em] text-white/5 select-none font-heading">
            RAAH CAFE • THE PASSAGE OF FLAVOR • SINCE MMXXIV
          </div>
        </div>
      </footer>
    </div>
  );
}
