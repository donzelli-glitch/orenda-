/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Central Pricing Configuration - edit prices here!
export const pricesConfig = {
  // Kits (use "XX,XX" if price is not specified, or any decimal value you want)
  kitForcaMassa: "R$ 307,00",
  kitResistenciaIntensidade: "R$ 172,90",
  kitRecuperacaoPremium: "R$ 386,90",
  kitStarter: "R$ 156,90",
  kitAtleta: "R$ 165,80",
  kitGanhoMassaInteligente: "R$ 419,00",
  kitAlphaRage: "R$ 148,90",

  // Products
  creatina150g: "R$ 51,67",
  creatina300g: "R$ 73,85",
  whey900g: "R$ 233,78",
  betaAlanina150g: "R$ 49,27",
  betaAlanina300g: "R$ 69,20",
  glutamina150g: "R$ 82,25",
  glutamina300g: "R$ 135,02",
  bcaa60cap: "R$ 40,84",
  bcaa120cap: "R$ 61,13",
  zma60cap: "R$ 33,80",
  preTreinoFrutas150g: "R$ 64,29",
  preTreinoFrutas300g: "R$ 96,40",
  preTreinoLimao150g: "R$ 65,04",
  preTreinoLimao300g: "R$ 104,84",
};

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge?: string; // e.g., 'Mais Vendido', 'Destaque'
  description: string;
  benefits: string[];
  price: string;
  whatsappMessage: string;
}

export interface KitItem {
  id: string;
  name: string;
  goal: string;
  badge: "Mais vendido" | "Melhor custo-benefício" | "Ideal para começar" | "Performance premium" | "Destaque" | "Ganho Sólido";
  productsInvolved: string[];
  description: string;
  benefits: string[];
  price: string;
  whatsappMessage: string;
}

export const whatsappNumber = "5516997457085";

