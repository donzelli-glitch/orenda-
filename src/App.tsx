/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Dumbbell, 
  Beaker, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Activity, 
  Award, 
  ChevronRight, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Users, 
  Tv,
  Zap,
  ShoppingBag,
  Filter,
  Search,
  BookOpen,
  TrendingUp,
  Instagram,
  ArrowRightCircle
} from 'lucide-react';

import { 
  kits, 
  products, 
  createWhatsappLink, 
  whatsappNumber,
  KitItem,
  ProductItem 
} from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("Todos");

  // Filter Categories list
  const categories = useMemo(() => {
    const list = new Set(products.map(p => p.category));
    return ["Todos", ...Array.from(list)];
  }, []);

  // Filtered kits based on search
  const filteredKits = useMemo(() => {
    if (!searchQuery) return kits;
    return kits.filter(k => 
      k.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      k.goal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.productsInvolved.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
      const matchesSearch = searchQuery === "" || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleWhatsappClick = (message: string) => {
    window.open(createWhatsappLink(message), '_blank');
  };

  // Header quick messages
  const headerGeneralMessage = "Olá, quero conhecer os produtos e kits da Orenda Performance. Pode me ajudar a escolher a melhor opção para minha rotina de treino?";
  const heroBuildKitMessage = "Olá, quero montar um kit da Orenda Performance de acordo com meu objetivo. Pode me ajudar a escolher os produtos certos?";
  const problemSectionMessage = "Olá, quero entender melhor quais suplementos da Orenda Performance fazem sentido para minha rotina. Pode me orientar?";
  const authoritySectionMessage = "Olá, vi a página da Orenda Performance e gostaria de falar com vocês sobre os produtos, qualidade e indicação para minha rotina.";
  const comparisonSectionMessage = "Olá, quero montar uma estratégia de suplementação com a Orenda Performance. Meu objetivo é melhorar meus treinos e escolher os produtos certos.";
  const howItWorksMessage = "Olá, quero comprar produtos da Orenda Performance e preciso de ajuda para escolher a melhor opção.";
  const resellerPartnerMessage = "Olá, tenho interesse em ser parceiro ou revendedor da Orenda Performance. Quero saber mais sobre condições comerciais, produtos e kits disponíveis.";
  const floatWhatsappMessage = "Olá, vim pela landing page da Orenda Performance e quero saber mais sobre os produtos e kits disponíveis.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-black text-gray-100 font-sans selection:bg-brand-neon-red selection:text-white">
      
      {/* 1. FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-crimson to-brand-neon-red flex items-center justify-center shadow-lg shadow-brand-crimson/20">
                <Flame className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white block">
                  ORENDA
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-neon-red block -mt-1 font-bold">
                  PERFORMANCE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                Início
              </button>
              <button onClick={() => scrollToSection('por-que-orenda')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                Por que Orenda?
              </button>
              <button onClick={() => scrollToSection('kits')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                Kits
              </button>
              <button onClick={() => scrollToSection('produtos')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                Produtos
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                Como Comprar
              </button>
              <button onClick={() => scrollToSection('parceiros')} className="text-sm font-medium text-gray-300 hover:text-brand-neon-red transition-colors focus:outline-none">
                WhatsApp
              </button>
            </nav>

            {/* CTA Button Header Desktop */}
            <div className="hidden lg:flex items-center">
              <button 
                id="btn-header-whatsapp"
                onClick={() => handleWhatsappClick(headerGeneralMessage)}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-crimson hover:bg-brand-neon-red text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-md shadow-brand-crimson/25 hover:shadow-brand-neon-red/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/10 group-hover:scale-110 transition-transform" />
                Comprar pelo WhatsApp
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-brand-dark border border-brand-light-gray text-gray-400 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-neon-red" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-brand-darker border-b border-brand-gray overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('por-que-orenda')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Por que Orenda?
                </button>
                <button 
                  onClick={() => scrollToSection('kits')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Kits Orenda
                </button>
                <button 
                  onClick={() => scrollToSection('produtos')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Produtos Individuais
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Como comprar
                </button>
                <button 
                  onClick={() => scrollToSection('parceiros')} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-gray transition-all focus:outline-none"
                >
                  Seja um Parceiro
                </button>
                
                <div className="pt-4 px-4">
                  <button 
                    onClick={() => handleWhatsappClick(headerGeneralMessage)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-brand-neon-red text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg shadow-brand-neon-red/30 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar Mensagem no WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div id="inicio" className="h-20"></div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36">
        {/* Abstract background grids & ambient light flares */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-crimson/10 rounded-full blur-[140px]"></div>
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-neon-red/5 rounded-full blur-[90px]"></div>
          <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-brand-crimson/10 rounded-full blur-[120px]"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Premium Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-dark/90 border border-brand-light-gray shadow-md">
                <span className="w-2 h-2 rounded-full bg-brand-neon-red animate-pulse"></span>
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-gray-300">
                  Lançamento Orenda Performance
                </span>
                <span className="hidden sm:inline text-[10px] text-brand-neon-red font-bold px-1.5 py-0.5 rounded bg-brand-neon-red/10 border border-brand-neon-red/20 uppercase font-mono">
                  SUPORTADO POR BIOTECH
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Pare de comprar suplemento no escuro. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-brand-neon-red">
                  Monte sua estratégia
                </span> de performance com quem entende.
              </h1>

              {/* Subheadline and pain summary */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                A <span className="font-semibold text-white">Orenda Performance</span> une ciência, altíssima qualidade e responsabilidade técnica para apoiar sua rotina de treino, força, resistência, recuperação e evolução física constante com mais segurança.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-brand-dark/80 border-l-4 border-brand-neon-red text-left max-w-2xl mx-auto lg:mx-0 shadow-lg backdrop-blur-sm">
                <p className="text-sm text-gray-400 italic">
                  Você treina pesado, se esforça e tenta evoluir, mas muitas vezes não sabe se está usando o produto certo, na dose ideal ou com a estratégia correta. A Orenda Performance nasceu para mudar isso: suplementação de alta gama com orientação humana e científica.
                </p>
              </div>

              {/* CTA Button Group */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="px-8 py-4 bg-white text-brand-black hover:bg-gray-100 font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg hover:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 fill-brand-black/10" />
                  Ver Produtos
                </button>
                <button 
                  onClick={() => handleWhatsappClick(heroBuildKitMessage)}
                  className="px-8 py-4 bg-brand-crimson hover:bg-brand-neon-red text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-xl shadow-brand-crimson/20 hover:shadow-brand-neon-red/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white/10" />
                  Montar meu Kit pelo WhatsApp
                </button>
              </div>

              {/* Badges Checklist Grid */}
              <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left border-t border-brand-gray">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">Ciência aplicada à performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">Atendimento direto WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">Suporte profissional personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">Linha Esportiva Orenda Biotech</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Mockup Area */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative outer glow circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-neon-red/15 rounded-full blur-3xl z-0"></div>
                
                {/* Main Product Feature Frame */}
                <div className="relative z-10 bg-brand-dark/95 border border-brand-gray rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden group">
                  
                  {/* Decorative glowing gradient border top */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-neon-red to-transparent"></div>
                  
                  {/* Premium Tag */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold text-brand-neon-red uppercase bg-brand-neon-red/10 px-2.5 py-1 rounded">
                      Garantia Orenda Biotech
                    </span>
                    <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-neon-red" /> Força & Pureza
                    </span>
                  </div>

                  {/* Supplemental Graphic Render */}
                  <div className="relative h-64 w-full bg-black/60 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-brand-gray group-hover:border-brand-light-gray/40 transition-colors">
                    
                    {/* Laser grid effects inside placeholder */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(214,28,28,0.1)_1px,transparent_1px)] bg-[size:100%_12px] opacity-30 animate-pulse"></div>
                    
                    {/* Floating Glow supplement canister mimic */}
                    <div className="relative w-28 h-40 bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg border border-brand-light-gray shadow-2xl flex flex-col justify-between p-3 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-4 bg-brand-crimson border-b border-black"></div>
                      
                      <div className="z-10 mt-2">
                        <span className="font-display font-extrabold text-[11px] block tracking-tighter text-white">ORENDA</span>
                        <span className="text-[7px] font-mono text-brand-neon-red font-bold uppercase tracking-widest block -mt-1ENDA">PERFORMANCE</span>
                      </div>
                      
                      <div className="z-10 bg-brand-black/90 p-1.5 rounded border border-brand-gray">
                        <span className="text-[9px] font-bold text-white block uppercase text-center tracking-tight">CREATINA</span>
                        <span className="text-[7px] font-mono text-gray-400 block text-center">PURE MONOHYDRATE</span>
                      </div>
                      
                      <div className="flex justify-between items-center z-10 pt-1 border-t border-brand-gray">
                        <span className="text-[6px] font-mono text-gray-500">BIOTECH SCI</span>
                        <span className="text-[6px] font-mono text-brand-neon-red font-bold">100% PURA</span>
                      </div>
                      
                      {/* Ambient shine overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12"></div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none mt-2">
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        PRODUTOS REAIS ORENDA BIOTECH
                      </p>
                    </div>
                  </div>

                  {/* Summary copy underneath rendering */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-brand-neon-red font-mono uppercase tracking-wider font-extrabold mb-1">
                      Fórmulas Bem Estruturadas
                    </p>
                    <p className="text-xs text-gray-400">
                      Suplementos esportivos com alto teor de pureza, desenvolvidos sob rigoroso controle científico para atletas exigentes.
                    </p>
                  </div>

                </div>

                {/* Aesthetic Float Badge */}
                <div className="absolute -bottom-6 -right-6 z-20 bg-brand-dark border border-brand-light-gray p-4 rounded-xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-neon-red/10 border border-brand-neon-red/30 flex items-center justify-center text-brand-neon-red">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-display font-bold text-sm block">100% Nacional</span>
                    <span className="text-gray-400 text-[10px] block font-mono">Padrão de Formulação Química</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PROBLEMA (DORES) */}
      <section className="bg-brand-darker py-20 sm:py-28 relative border-t border-b border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
              Desafios da Suplementação Esportiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O problema não é só treinar pouco. <br/>Muitas vezes é <span className="text-brand-neon-red">suplementar errado.</span>
            </h2>
            <p className="text-base text-gray-400 font-light leading-relaxed">
              Muita gente compra suplemento por impulso, indicação solta de redes sociais ou promoções milagrosas. O resultado acumulado é dinheiro jogado fora, frustração e uma rotina que não evolui.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-xl bg-brand-dark hover:bg-zinc-900 border border-brand-gray hover:border-red-950 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-brand-neon-red group-hover:bg-brand-neon-red group-hover:text-white transition-all duration-300">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-neon-red transition-colors">
                  Você não sabe o que tomar
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Creatina, whey protein, BCAA, glutamina, beta-alanina, ZMA... sem uma orientação transparente, tudo parece extremamente confuso e redundante para seu bolso.
                </p>
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider block mt-6 border-t border-brand-gray/50 pt-3">
                Dúvida Diária
              </span>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 rounded-xl bg-brand-dark hover:bg-zinc-900 border border-brand-gray hover:border-red-950 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-brand-neon-red group-hover:bg-brand-neon-red group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-neon-red transition-colors">
                  Você gasta e não sente evolução
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Sem a constância de uso correta, dose adaptada, treino coordenado e alimentação sólida, o suplemento vira apenas mais um pote esquecido na sua prateleira do armário.
                </p>
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider block mt-6 border-t border-brand-gray/50 pt-3">
                Investimento Sem Retorno
              </span>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-xl bg-brand-dark hover:bg-zinc-900 border border-brand-gray hover:border-red-950 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-brand-neon-red group-hover:bg-brand-neon-red group-hover:text-white transition-all duration-300">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-neon-red transition-colors">
                  Compra sem saber procedência
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Em um mercado de suplementação cheio de promessas mágicas exageradas de laboratórios escusos, procedência técnica e seriedade laboratorial precisam ditar sua escolha.
                </p>
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider block mt-6 border-t border-brand-gray/50 pt-3">
                Risco De Pureza
              </span>
            </div>

            {/* Card 4 */}
            <div className="p-6 sm:p-7 rounded-xl bg-brand-dark hover:bg-zinc-900 border border-brand-gray hover:border-red-950 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-brand-neon-red group-hover:bg-brand-neon-red group-hover:text-white transition-all duration-300">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-neon-red transition-colors">
                  Treina duro, mas falta algo
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Falta explosão muscular final, rapidez na recuperação diária, regularidade física e uma estratégia de nutrição ativa que faça total sentido com seu cronograma.
                </p>
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider block mt-6 border-t border-brand-gray/50 pt-3">
                Platô Físico
              </span>
            </div>

          </div>

          {/* Problem CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => handleWhatsappClick(problemSectionMessage)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-dark border border-brand-light-gray hover:border-brand-neon-red text-white hover:text-brand-neon-red font-semibold uppercase tracking-wider text-xs rounded-lg shadow-md hover:bg-brand-gray transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 text-brand-neon-red fill-transparent" />
              Quero escolher melhor meus suplementos
            </button>
          </div>

        </div>
      </section>

      {/* 4. SEÇÃO DE SOLUÇÃO */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        
        {/* Glow block background decoration */}
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-brand-crimson/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:w-1/2 space-y-6">
              <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
                Solução Consciente
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A Orenda Performance não vende apenas suplemento. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Entrega estratégia</span> para sua rotina.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed font-light">
                Cada produto da marca Orenda Performance foi meticulosamente projetado para apoiar uma etapa real da sua evolução saudável: aumento de força, resistência para dobras aeróbicas, regeneração pós-estresse físico, reforço metabólico e controle nutricional diário.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-neon-red/10 border border-brand-neon-red/20 active:bg-brand-neon-red flex items-center justify-center text-brand-neon-red shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Consistência e Segurança Laboratorial</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Produzido obedecendo a rígidos controle de controle de qualidade laboratorial da Orenda Biotech.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-neon-red/10 border border-brand-neon-red/20 active:bg-brand-neon-red flex items-center justify-center text-brand-neon-red shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Matérias-Primas Selecionadas</h4>
                    <p className="text-xs text-gray-400 mt-0.5 font-light">Máxima biodisponibilidade para o corpo absorver os nutrientes e minerais de modo pleno.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-neon-red/10 border border-brand-neon-red/20 active:bg-brand-neon-red flex items-center justify-center text-brand-neon-red shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Rotulagem Transparente</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Sem maquiagem de ingredientes ou aditivos ocultos para inflar pesos de forma enganosa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillars/Differentials Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Diff Card 1 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Foco esportivo pragmático</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Produtos pensados diretamente para a rotina intensa e demandas metabólicas esportivas.
                </p>
              </div>

              {/* Diff Card 2 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Responsabilidade técnica</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Fórmulas desenvolvidas sob supervisão farmacêutica e química, garantindo o que está no rótulo.
                </p>
              </div>

              {/* Diff Card 3 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Atendimento humanizado</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Suporte direto focado em te indicar o que funciona para o seu biotipo, sem empurrar aditivos inúteis.
                </p>
              </div>

              {/* Diff Card 4 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Kits Montados por Objetivo</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Combinações racionais coordenadas para você otimizar o estoque doméstico e economizar.
                </p>
              </div>

              {/* Diff Card 5 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Linha Orenda Biotech</h4>
                <p className="text-xs text-gray-400 mt-1">
                  A força de um ecossistema focado no desenvolvimento tecnológico de biotecnologia e nutrição.
                </p>
              </div>

              {/* Diff Card 6 */}
              <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray hover:border-brand-light-gray transition-colors">
                <div className="text-brand-neon-red mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Qualidade, ciência & propósito</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Produtos que agem com exatidão celular para quem treina de verdade. Sem falsas promessas.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. SEÇÃO DE AUTORIDADE (EDUARDO DONZELLI CO-FOUNDER BRIEF) */}
      <section id="por-que-orenda" className="bg-brand-darker py-20 sm:py-28 relative border-t border-b border-brand-gray overflow-hidden">
        
        {/* Glow lights */}
        <div className="absolute left-1/4 -bottom-10 w-96 h-96 bg-brand-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Co-founder chemistry visuals */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Decorative border vector background mimic */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-crimson/10 to-transparent rounded-2xl -rotate-3 border border-brand-gray z-0 scale-102"></div>
                
                {/* Visual Bio Box */}
                <div className="relative z-10 bg-brand-dark border-2 border-brand-gray rounded-2xl p-6 sm:p-8 text-left space-y-6 shadow-2xl">
                  
                  {/* Bio Header Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-crimson/15 border border-brand-neon-red/30 flex items-center justify-center text-brand-neon-red font-display font-extrabold text-sm">
                      ED
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base leading-tight">Eduardo Donzelli</h4>
                      <p className="text-brand-neon-red text-[11px] font-mono uppercase tracking-widest font-semibold">Responsável Técnico</p>
                    </div>
                  </div>

                  {/* Chemistry formulas mimic tags */}
                  <div className="grid grid-cols-2 gap-2 text-center pt-2">
                    <div className="p-2.5 rounded bg-brand-black border border-brand-light-gray flex flex-col items-center justify-center">
                      <span className="text-[10px] font-mono text-gray-500 block">CREDENCIAL</span>
                      <span className="text-xs font-bold text-white block">Eng. Químico</span>
                    </div>
                    <div className="p-2.5 rounded bg-brand-black border border-brand-light-gray flex flex-col items-center justify-center">
                      <span className="text-[10px] font-mono text-gray-500 block">ACADÊMICO</span>
                      <span className="text-xs font-bold text-white block">Mestre</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-brand-gray pt-4">
                    <div className="flex gap-2 items-center text-xs text-gray-300">
                      <Check className="w-4 h-4 text-brand-neon-red shrink-0" />
                      <span>Especialista em formulação analítica</span>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-gray-300">
                      <Check className="w-4 h-4 text-brand-neon-red shrink-0" />
                      <span>Controle estrito de insumos e matérias</span>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-gray-300">
                      <Check className="w-4 h-4 text-brand-neon-red shrink-0" />
                      <span>Desenvolvimento limpo livre de substâncias proibidas</span>
                    </div>
                  </div>

                  <div className="bg-brand-black/80 rounded-lg p-3 text-center border border-brand-gray">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">CONSELHO REGIONAL</span>
                    <span className="text-[11px] font-mono font-bold text-brand-neon-red">QUALIDADE & SEGURANÇA CERTIFICADA</span>
                  </div>

                </div>

                <div className="absolute -top-4 -right-4 bg-brand-neon-red text-white font-mono text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md shadow-lg rotate-6">
                  Visão Científica
                </div>

              </div>
            </div>

            {/* Co-founder speech right text column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold block">
                Base Científica & Propósito
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Uma marca com base técnica, <br/>propósito e responsabilidade real.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed font-light">
                A <span className="font-semibold text-white">Orenda Performance</span> faz parte da Orenda Biotech, uma marca brasileira criada para unir ciência sólida, ativos de pureza exemplar e tecnologia no desenvolvimento de suplementos voltados à saúde metabólica, performance atlética e bem-estar corporal completo.
              </p>
              <p className="text-base text-gray-300 leading-relaxed font-light">
                A linha de produtos é conduzida meticulosamente com a visão técnica minuciosa de <strong className="text-white font-bold">Eduardo Donzelli</strong>, Engenheiro Químico, Mestre em Ciências Exatas e especialista em desenvolvimento e produção técnica de suplementação alimentar, com foco irredutível em segurança, formulações assertivas e compromisso real com a saúde do cliente.
              </p>

              {/* Bullet points elements horizontal or grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-gray">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-neon-red"></span>
                    <h4 className="text-sm font-bold text-gray-200">Engenharia Química de Ponta</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light">Controle absoluto de ph, solubilidade de pó e homogeneidade de cada lote.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-neon-red"></span>
                    <h4 className="text-sm font-bold text-gray-200">Mestre em Ciências Exatas</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light">Visão científica pragmática aplicada na combinação ideal de compostos.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-neon-red"></span>
                    <h4 className="text-sm font-bold text-gray-200">Pesquisa e Inovação</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light">Atualização constante com o que há de mais recente na pesquisa esportiva mundial.</p>
                </div>
                <div className="flex flex-col justify-center">
                  <button 
                    onClick={() => handleWhatsappClick(authoritySectionMessage)}
                    className="self-start inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-neon-red hover:text-white transition-colors cursor-pointer group"
                  >
                    Falar com a Orenda Biotech
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <button
                  onClick={() => handleWhatsappClick(authoritySectionMessage)}
                  className="px-6 py-3.5 bg-brand-dark hover:bg-brand-gray border border-brand-light-gray hover:border-brand-neon-red rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-brand-neon-red" />
                  Falar com o responsável pela Orenda
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE KITS (FIRST, FOR HIGHER AOV) */}
      <section id="kits" className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold text-brand-neon-red bg-brand-neon-red/10 px-3 py-1 rounded inline-block">
              Mais Inteligente • Mais Econômico
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Escolha seu <span className="text-brand-neon-red">Kit Orenda Performance</span> conforme seu objetivo
            </h2>
            <p className="text-base text-gray-400 font-light">
              Combinações estratégicas para quem quer sair de compras aleatórias e montar uma rotina física coordenada com embasamento técnico e aproveitamento superior de ativos.
            </p>
          </div>

          {/* Quick Objective Filtering or info tagline */}
          <div className="flex justify-center mb-10">
            <div className="p-1 px-1.5 bg-brand-dark border border-brand-gray rounded-full flex flex-wrap items-center justify-center gap-1 text-[11px] font-mono text-gray-400">
              <span className="px-3 py-1 font-bold text-brand-neon-red uppercase">Suplementação Inteligente:</span>
              <span className="hidden md:inline px-2 text-gray-500">•</span>
              <span className="px-3 py-1 bg-brand-gray rounded-full text-white">Atendimento focado via WhatsApp</span>
            </div>
          </div>

          {/* Kits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit) => {
              // Custom gradient setups according to badge
              let badgeColorStyle = "bg-brand-neon-red text-white";
              if (kit.badge === "Melhor custo-benefício") badgeColorStyle = "bg-green-600 text-white";
              if (kit.badge === "Ideal para começar") badgeColorStyle = "bg-blue-600 text-white";
              if (kit.badge === "Performance premium") badgeColorStyle = "bg-amber-500 text-brand-black font-extrabold";

              return (
                <div 
                  key={kit.id}
                  className="group relative bg-brand-dark/95 border border-brand-gray/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-neon-red/60 hover:shadow-2xl hover:shadow-brand-crimson/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative glowing marker inside card on hover */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand-neon-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="space-y-6">
                    {/* Badge and Title Block */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-neon-red font-semibold">
                        {kit.goal}
                      </span>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded shadow-sm ${badgeColorStyle}`}>
                        {kit.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-neon-red transition-colors font-display">
                        {kit.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                        {kit.description}
                      </p>
                    </div>

                    {/* Products involved list block */}
                    <div className="p-4 rounded-xl bg-brand-black/90 border border-brand-light-gray/60 space-y-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-brand-neon-red block font-bold">
                        PRODUTOS COMPOSIÇÃO:
                      </span>
                      <ul className="space-y-1.5">
                        {kit.productsInvolved.map((p, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                            <span className="text-brand-neon-red font-bold mt-0.5">•</span>
                            <span className="font-medium">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits block */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 block">
                        Por que funciona?
                      </span>
                      <div className="space-y-1">
                        {kit.benefits.map((b, i) => (
                          <div key={i} className="flex gap-2 items-start text-xs text-gray-300 font-light leading-snug">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-crimson shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Button */}
                  <div className="mt-8 pt-4 border-t border-brand-gray/60 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-500 font-mono">Preço Sugerido:</span>
                      <div className="text-right">
                        <span className="text-2xl font-display font-extrabold text-white">
                          {kit.price}
                        </span>
                        {kit.price.includes("XX,XX") && (
                          <span className="text-[9px] block text-brand-neon-red uppercase font-mono font-bold animate-pulse mt-0.5">
                            Preço Especial WhatsApp
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsappClick(kit.whatsappMessage)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-brand-crimson hover:bg-brand-neon-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 group-hover:scale-102 cursor-pointer shadow-lg shadow-brand-crimson/10"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-white/10" />
                      Comprar pelo WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. SEÇÃO DE PRODUTOS INDIVIDUAIS */}
      <section id="produtos" className="bg-brand-darker py-20 sm:py-28 relative border-t border-b border-brand-gray">
        
        {/* Subtle grid elements overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(214,28,28,0.15),rgba(255,255,255,0))]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
              Portfólio de Ativos Puros
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Produtos Orenda Performance
            </h2>
            <p className="text-base text-gray-400 font-light">
              Selecione o suplemento ideal de acordo com sua dieta ou indicação médica para apoiar sua musculação, atletismo ou atividades laborais diárias com consistência científica.
            </p>
          </div>

          {/* Search and Filters Hub */}
          <div className="max-w-4xl mx-auto mb-10 space-y-6">
            
            {/* Search Input Bar */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <Search className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Buscar suplemento (ex: Creatina, Whey, ZMA, BCAA...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-dark border border-brand-gray focus:border-brand-neon-red rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white text-xs font-mono"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Category Pill Filters (Fast and responsive) */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500 font-mono flex items-center gap-1 shrink-0 mr-1.5">
                <Filter className="w-3.5 h-3.5 text-brand-neon-red" /> CATEGORIA:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase font-mono tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat 
                      ? "bg-brand-neon-red text-white font-bold" 
                      : "bg-brand-dark hover:bg-brand-gray text-gray-400 hover:text-white border border-brand-gray"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Dynamic Grid of Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((p) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={p.id}
                    className="group bg-brand-dark border border-brand-gray/70 hover:border-brand-light-gray rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Product Header Badge */}
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-black border border-brand-light-gray text-gray-400 font-medium">
                          {p.category}
                        </span>
                        {p.badge && (
                          <span className="text-[8px] font-mono text-brand-neon-red uppercase tracking-widest font-extrabold bg-brand-neon-red/10 border border-brand-neon-red/20 px-2 py-0.5 rounded">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      {/* Mock Product Canister Visual Preview */}
                      <div className="h-44 w-full bg-brand-black rounded-lg border border-brand-gray/60 flex items-center justify-center p-3 relative overflow-hidden">
                        
                        {/* Glow circles */}
                        <div className="absolute w-24 h-24 bg-brand-crimson/5 rounded-full blur-xl pointer-events-none"></div>

                        {/* Canister outline mimic */}
                        <div className="relative w-20 h-32 bg-gradient-to-b from-neutral-900 to-black border border-zinc-800 rounded-md p-2 flex flex-col justify-between text-center overflow-hidden">
                          
                          {/* Cap */}
                          <div className="absolute top-0 inset-x-0 h-2 bg-brand-crimson border-b border-black"></div>
                          
                          {/* Content Label */}
                          <div className="z-10 mt-1.5">
                            <span className="text-[5px] font-mono text-gray-500 block">ORENDA LABS</span>
                            <span className="text-[7.5px] font-display font-extrabold text-white block tracking-tighter leading-none pt-0.5">PERFORMANCE</span>
                          </div>

                          {/* Center Spec */}
                          <div className="my-1.5">
                            <div className="bg-brand-crimson/15 border border-brand-neon-red/30 py-1.5 px-0.5 rounded text-white font-mono text-[8.5px] leading-none uppercase font-extrabold tracking-tight">
                              {p.name.split(" ").slice(0, 2).join(" ")}
                            </div>
                            <span className="text-[6px] text-gray-400 block pt-1 uppercase tracking-tight">
                              {p.name.slice(-4) || 'Puro'}
                            </span>
                          </div>

                          {/* Foot Note */}
                          <div className="flex justify-between items-center text-[5px] text-gray-500 border-t border-zinc-900 pt-1">
                            <span>BIOTECH</span>
                            <span className="text-brand-neon-red font-bold font-mono">100% PURE</span>
                          </div>

                          {/* Spec Glass glare */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45"></div>
                        </div>

                      </div>

                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-brand-neon-red transition-colors font-display">
                          {p.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      {/* Benefits small checklist */}
                      <div className="space-y-1.5 border-t border-brand-gray pt-3">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 block">
                          Diferenciais chaves:
                        </span>
                        <div className="space-y-1">
                          {p.benefits.map((b, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-gray-300 font-light leading-snug">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-neon-red shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Footer Info & Buy Button */}
                    <div className="mt-6 pt-3 border-t border-brand-gray space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-gray-500 font-mono">Preço sugerido:</span>
                        <div className="text-right">
                          <span className="text-xl font-display font-bold text-white">
                            {p.price}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleWhatsappClick(p.whatsappMessage)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-dark hover:bg-brand-gray border border-brand-light-gray hover:border-brand-neon-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 text-brand-neon-red shrink-0" />
                        Comprar pelo WhatsApp
                      </button>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12 p-8 rounded-xl bg-brand-dark border border-brand-gray max-w-lg mx-auto">
              <span className="text-brand-neon-red block font-extrabold text-2xl mb-1">!</span>
              <p className="text-gray-300 font-medium">Nenhum suplemento encontrado</p>
              <p className="text-xs text-gray-500 mt-1">Experimente buscar por outros termos ou redefinir a categoria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("Todos"); }}
                className="mt-4 px-4 py-2 bg-brand-gray text-xs rounded hover:bg-brand-light-gray text-white transition-all font-mono"
              >
                Resetar Filtros
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 8. SEÇÃO DE COMPARAÇÃO */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
              Escolha Inteligente vs Custo Oculto
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprar suplemento aleatório é caro. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-neon-red">Montar uma estratégia</span> é inteligente.
            </h2>
            <p className="text-base text-gray-400 font-light">
              Compare as duas abordagens de compra e perceba como sua economia reside no direcionamento correto de ativos esportivos eficientes.
            </p>
          </div>

          {/* Comparison Table / Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Column 1 - Negative Approach */}
            <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden grayscale opacity-70">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-700"></div>
              
              <div className="space-y-1">
                <span className="text-xs text-gray-500 uppercase font-mono tracking-wider font-extrabold block">Modo Comum</span>
                <h3 className="text-xl font-bold text-gray-400">Compra Aleatória / Impulso</h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-zinc-900 text-zinc-500 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Compra por impulso</h4>
                    <p className="text-xs text-gray-500">Gasto impulsionado por ofertas enganosas sem avaliar o que o organismo de fato precisa no momento.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-zinc-900 text-zinc-500 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Não sabe a função técnica de cada produto</h4>
                    <p className="text-xs text-gray-500">Consome pó e comprimido apenas por mimetizar o que atletas patrocinados sugerem.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-zinc-900 text-zinc-500 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Usa sem constância diária</h4>
                    <p className="text-xs text-gray-500">Esquece de suplementar nos dias de descanso, cortando os benefícios e o pico celular acumulado.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-zinc-900 text-zinc-500 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Mistura produtos sem lógica molecular</h4>
                    <p className="text-xs text-gray-500">Sobrecarrega a absorção com substâncias antagônicas, desperdiçando biodisponibilidade no trato digestivo.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-zinc-900 text-zinc-500 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400">Gasta mais e aproveita menos</h4>
                    <p className="text-xs text-gray-500">Acumula potes vazios com frações insuficientes sem obter resultados visíveis ou ganho esportivo real.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - High End Orenda Approach */}
            <div className="bg-brand-dark/95 border-2 border-brand-neon-red rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-2xl shadow-brand-crimson/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-neon-red"></div>
              
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="text-xs text-brand-neon-red uppercase font-mono tracking-wider font-extrabold block">Recomendado</span>
                  <h3 className="text-xl font-bold text-white">Estratégia Orenda Performance</h3>
                </div>
                <span className="text-[9px] font-mono uppercase bg-brand-neon-red text-white font-bold px-2 py-0.5 rounded shadow">
                  Custo-benefício real
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Escolha orientada por objetivo real</h4>
                    <p className="text-xs text-gray-300">Indicação de whey, creatina ou beta-alanina alinhada perfeitamente com seu ritmo semanal.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Kits pensados por rotina corporativa</h4>
                    <p className="text-xs text-gray-300 font-light">Combinações prontas que sincronizam pré-treino, pós-treino e mineralização noturna sem bagunça.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Atendimento direto e técnico</h4>
                    <p className="text-xs text-gray-300 font-light">Contate-nos pelo WhatsApp para tirar dúvidas de dosagem diretamente com o suporte Orenda.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Produtos com descrição límpida</h4>
                    <p className="text-xs text-gray-300">Rótulos fáceis de analisar e focados em transparência total de substâncias.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-brand-neon-red/10 text-brand-neon-red mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Mais confiança na hora de comprar</h4>
                    <p className="text-xs text-gray-300 font-light font-sans">Segurança laboratorial de uma marca associada à respeitada Orenda Biotech.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Compare CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => handleWhatsappClick(comparisonSectionMessage)}
              className="px-8 py-4 bg-brand-neon-red hover:bg-brand-crimson text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-xl shadow-brand-neon-red/25 hover:shadow-brand-crimson/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white/10" />
              Quero montar minha estratégia
            </button>
          </div>

        </div>
      </section>

      {/* 9. SEÇÃO COMO FUNCIONA */}
      <section id="como-funciona" className="bg-brand-darker py-20 sm:py-28 border-t border-b border-brand-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
              Simples • Rápido • Garantido
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Como comprar sua suplementação Orenda Performance
            </h2>
            <p className="text-base text-gray-400 font-light">
              Nosso fluxo de aquisição é direto, ágil e focado em tirar suas dúvidas de rotina antes de enviar seu pacote.
            </p>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-6 sm:p-8 rounded-xl bg-brand-dark border border-brand-gray relative space-y-4 group">
              <span className="text-4xl font-extrabold font-mono text-brand-neon-red/20 group-hover:text-brand-neon-red/35 transition-colors block leading-none">
                01
              </span>
              <h3 className="text-lg font-bold text-white">Escolha seu objetivo</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Determine o que deseja intensificar: ganho de força, aumento de massa muscular magra, melhora na resistência metabólica, pós-treino reconstrutor ou cuidados diários de colágeno.
              </p>
              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-brand-neon-red block pt-2">
                Qualquer nível de treino
              </span>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-8 rounded-xl bg-brand-dark border border-brand-gray relative space-y-4 group">
              <span className="text-4xl font-extrabold font-mono text-brand-neon-red/20 group-hover:text-brand-neon-red/35 transition-colors block leading-none">
                02
              </span>
              <h3 className="text-lg font-bold text-white">Clique no produto ou kit</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Cada um de nossos botões de checkout inteligente abre o aplicativo do WhatsApp pré-configurado com a mensagem certa detalhando seu interesse, evitando digitações desnecessárias.
              </p>
              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-brand-neon-red block pt-2">
                Conectividade instantânea
              </span>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-xl bg-brand-dark border border-brand-gray relative space-y-4 group">
              <span className="text-4xl font-extrabold font-mono text-brand-neon-red/20 group-hover:text-brand-neon-red/35 transition-colors block leading-none">
                03
              </span>
              <h3 className="text-lg font-bold text-white">Receba atendimento direto</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Nossa equipe humana especializada confirma os valores, pacotes promocionais vigentes, indicações ideais e coordena o frete ágil para sua residência com total segurança.
              </p>
              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-brand-neon-red block pt-2">
                Acompanhamento contínuo
              </span>
            </div>

          </div>

          {/* Action Step */}
          <div className="mt-14 text-center">
            <button
              onClick={() => handleWhatsappClick(howItWorksMessage)}
              className="px-8 py-4 bg-transparent hover:bg-brand-neon-red/5 text-white hover:text-brand-neon-red border border-brand-light-gray hover:border-brand-neon-red font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4.5 h-4.5 text-brand-neon-red fill-transparent group-hover:fill-brand-neon-red" />
              Falar com a Orenda agora
            </button>
          </div>

        </div>
      </section>

      {/* 10. SEÇÃO DE PROVA E CONFIANÇA */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-bold">
              Selo de Credibilidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Por que a Orenda Performance gera confiança?
            </h2>
            <p className="text-base text-gray-400 font-light leading-relaxed">
              Diferente de marcas genéricas que terceirizam e escondem suas formulações, nós expomos nossa responsabilidade química no topo do nosso modelo de atuação comercial.
            </p>
          </div>

          {/* Trust points bento grid elements visually */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Point 1 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">01.</span>
              <h4 className="text-sm font-bold text-gray-200">Suporte sob Engenheiro Químico</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Garantia de exatidão de compostos químicos, homogeneidade de lotes comerciais e ph equilibrado.
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">02.</span>
              <h4 className="text-sm font-bold text-gray-200">Linha da Orenda Biotech</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Tradição laboratorial que preza por biotecnologia voltada à integridade física de nossos usuários.
              </p>
            </div>

            {/* Point 3 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">03.</span>
              <h4 className="text-sm font-bold text-gray-200">Comunicação Clara</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Copys e descrições sem sensacionalismo enganoso ou promessas ilegais de rejuvenescimento milagroso.
              </p>
            </div>

            {/* Point 4 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">04.</span>
              <h4 className="text-sm font-bold text-gray-200">Diferentes Objetivos</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Dosagem adaptada para quem corre, treina crossfit, ou apenas quer recuperar vigor ósseo diário.
              </p>
            </div>

            {/* Point 5 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">05.</span>
              <h4 className="text-sm font-bold text-gray-200">Atendimento Humano</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Acesso aos canais oficiais de conversa com especialistas para que você sinta amparo no consumo.
              </p>
            </div>

            {/* Point 6 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2">
              <span className="text-brand-neon-red font-mono font-bold text-xs">06.</span>
              <h4 className="text-sm font-bold text-gray-200">Qualidade Inabalável</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Rígidos testes de blindagem e pureza de substâncias químicas essenciais adicionadas em nossa cadeia.
              </p>
            </div>

            {/* Point 7 */}
            <div className="p-5 rounded-lg bg-zinc-900 border border-brand-gray space-y-2 text-left">
              <span className="text-brand-neon-red font-mono font-bold text-xs">07.</span>
              <h4 className="text-sm font-bold text-gray-200">Marca 100% Brasileira</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Pesquisa e produção nacional impulsionando a biotecnologia doméstica com compromisso direto com os clientes.
              </p>
            </div>

            {/* Point 8 (Authority callout box) */}
            <div className="p-5 rounded-lg bg-brand-black border border-brand-light-gray flex flex-col justify-center text-center">
              <p className="text-xs text-gray-400 leading-relaxed italic">
                “A Orenda Performance foi criada para quem quer parar de comprar suplementos no escuro.”
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11. SEÇÃO DE CHAMADA PARA LOJISTAS E PARCEIROS */}
      <section id="parceiros" className="bg-brand-darker py-20 sm:py-28 relative border-t border-b border-brand-gray overflow-hidden">
        
        {/* Glow block decoration background */}
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-brand-crimson/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-brand-dark border border-brand-gray rounded-2xl p-8 sm:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-neon-red to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="text-xs text-brand-neon-red uppercase font-mono tracking-widest font-extrabold block">
                  Canais de Atacado & Revenda
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Tem loja, academia ou trabalha com revenda?
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  A Orenda Performance está em expansão acelerada pelo território nacional. Buscamos parceiros comerciais comprometidos, academias de destaque, lojas de suplementos esportivos e nutricionistas que desejam oferecer produtos de procedência inquestionável aos seus clientes finais com tabelas comerciais saudáveis de alta lucratividade.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <button
                  onClick={() => handleWhatsappClick(resellerPartnerMessage)}
                  className="w-full sm:w-auto px-7 py-4 bg-brand-crimson hover:bg-brand-neon-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-brand-crimson/15 hover:shadow-brand-neon-red/25 cursor-pointer text-center whitespace-nowrap"
                >
                  Quero ser parceiro Orenda
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 12. AVISO RESPONSÁVEL */}
      <section className="bg-brand-black py-10 border-b border-brand-gray">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-dark border border-brand-gray">
            <AlertTriangle className="w-3.5 h-3.5 text-brand-neon-red" />
            <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-gray-400">
              Diretrize Responsável & Avisos Legais
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Os suplementos alimentares não substituem uma alimentação equilibrada e hábitos de vida saudáveis. O consumo de suplementação deve ser feito conforme a orientação de profissionais habilitados (médicos e nutricionistas), especialmente por gestantes, lactantes, crianças, idosos ou pessoas com condições preexistentes específicas de saúde.
          </p>
          <p className="text-[11px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Os resultados individuais de performance podem variar acentuadamente conforme a rotina alimentar de cada indivíduo, a intensidade programada de treino, constância diária de sono reparador e a predisposição genética individualizada.
          </p>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#180303,transparent)]">
        
        {/* Glow ambient lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-neon-red/35 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-neon-red/10 border border-brand-neon-red/30 flex items-center justify-center text-brand-neon-red mx-auto mb-6">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
              Sua evolução não precisa ser no escuro.
            </h2>
            <p className="text-xl text-gray-300 font-light font-display">
              Fale com a Orenda Performance hoje.
            </p>
            <p className="text-sm text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
              Escolha seu produto monohidratado, selecione seu kit com economia de frete ou peça orientação ao especialista Orenda para encontrar o combo de ativos perfeito para suas metas corporais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => handleWhatsappClick("Olá, quero comprar produtos da Orenda Performance. Pode me ajudar com opções, valores e disponibilidade?")}
              className="px-8 py-4 bg-brand-neon-red hover:bg-brand-crimson text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-xl shadow-brand-neon-red/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white/10" />
              Comprar agora pelo WhatsApp
            </button>
            <button
              onClick={() => handleWhatsappClick("Olá, quero montar um kit personalizado da Orenda Performance de acordo com meu objetivo. Pode me ajudar?")}
              className="px-8 py-4 bg-transparent hover:bg-brand-gray border border-brand-light-gray hover:border-brand-neon-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <Dumbbell className="w-4.5 h-4.5 text-brand-neon-red" />
              Montar meu kit personalizado
            </button>
          </div>

          <div className="pt-8 text-gray-500 font-mono text-xs">
            Canal de Atendimento Seguro • Sem Compromisso de Compra
          </div>

        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-brand-black border-t border-brand-gray py-12 sm:py-16 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Footer Column 1 - Brand description */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-crimson flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-display font-extrabold text-white text-lg sm:text-xl tracking-tight">
                  ORENDA PERFORMANCE
                </span>
              </div>
              <p className="text-xs text-gray-500 max-w-sm font-light">
                Linha esportiva de suplementação premium desenvolvida e supervisionada pelo rigor técnico da Orenda Biotech. Ciência, natureza refinada e alta tecnologia focada em impulsionar sua musculatura e vigor de forma saudável e pragmática.
              </p>
              <span className="text-[10px] font-mono uppercase text-brand-neon-red font-bold block">
                Ciência, natureza e tecnologia para sua melhor versão.
              </span>
            </div>

            {/* Footer Column 2 - Sitemap */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="hover:text-brand-neon-red transition-colors text-left focus:outline-none cursor-pointer">
                    Página Inicial
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('por-que-orenda')} className="hover:text-brand-neon-red transition-colors text-left focus:outline-none cursor-pointer">
                    Por que a Orenda?
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('kits')} className="hover:text-brand-neon-red transition-colors text-left focus:outline-none cursor-pointer">
                    Kits por Objetivo
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('produtos')} className="hover:text-brand-neon-red transition-colors text-left focus:outline-none cursor-pointer">
                    Produtos Ativos Puros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('parceiros')} className="hover:text-brand-neon-red transition-colors text-left focus:outline-none cursor-pointer">
                    Canal Lojistas / Parcerias
                  </button>
                </li>
              </ul>
            </div>

            {/* Footer Column 3 - Contact info */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">Atendimento</h4>
              <ul className="space-y-2 text-xs">
                <li className="text-gray-500">
                  Responsável Técnico: <span className="text-gray-300 font-medium">Eduardo Donzelli</span>
                </li>
                <li className="flex items-center gap-1.5 text-gray-300">
                  <MessageCircle className="w-3.5 h-3.5 text-brand-neon-red" />
                  <span className="font-mono">+55 16 99745-7085</span>
                </li>
                <li className="text-gray-500 pt-2 border-t border-brand-gray">
                  Segunda a Sexta-feira: 09h às 18h
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright segment */}
          <div className="pt-8 border-t border-brand-gray flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Orenda Performance. Todos os direitos reservados.
              <span className="block sm:inline sm:ml-2 text-gray-700">Integrado à Orenda Biotech Corp.</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-brand-neon-red flex items-center gap-1 transition-colors"
                aria-label="Contate-nos pelo WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-transparent" />
                <span>WhatsApp Oficial</span>
              </a>
              <span className="text-gray-800">|</span>
              <span className="font-mono text-[10px] text-gray-700">Responsável: Eduardo Donzelli</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 15. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleWhatsappClick(floatWhatsappMessage)}
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Fale Conosco por WhatsApp"
        >
          {/* Pulsing ring outline decoration */}
          <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-75"></span>
          
          <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform relative z-10" />

          {/* Quick hover tip banner */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-brand-dark/95 border border-brand-gray text-[10px] font-mono text-gray-300 uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
            Suporte Orenda Online
          </span>
        </button>
      </div>

    </div>
  );
}
