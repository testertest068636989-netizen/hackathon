import { motion, useScroll, useTransform, animate, useMotionValue, useInView } from 'motion/react';
import { 
  ShieldCheck, 
  Globe, 
  Database, 
  Lock, 
  RefreshCcw, 
  ChevronRight, 
  Users, 
  Building2, 
  CheckCircle2,
  ArrowUpRight,
  Fingerprint,
  Search,
  Scan,
  Smartphone,
  ShieldAlert,
  XCircle,
  FileCheck,
  LayoutGrid,
  MapPin,
  TrendingUp,
  History,
  AlertCircle
} from 'lucide-react';
import { useRef, useEffect, useState, ReactNode } from 'react';

function CountUp({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formattedValue = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
    return prefix + formattedValue.toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: [0.32, 0.72, 0, 1] });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden flex relative border-y border-white/5 py-10 bg-white/[0.02]">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {children}
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-brand selection:text-black overflow-x-hidden bg-surface text-slate-100">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 atmosphere pointer-events-none" />
      <div className="fixed inset-0 z-0 grid-overlay pointer-events-none opacity-40" />

      {/* Navigation (Photo 3) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-16 backdrop-blur-md bg-surface/30 border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-brand rotate-45 group-hover:rotate-0 transition-all duration-500 rounded-sm" />
            <div className="w-3 h-3 bg-brand rounded-sm shadow-[0_0_15px_#10b981]" />
          </div>
          <span className="font-sans font-extrabold tracking-tight text-2xl">
            Foncier<span className="text-brand">Chain</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
          <a href="#plateforme" className="hover:text-white transition-colors">Plateforme</a>
          <a href="#registre" className="hover:text-white transition-colors">Registre</a>
          <a href="#ecosysteme" className="hover:text-white transition-colors">Écosystème</a>
          <a href="#partenaires" className="hover:text-white transition-colors">Partenaires</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="px-6 py-3 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2">
          Accéder au Portail
        </button>
      </nav>

      {/* Hero Section (Photo 4) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start z-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="font-mono text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                REGISTRE FONCIER BLOCKCHAIN • RÉPUBLIQUE DU CONGO
              </span>
            </div>
            
            <h1 className="title-massive text-5xl md:text-7xl lg:text-[5.5vw] mb-8 leading-[1.05] tracking-tight text-white">
              Droits Immuables.<br/>
              <span className="text-brand">Sécurisons l’Avenir</span><br/>
              Foncier du Congo.
            </h1>

            <p className="max-w-xl text-lg text-slate-400 font-normal leading-relaxed mb-12">
              FoncierChain ancre chaque titre foncier dans un registre blockchain inviolable — éliminant la fraude, mettant fin aux litiges et offrant à chaque citoyen congolais une preuve de propriété vérifiable et permanente.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-20 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-5 bg-brand text-white font-extrabold uppercase tracking-[0.15em] text-xs rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                Vérifier un Titre Foncier
              </button>
              <button className="w-full sm:w-auto px-8 py-5 border border-white/10 text-white font-extrabold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <Database className="w-5 h-5" />
                Consulter le Registre
              </button>
            </div>

            {/* Bottom Stats Grid (Photo 4) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 w-full">
              <div>
                <div className="text-3xl font-extrabold mb-1 text-white">
                  <CountUp value={2.4} suffix="M+" decimals={1} />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Parcelles Enregistrées</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold mb-1 text-white">
                  <CountUp value={99.9} suffix="%" decimals={1} />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Disponibilité Garantie</div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl font-extrabold mb-1 text-white">
                  <CountUp value={0} />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Titre Frauduleux</div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Visual Content (Photo 2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full" />
            
            {/* Main Visual: Man + House */}
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              {/* House Background */}
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" 
                alt="Modern House" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* The Man */}
              <img 
                src="https://static.readdy.ai/image/5428fb06229ebdcbe5e003d42ee4bd28/3e5593e51f51cc95f3ee598205439591.png" 
                alt="Propriétaire Heureux" 
                className="relative w-full h-full object-cover object-top scale-110 translate-y-10 group-hover:scale-105 transition-all duration-1000 brightness-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Tech circular overlay (from screenshot) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80%] h-[80%] border border-brand/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[60%] h-[60%] border border-brand/10 rounded-full animate-[spin_15s_linear_reverse_infinite]" />
                <div className="absolute w-[40%] h-[40%] border border-brand/30 border-dashed rounded-full" />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating UI Elements (Exactly as per Photo) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-12 glass-heavy p-5 rounded-2xl flex items-center gap-4 border border-white/10 z-20 min-w-[240px]"
            >
              <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center border border-brand/30">
                <CheckCircle2 className="w-6 h-6 text-brand" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">STATUS</span>
                <span className="font-bold text-sm text-white">Verified by Blockchain</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-20 glass-heavy p-6 rounded-2xl flex flex-col gap-4 min-w-[300px] z-20 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">ASSET ID</span>
                <Lock className="w-4 h-4 text-slate-500" />
              </div>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5">
                <div className="font-mono text-[11px] font-bold text-brand leading-relaxed break-all">
                  a3f9c12e545d98fa37bc90df6fbf8c6a6f3b0647dec980bc12b2e49c583c7d3c9
                </div>
              </div>
              <div className="text-[10px] text-slate-500 font-bold tracking-[0.2em] text-right uppercase">SHA-256 HASH</div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -right-16 glass-heavy p-3 rounded-2xl overflow-hidden min-w-[220px] z-20 shadow-2xl border border-white/10"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-900">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#10b981_0,transparent_70%)] animate-pulse" />
                <div className="absolute inset-0 grid-overlay opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                   <div className="absolute inset-0 bg-brand/40 blur-lg rounded-full animate-ping" />
                   <MapPin className="relative w-5 h-5 text-brand" />
                </div>
              </div>
              <div className="px-3 pb-2 text-center">
                <div className="text-[10px] font-extrabold text-white uppercase tracking-[0.2em] opacity-80">PARCEL [CC] VALIDATED</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Dynamic Marquee from Video) */}
      <Marquee>
        {[
          "Sécurité Immuable",
          "Zéro Fraude",
          "Blockchain Congo",
          "Propriété Transparente",
          "Registre Distribué",
          "Efficacité Administrative",
          "Patrimoine Sécurisé",
          "Audit Public",
          "Zéro Conflit"
        ].map((v, i) => (
          <div key={i} className="flex items-center gap-4 px-12 group cursor-default">
            <div className="w-2 h-2 bg-brand rounded-full shadow-[0_0_10px_#10b981]" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors duration-500">{v}</span>
          </div>
        ))}
      </Marquee>

      {/* Problem Section (Photo 5) */}
      <section id="plateforme" className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="font-mono text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 block">
              LA CRISE QUE NOUS RÉSOLVONS
            </span>
            <h2 className="title-massive text-4xl md:text-6xl mb-8 leading-tight text-white">
              Le Système Foncier Congolais est Brisé.
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              Des décennies de registres papier ont engendré une crise de fraude, de corruption et de batailles juridiques interminables qui dévastent les familles et freinent la croissance économique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-16 rounded-[2rem] border-orange-500/20 flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-8xl font-black mb-6 text-white group-hover:text-orange-500 transition-colors tracking-tighter">
                <CountUp value={60} suffix="%" />
              </div>
              <p className="text-slate-400 font-medium leading-relaxed max-w-[200px]">
                des titres fonciers actuellement en litige actif
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-500">
                <ShieldAlert className="w-4 h-4" /> Risque Élevé
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-16 rounded-[2rem] border-brand/20 flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-8xl font-black mb-6 text-white group-hover:text-brand transition-colors tracking-tighter">
                <CountUp value={7} suffix="+" />
              </div>
              <p className="text-slate-400 font-medium leading-relaxed max-w-[200px]">
                années de durée moyenne des litiges fonciers
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <LayoutGrid className="w-4 h-4" /> Paralysie Administrative
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Photo 6) */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Old System */}
            <div className="glass p-10 md:p-16 rounded-[3rem] border-red-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <div className="glass-pill text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 border-red-500/20">
                   L'Ancien Système
                 </div>
              </div>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold mb-4 text-white">Registres Papier.<br/>Fraude Permanente.</h3>
              </div>
              <div className="space-y-6">
                {[
                  "Documents facilement falsifiés ou détruits",
                  "Aucune autorité centrale de vérification",
                  "Double attribution de la même parcelle",
                  "Corruption à chaque niveau administratif",
                  "Familles expulsées après des décennies"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-500 font-medium">
                    <XCircle className="w-5 h-5 text-red-500/50" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FoncierChain System */}
            <div className="glass p-10 md:p-16 rounded-[3rem] border-brand/20 relative shadow-[0_0_100px_rgba(16,185,129,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-brand/5 animate-pulse opacity-20 pointer-events-none" />
              <div className="absolute top-0 right-0 p-8">
                 <div className="glass-pill text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/10 border-brand/20">
                   La Réponse FoncierChain
                 </div>
              </div>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold mb-4 text-white">Blockchain. Immuable.<br/>Pour Toujours.</h3>
              </div>
              <div className="space-y-6">
                {[
                  "Empreinte cryptographique SHA-256 de chaque titre",
                  "Registre distribué inviolable",
                  "Vérification publique en temps réel",
                  "Contrôles d'accès de niveau ministériel",
                  "Zéro possibilité de double attribution"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Verified Badge Hover */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="mt-12 glass p-6 rounded-2xl border-brand/30 bg-brand/5"
              >
                <div className="flex items-center justify-between mb-2">
                   <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">Fiche Parcelle</span>
                   <span className="flex items-center gap-1 text-[10px] text-brand font-bold uppercase tracking-widest">
                     <div className="w-1.5 h-1.5 bg-brand rounded-full" /> Confirmé
                   </span>
                </div>
                <div className="text-lg font-bold mb-2 text-white">#Madibou-482</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Propriétaire : Jean-Baptiste Moukala • Bloc #1 204 882
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Engine (Video 0:12) */}
      <section id="registre" className="py-40 bg-surface/50 border-y border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-mono text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 block text-center">
              MOTEUR DE VÉRIFICATION
            </span>
            <h2 className="title-massive text-4xl md:text-6xl mb-8 text-white">
              Recherchez N'importe Quel Titre Foncier Instantanément.
            </h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto">
              Interrogez le registre immuable avec un numéro de parcelle ou un hash SHA-256. Chaque résultat est vérifié cryptographiquement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center">
                <Search className="w-6 h-6 text-slate-500 group-focus-within:text-brand transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Entrez un Numéro de Parcelle ou un Hash SHA-256..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-8 pl-16 pr-48 outline-none focus:border-brand/50 focus:bg-white/10 transition-all font-mono text-lg text-white"
              />
              <div className="absolute inset-y-2 right-2 flex items-center">
                <button className="h-full px-8 bg-brand text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-emerald-400 transition-colors">
                  <Scan className="w-4 h-4" /> Interroger le Registre
                </button>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
               <span>Essayez :</span>
               <button className="text-slate-300 hover:text-brand transition-colors underline cursor-pointer">#Madibou-482</button>
               <button className="text-slate-300 hover:text-brand transition-colors underline cursor-pointer">#Brazzaville-001</button>
            </div>
          </div>

          {/* Sample Result (Video 0:15) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass p-10 rounded-[2rem] text-left border-brand/20 bg-brand/5"
          >
             <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5">
               <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center">
                 <ShieldCheck className="w-5 h-5 text-brand" />
               </div>
               <div>
                 <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">Résultat d'enquête — Recherche sur le registre en direct</div>
                 <div className="text-xl font-extrabold text-white">#Madibou-482</div>
               </div>
               <div className="ml-auto glass-pill text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/20 border-brand/30">
                 Propriété Légitime Confirmée
               </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-10">
               <div className="space-y-6">
                 <div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                     <Users className="w-3 h-3" /> Propriétaire Enregistré
                   </div>
                   <div className="text-lg font-bold text-white">Jean-Baptiste Moukala</div>
                 </div>
                 <div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                     <Database className="w-3 h-3" /> Numéro de Bloc
                   </div>
                   <div className="text-lg font-bold font-mono text-white">#1 204 882</div>
                 </div>
               </div>
               <div className="space-y-6">
                 <div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                     <Building2 className="w-3 h-3" /> Notarié par
                   </div>
                   <div className="text-lg font-bold text-slate-300">Ministère des Affaires Foncières du Congo</div>
                 </div>
                 <div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                     <RefreshCcw className="w-3 h-3" /> Horodatage
                   </div>
                   <div className="text-lg font-bold font-mono text-white text-sm">03/11/2024 • 14:32:07 UTC</div>
                 </div>
               </div>
             </div>

             <div className="p-6 bg-surface/80 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Hash SHA-256</span>
                  <span className="text-brand">Signature Valide</span>
                </div>
                <div className="font-mono text-[11px] text-slate-400 break-all leading-relaxed">
                  a3f9c12e545d98fa37bc90df6fbf8c6a6f3b0647dec980bc12b2e49c583c7d3c9f281ce9f
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section (Video 0:17) */}
      <section id="ecosysteme" className="py-40 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="font-mono text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 block">
              L'ÉCOSYSTÈME
            </span>
            <h2 className="title-massive text-4xl md:text-6xl mb-8 leading-tight text-white">
              Une Plateforme. Trois Piliers.
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              FoncierChain sert chaque partie prenante — des ministères gouvernementaux aux citoyens individuels — à travers un écosystème unifié et sécurisé.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[3rem] group"
            >
              <div className="w-full aspect-square rounded-2xl bg-surface mb-8 relative overflow-hidden flex items-center justify-center border border-white/5">
                 <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                 <Fingerprint className="w-24 h-24 text-brand absolute z-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                 <div className="w-2/3 h-2/3 border border-brand/20 rounded-full group-hover:scale-125 transition-all duration-700" />
              </div>
              <div className="glass-pill text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/10 border-brand/20 mb-6 inline-block">
                Pour les Agents Fonciers
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase text-white tracking-tighter">Portail Institutionnel</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                Accès sécurisé basé sur les rôles pour les agents fonciers, notaires et fonctionnaires ministériels. Enregistrez des parcelles, validez des transferts et auditez la chaîne de custody complète.
              </p>
              <button className="text-brand font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:gap-4 transition-all">
                Accéder au Portail <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[3rem] group bg-brand/5 border-brand/30"
            >
              <div className="w-full aspect-square rounded-2xl bg-surface mb-8 relative overflow-hidden flex items-center justify-center border border-brand/10">
                 <div className="absolute inset-0 bg-brand/20" />
                 <div className="grid grid-cols-4 gap-4 p-8 w-full h-full relative z-10 opacity-40">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-brand/20 border border-brand/30 rounded-sm" />
                    ))}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <ShieldCheck className="w-20 h-20 text-brand drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                 </div>
              </div>
              <div className="glass-pill text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/10 border-brand/30 mb-6 inline-block">
                Pour les Citoyens
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase text-white tracking-tighter">Registre Public</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                Ouvert. Transparent. Instantané. Chaque citoyen peut vérifier n'importe quel titre foncier en quelques secondes — sans bureaucratie, sans frais cachés et avec une certitude absolue.
              </p>
              <div className="flex gap-4">
                 <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">Accès Libre</div>
                 <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">Temps Réel</div>
                 <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">Gratuit</div>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[3rem] group"
            >
              <div className="w-full aspect-square rounded-2xl bg-surface mb-8 relative overflow-hidden flex items-center justify-center border border-white/5">
                 <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                 <Smartphone className="w-32 h-32 text-brand opacity-10 absolute -bottom-10" />
                 <div className="w-40 h-64 border-2 border-slate-800 rounded-[2rem] bg-slate-900 overflow-hidden relative shadow-2xl skew-y-6 group-hover:skew-y-0 transition-all duration-700">
                    <div className="w-full h-8 bg-slate-800 border-b border-white/5" />
                    <div className="p-4 space-y-3">
                       <div className="w-full h-2 bg-brand/20 rounded-full" />
                       <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                       <div className="w-full aspect-square bg-slate-800 rounded-lg flex items-center justify-center">
                          <Scan className="w-8 h-8 text-brand" />
                       </div>
                    </div>
                 </div>
              </div>
              <div className="glass-pill text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/10 border-brand/20 mb-6 inline-block">
                Vérification Instantanée
              </div>
              <h3 className="text-2xl font-extrabold mb-4 uppercase text-white tracking-tighter">Application Mobile</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                Vérifiez en 10 secondes. Scannez un QR code ou entrez un numéro de parcelle depuis n'importe où au Congo — même hors-ligne grâce au registre local sécurisé.
              </p>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div className="text-left">
                       <div className="text-[7px] uppercase tracking-widest text-slate-500 font-bold">Download on</div>
                       <div className="text-[10px] font-bold font-sans text-white">App Store</div>
                    </div>
                 </button>
                 <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div className="text-left">
                       <div className="text-[7px] uppercase tracking-widest text-slate-500 font-bold">Get it on</div>
                       <div className="text-[10px] font-bold font-sans text-white text-nowrap">Google Play</div>
                    </div>
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action (Video 0:21) */}
      <section id="contact" className="py-40">
        <div className="container mx-auto px-6 lg:px-16 text-center">
           <div className="glass p-20 md:p-32 rounded-[4rem] relative overflow-hidden group">
              <div className="absolute inset-0 atmosphere opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <span className="relative z-10 font-mono text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-8 block">
                SÉCURISEZ VOTRE HÉRITAGE
              </span>
              <h2 className="relative z-10 title-massive text-4xl md:text-8xl mb-12 text-white">
                Enregistrez Votre Terre.<br/>Protégez Votre Avenir.
              </h2>
              <p className="relative z-10 max-w-2xl mx-auto text-lg text-slate-400 mb-16 font-light">
                Rejoignez plus de 180 000 propriétaires congolais qui ont déjà sécurisé leurs droits fonciers sur la blockchain. Cela prend moins de 5 minutes.
              </p>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8">
                 <button className="w-full sm:w-auto px-12 py-6 bg-brand text-white font-extrabold uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3 group/btn">
                    <CheckCircle2 className="w-5 h-5" />
                    Commencer l'Enregistrement
                 </button>
                 <button className="w-full sm:w-auto px-12 py-6 border border-white/10 text-white font-extrabold uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                    <Database className="w-5 h-5" />
                    Télécharger le Livre Blanc
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Partner Logos (Video 0:23) */}
      <section id="partenaires" className="py-20 mb-20">
        <div className="container mx-auto px-6 lg:px-16">
           <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 text-center mb-16 opacity-50">
             PARTENAIRES INSTITUTIONNELS & VALIDATEURS
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale brightness-200">
              <div className="flex flex-col items-center gap-3 group">
                 <Building2 className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">MinFoncier</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                 <Globe className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">AMP-Congo</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                 <CheckCircle2 className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">BCC</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                 <Users className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">UN-Habitat</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                 <ShieldCheck className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">BKD</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                 <Fingerprint className="w-12 h-12" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-center">WSC</span>
              </div>
           </div>
        </div>
      </section>

      {/* Footer (Photo 3/Video) */}
      <footer className="py-20 bg-surface border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-brand rotate-45 rounded-sm" />
                </div>
                <span className="font-sans font-extrabold text-xl text-white">Foncier<span className="text-brand">Chain</span></span>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                Sécuriser l'avenir foncier du Congo grâce à la technologie blockchain immuable. Chaque titre. Chaque citoyen. Pour toujours.
              </p>
              <div className="flex items-center gap-3 p-3 bg-brand/10 border border-brand/20 rounded-xl justify-center md:justify-start">
                 <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                 <span className="text-[10px] font-bold text-brand uppercase tracking-widest text-nowrap">Réseau Principal Opérationnel</span>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-8 underline decoration-brand underline-offset-8">Plateforme</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-brand transition-all">Portail Institutionnel</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Registre Public</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Moteur de Vérification</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Application Mobile</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Documentation API</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-8 underline decoration-brand underline-offset-8">Ressources</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-brand transition-all">Livre Blanc</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Documentation Technique</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Politique de Confidentialité</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Conditions d'Utilisation</a></li>
                <li><a href="#" className="hover:text-brand transition-all">Open Source</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-8 underline decoration-brand underline-offset-8 text-nowrap">Restez Informé</h4>
              <p className="text-slate-500 text-sm mb-6">Recevez les mises à jour de la plateforme et les nouvelles fonctionnalités.</p>
              <form className="relative mb-8">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-brand/50 transition-all font-mono text-xs text-white"
                />
                <button className="absolute right-2 top-2 h-8 w-8 bg-brand rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
               © 2026 FoncierChain. République du Congo. Tous droits réservés.
            </div>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
               DAROLLO TECHNOLOGIES
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