export function createWhatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const kits: KitItem[] = [
  {
    id: "kit-forca-massa",
    name: "Kit Força e Massa",
    goal: "Força, suporte proteico e rotina de hipertrofia",
    badge: "Mais vendido",
    productsInvolved: [
      "Whey Blend Orenda Performance 900g",
      "Creatina Orenda Performance 300g",
      "ZMA Orenda Performance 60 cápsulas"
    ],
    description: "Combo pensado para quem treina musculação e busca uma rotina mais estratégica para apoiar força, consumo proteico, recuperação nutricional e evolução física com consistência.",
    benefits: [
      "Proteína para auxiliar na formação dos músculos",
      "Creatina para auxiliar no desempenho físico em exercícios repetidos de curta duração e alta intensidade",
      "ZMA como fonte de minerais importantes",
      "Ideal para quem busca evolução na musculação",
      "Melhor opção para quem quer começar com um protocolo mais completo"
    ],
    price: pricesConfig.kitForcaMassa === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitForcaMassa,
    whatsappMessage: `Olá, tenho interesse no Kit Força e Massa da Orenda Performance. Ele vem com Whey Blend 900g, Creatina 300g e ZMA 60 cápsulas. Quero saber mais sobre disponibilidade, forma de uso e valor. Preço: ${pricesConfig.kitForcaMassa === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitForcaMassa}.`
  },
  {
    id: "kit-resistencia-intensidade",
    name: "Kit Resistência e Intensidade",
    goal: "Treinos intensos, resistência e constância",
    badge: "Performance premium",
    productsInvolved: [
      "Beta-Alanina Orenda Performance 150g",
      "BCAA Orenda Performance 120 cápsulas",
      "Glutamina Orenda Performance 150g"
    ],
    description: "Combo ideal para quem pratica treinos intensos, corrida, cross training, musculação ou esportes que exigem maior resistência, regularidade e suporte nutricional.",
    benefits: [
      "Excelente para rotina de treinos intensos",
      "Apoia estratégias de resistência e performance",
      "Combinação prática para quem treina com frequência",
      "Pode ser usado em rotinas de corrida, academia e cross training",
      "Kit estratégico para quem sente queda de rendimento nos treinos"
    ],
    price: pricesConfig.kitResistenciaIntensidade === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitResistenciaIntensidade,
    whatsappMessage: `Olá, tenho interesse no Kit Resistência e Intensidade da Orenda Performance. Ele vem com Beta-Alanina 150g, BCAA 120 cápsulas e Glutamina 150g. Quero saber mais sobre disponibilidade, forma de uso e valor. Preço: ${pricesConfig.kitResistenciaIntensidade === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitResistenciaIntensidade}.`
  },
  {
    id: "kit-recuperacao-premium",
    name: "Kit Recuperação Premium",
    goal: "Pós-treino, suporte proteico e recuperação avançada",
    badge: "Melhor custo-benefício",
    productsInvolved: [
      "Whey Blend Orenda Performance 900g",
      "Glutamina Orenda Performance 300g",
      "BCAA Orenda Performance 120 cápsulas"
    ],
    description: "Combo completo voltado para quem quer consolidar a rotina pós-treino, potencializar a recuperação muscular, manter alto consumo proteico e nutrir fibras musculares com eficácia.",
    benefits: [
      "Whey como fonte proteica de alto valor biológico",
      "Glutamina para complementar a rotina de suporte nutricional",
      "BCAA para auxiliar na recuperação e diminuição do catabolismo",
      "Ideal para praticantes frequentes com maior desgaste muscular",
      "Excelente custo-benefício para quem busca constância de dentro para fora"
    ],
    price: pricesConfig.kitRecuperacaoPremium === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitRecuperacaoPremium,
    whatsappMessage: `Olá, tenho interesse no Kit Recuperação Premium da Orenda Performance. Ele vem com Whey Blend 900g, Glutamina 300g e BCAA 120 cápsulas. Quero saber mais sobre disponibilidade, forma de uso e valor. Preço: ${pricesConfig.kitRecuperacaoPremium === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitRecuperacaoPremium}.`
  },
  {
    id: "kit-starter-orenda",
    name: "Kit Starter Orenda",
    goal: "Começar certo na suplementação esportiva",
    badge: "Ideal para começar",
    productsInvolved: [
      "Creatina Orenda Performance 150g",
      "BCAA Orenda Performance 60 cápsulas",
      "Glutamina Orenda Performance 150g"
    ],
    description: "Combo de entrada para quem quer começar uma rotina de suplementação com produtos práticos, estratégicos e fáceis de encaixar no dia a dia.",
    benefits: [
      "Ideal para iniciantes",
      "Produtos fáceis de usar",
      "Boa opção para quem treina de 3 a 5 vezes por semana",
      "Ajuda o cliente a começar com uma base simples e eficiente",
      "Excelente porta de entrada para a linha Orenda Performance"
    ],
    price: pricesConfig.kitStarter === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitStarter,
    whatsappMessage: `Olá, tenho interesse no Kit Starter Orenda Performance. Ele vem com Creatina 150g, BCAA 60 cápsulas e Glutamina 150g. Quero saber mais sobre disponibilidade, forma de uso e valor. Preço: ${pricesConfig.kitStarter === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitStarter}.`
  },
  {
    id: "kit-atleta-orenda",
    name: "Kit Atleta Orenda",
    goal: "Performance, identidade e intensidade",
    badge: "Performance premium",
    productsInvolved: [
      "Creatina Orenda Performance 300g",
      "BCAA Orenda Performance 120 cápsulas",
      "Beta-Alanina Orenda Performance 150g",
      "Camisa Orenda ou Coqueteleira (conforme disponibilidade)"
    ],
    description: "Combo premium para quem vive a rotina de treino com intensidade e quer representar a força da Orenda Performance dentro e fora da academia.",
    benefits: [
      "Kit completo para rotina de performance",
      "Ideal para atletas e praticantes intensos",
      "Combina força, aminoácidos e resistência",
      "Pode incluir brinde conforme disponibilidade",
      "Ajuda a criar conexão com o movimento Orenda Performance"
    ],
    price: pricesConfig.kitAtleta === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitAtleta,
    whatsappMessage: `Olá, tenho interesse no Kit Atleta Orenda Performance. Quero saber se está disponível com Creatina 300g, BCAA 120 cápsulas, Beta-Alanina 150g e brinde Orenda. Preço: ${pricesConfig.kitAtleta === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitAtleta}.`
  },
  {
    id: "kit-ganho-massa-inteligente",
    name: "Kit Ganho de Massa Inteligente",
    goal: "Massa muscular, força e suporte nutricional",
    badge: "Ganho Sólido",
    productsInvolved: [
      "Whey Blend Orenda Performance 900g",
      "Creatina Orenda Performance 300g",
      "Glutamina Orenda Performance 300g",
      "ZMA Orenda Performance 60 cápsulas"
    ],
    description: "Combo mais completo para quem busca estruturar uma rotina de suplementação voltada para treino, consumo proteico, força, recuperação nutricional e evolução corporal com constância.",
    benefits: [
      "Combinação estratégica para musculação",
      "Whey como fonte de proteína",
      "Creatina para desempenho físico",
      "Glutamina para rotina nutricional",
      "ZMA como fonte de zinco, magnésio e vitamina B6",
      "Ideal para quem quer parar de comprar produtos soltos e montar um protocolo"
    ],
    price: pricesConfig.kitGanhoMassaInteligente === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitGanhoMassaInteligente,
    whatsappMessage: `Olá, tenho interesse no Kit Ganho de Massa Inteligente da Orenda Performance. Ele vem com Whey Blend 900g, Creatina 300g, Glutamina 300g e ZMA 60 cápsulas. Quero saber mais sobre disponibilidade, forma de uso e valor. Preço: ${pricesConfig.kitGanhoMassaInteligente === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitGanhoMassaInteligente}.`
  },
  {
    id: "kit-alpha-rage",
    name: "Kit Alpha Rage Termogênico & Foco",
    goal: "Energia explosiva, resistência extrema e vasodilatação",
    badge: "Destaque",
    productsInvolved: [
      "Pré-Treino Alpha Rage Zero Cafeína (150g - Limão ou Frutas Vermelhas)",
      "Creatina Orenda Performance 150g",
      "Beta-Alanina Orenda Performance 150g"
    ],
    description: "O combo definitivo sem estimulantes de café para explodir seus recordes de performance física, força e vascularização a qualquer hora do dia ou da noite.",
    benefits: [
      "Pré-Treino Alpha Rage para pump estendido",
      "Creatina para apoiar imediatamente a força muscular e explosão",
      "Beta-Alanina para auxiliar na redução da fadiga muscular acumulada",
      "Total flexibilidade de horário sem prejudicar seu sono e descanso"
    ],
    price: pricesConfig.kitAlphaRage === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitAlphaRage,
    whatsappMessage: `Olá, tenho interesse no Kit Alpha Rage Termogênico & Foco da Orenda Performance. Ele vem com Pré-Treino Alpha Rage 150g, Creatina 150g e Beta-Alanina 150g. Quero saber mais sobre disponibilidade, sabores e valor. Preço: ${pricesConfig.kitAlphaRage === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.kitAlphaRage}.`
  }
];

export const products: ProductItem[] = [
  {
    id: "creatina-150g",
    name: "Creatina Orenda Performance 150g",
    category: "Força e Performance",
    badge: "Essencial",
    description: "Suplemento de creatina desenvolvido para apoiar a rotina de treinos de alta intensidade, força, potência e evolução física com consistência.",
    benefits: [
      "Auxilia no desempenho físico em exercícios repetidos de curta duração e alta intensidade",
      "Ideal para musculação, treinos de força e performance",
      "Produto essencial para praticantes de atividade física",
      "Fácil de inserir na rotina diária"
    ],
    price: pricesConfig.creatina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.creatina150g,
    whatsappMessage: `Olá, tenho interesse na Creatina Orenda Performance 150g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.creatina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.creatina150g}.`
  },
  {
    id: "creatina-300g",
    name: "Creatina Orenda Performance 300g",
    category: "Força e Performance",
    badge: "Campeão de Vendas",
    description: "Versão maior da creatina Orenda, ideal para quem busca melhor custo-benefício e uso contínuo na rotina de treinos.",
    benefits: [
      "Excelente opção para uso diário",
      "Apoia força, potência e desempenho físico",
      "Maior rendimento por embalagem",
      "Produto estratégico para quem treina com consistência"
    ],
    price: pricesConfig.creatina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.creatina300g,
    whatsappMessage: `Olá, tenho interesse na Creatina Orenda Performance 300g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.creatina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.creatina300g}.`
  },
  {
    id: "whey-900g",
    name: "Whey Blend Orenda Performance 900g - Sabor Chocolate",
    category: "Proteína e Massa Muscular",
    badge: "Premium Forte",
    description: "Whey Blend proteico desenvolvido para apoiar o consumo diário de proteínas, contribuindo para a formação muscular e recuperação nutricional após treinos.",
    benefits: [
      "Fonte de proteínas de alto valor biológico",
      "Auxilia na formação e manutenção dos músculos",
      "Ideal para pós-treino ou complemento proteico diário",
      "Fórmula prática para quem busca evolução física",
      "Versão premium da linha Orenda Performance- Sabor Chocolate"
    ],
    price: pricesConfig.whey900g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.whey900g,
    whatsappMessage: `Olá, tenho interesse no Whey Blend Orenda Performance 900g - Sabor Chocolate. Quero saber mais sobre a tabela nutricional, forma de uso e disponibilidade. Valor: ${pricesConfig.whey900g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.whey900g}.`
  },
  {
    id: "beta-alanina-150g",
    name: "Beta-Alanina Orenda Performance 150g",
    category: "Resistência e Intensidade",
    badge: "Intensidade",
    description: "Suplemento voltado para praticantes de treinos intensos, esportes de resistência e rotinas que exigem maior capacidade de esforço.",
    benefits: [
      "Ideal para treinos intensos e prolongados",
      "Apoia a rotina de resistência e performance",
      "Excelente para musculação, corrida, cross training e esportes de alta intensidade",
      "Produto estratégico para pré-treino individualizado"
    ],
    price: pricesConfig.betaAlanina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.betaAlanina150g,
    whatsappMessage: `Olá, tenho interesse na Beta-Alanina Orenda Performance 150g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.betaAlanina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.betaAlanina150g}.`
  },
  {
    id: "beta-alanina-300g",
    name: "Beta-Alanina Orenda Performance 300g",
    category: "Resistência e Intensidade",
    badge: "Super Foco",
    description: "Versão maior da Beta-Alanina Orenda, ideal para quem busca melhor custo-benefício e treinos intensos com uso contínuo.",
    benefits: [
      "Perfeito para quem realiza treinos frequentes e de alta intensidade",
      "Apoia a rotina contínua de resistência e alta performance",
      "Excelente custo-benefício para ciclistas, corredores, praticantes de cross training e musculação",
      "Dosagem otimizada para praticidade no dia a dia"
    ],
    price: pricesConfig.betaAlanina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.betaAlanina300g,
    whatsappMessage: `Olá, tenho interesse na Beta-Alanina Orenda Performance 300g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.betaAlanina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.betaAlanina300g}.`
  },
  {
    id: "glutamina-150g",
    name: "Glutamina Orenda Performance 150g",
    category: "Recuperação e Suporte Nutricional",
    badge: "Recuperação",
    description: "Suplemento de glutamina desenvolvido para complementar a rotina nutricional de atletas, praticantes de atividade física e pessoas que buscam cuidado diário.",
    benefits: [
      "Aminoácido importante na rotina esportiva",
      "Apoia a suplementação diária",
      "Ideal para períodos de treino intenso",
      "Fácil de combinar com outros suplementos"
    ],
    price: pricesConfig.glutamina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.glutamina150g,
    whatsappMessage: `Olá, tenho interesse na Glutamina Orenda Performance 150g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.glutamina150g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.glutamina150g}.`
  },
  {
    id: "glutamina-300g",
    name: "Glutamina Orenda Performance 300g",
    category: "Recuperação e Suporte Nutricional",
    badge: "Melhor Custo",
    description: "Versão maior da glutamina Orenda, indicada para quem deseja manter uma rotina contínua de suplementação com melhor rendimento por embalagem.",
    benefits: [
      "Melhor custo-benefício de uso",
      "Ideal para uso frequente e contínuo",
      "Apoio nutricional para rotina esportiva",
      "Pode ser combinada com whey, creatina e BCAA"
    ],
    price: pricesConfig.glutamina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.glutamina300g,
    whatsappMessage: `Olá, tenho interesse na Glutamina Orenda Performance 300g. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.glutamina300g === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.glutamina300g}.`
  },
  {
    id: "bcaa-60cap",
    name: "BCAA Orenda Performance 60 cápsulas",
    category: "Aminoácidos",
    badge: "Praticidade",
    description: "Suplemento em cápsulas com aminoácidos de cadeia ramificada, pensado para praticidade e suporte à rotina de quem treina.",
    benefits: [
      "Fórmula prática em cápsulas fáceis de ingerir",
      "Ideal para rotina esportiva dinâmica",
      "Fácil transporte em bolsas de academia",
      "Pode ser usado em estratégias de suplementação com treino e alimentação"
    ],
    price: pricesConfig.bcaa60cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.bcaa60cap,
    whatsappMessage: `Olá, tenho interesse no BCAA Orenda Performance 60 cápsulas. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.bcaa60cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.bcaa60cap}.`
  },
  {
    id: "bcaa-120cap",
    name: "BCAA Orenda Performance 120 cápsulas",
    category: "Aminoácidos",
    badge: "Rendimento",
    description: "Versão com maior quantidade de cápsulas, ideal para quem busca uso contínuo e mais rendimento na rotina de suplementação.",
    benefits: [
      "Maior rendimento por embalagem (120 cápsulas)",
      "Prático para o consumo diário",
      "Apoia a rotina esportiva de médio a alto rendimento",
      "Excelente custo-benefício para quem treina com alta frequência"
    ],
    price: pricesConfig.bcaa120cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.bcaa120cap,
    whatsappMessage: `Olá, tenho interesse no BCAA Orenda Performance 120 cápsulas. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.bcaa120cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.bcaa120cap}.`
  },
  {
    id: "zma-60cap",
    name: "ZMA Orenda Performance 60 cápsulas",
    category: "Minerais e Recuperação",
    badge: "Suporte Vital",
    description: "Combinação de zinco, magnésio e vitamina B6, desenvolvida para apoiar a rotina nutricional, o metabolismo energético e o funcionamento muscular.",
    benefits: [
      "Fonte de minerais essenciais altamente biodisponíveis",
      "Apoia o funcionamento e relaxamento muscular ideal",
      "Contribui ativamente no metabolismo energético diário",
      "Ideal para a rotina noturna e suporte de recuperação física"
    ],
    price: pricesConfig.zma60cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.zma60cap,
    whatsappMessage: `Olá, tenho interesse no ZMA Orenda Performance 60 cápsulas. Quero saber mais sobre o produto, forma de uso e disponibilidade. Valor: ${pricesConfig.zma60cap === "Sob Consulta" ? "R$ XX,XX" : pricesConfig.zma60cap}.`
  },
  {
    id: "pre-treino-frutas-150g",
    name: "Pré-Treino Alpha Rage Zero Cafeína Frutas Vermelhas 150g",
    category: "Energia e Performance",
    badge: "Explosivo",
    description: "Fórmula de pré-treino de alta performance zero cafeína sabor Frutas Vermelhas. Ideal para treinos noturnos com máxima dilatação e zero desconforto no sono.",
    benefits: [
      "Fórmula ultra concentrada livre de cafeína",
      "Promove pump muscular estendido e vascularização intensa",
      "Auxilia no foco extremo e contração durante treinos pesados",
      "Sabor irresistível de frutas vermelhas"
    ],
    price: pricesConfig.preTreinoFrutas150g,
    whatsappMessage: `Olá, tenho interesse no Pré-Treino Alpha Rage Zero Cafeína Frutas Vermelhas 150g. Quero saber mais sobre o produto, formas de uso e envio. Valor: ${pricesConfig.preTreinoFrutas150g}.`
  },
  {
    id: "pre-treino-frutas-300g",
    name: "Pré-Treino Alpha Rage Zero Cafeína Frutas Vermelhas 300g",
    category: "Energia e Performance",
    badge: "Melhor Custo",
    description: "Dose dupla e rendimento superior de pré-treino zero cafeína sabor Frutas Vermelhas para quem busca manter a constância em alta intensidade.",
    benefits: [
      "Excelente custo-benefício com embalagem de 300g",
      "Vasodilatação potente e pump muscular sem estimulantes de café",
      "Ideal para treinar à noite mantendo um ótimo descanso e sono profundo",
      "Combinação avançada para esportes de alta intensidade"
    ],
    price: pricesConfig.preTreinoFrutas300g,
    whatsappMessage: `Olá, tenho interesse no Pré-Treino Alpha Rage Zero Cafeína Frutas Vermelhas 300g. Quero saber mais sobre o produto, formas de uso e envio. Valor: ${pricesConfig.preTreinoFrutas300g}.`
  },
  {
    id: "pre-treino-limao-150g",
    name: "Pré-Treino Alpha Rage Zero Cafeína Sabor Limão 150g",
    category: "Energia e Performance",
    badge: "Explosivo",
    description: "A energia ácida e refrescante do sabor Limão no seu pré-treino ultra concentrado sem cafeína. Potência máxima para os seus músculos.",
    benefits: [
      "Altamente concentrado para pump intenso e focado",
      "Sensação refrescante de sabor Limão natural",
      "Auxilia de forma ativa na vasodilatação celular e oxigenação",
      "100% livre de cafeína - use a qualquer hora do dia ou da noite"
    ],
    price: pricesConfig.preTreinoLimao150g,
    whatsappMessage: `Olá, tenho interesse no Pré-Treino Alpha Rage Zero Cafeína Limão 150g. Quero saber mais sobre o produto, formas de uso e envio. Valor: ${pricesConfig.preTreinoLimao150g}.`
  },
  {
    id: "pre-treino-limao-300g",
    name: "Pré-Treino Alpha Rage Zero Cafeína Sabor Limão 300g",
    category: "Energia e Performance",
    badge: "Melhor Custo",
    description: "Tamanho família de pré-treino zero cafeína no sabor limão para quem não abre mão de treinar todos os dias na máxima potência com noites de sono tranquilas.",
    benefits: [
      "Embalagem ultra econômica com 300g",
      "Reforça sua contração muscular e resistência contra fadiga",
      "Sem agitação e sem interferir no ciclo de sono noturno",
      "Sabor incrível cítrico e refrescante"
    ],
    price: pricesConfig.preTreinoLimao300g,
    whatsappMessage: `Olá, tenho interesse no Pré-Treino Alpha Rage Zero Cafeína Limão 300g. Quero saber mais sobre o produto, formas de uso e envio. Valor: ${pricesConfig.preTreinoLimao300g}.`
  }
];
