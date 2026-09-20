export const brand = {
  name: "Beep",
  tagline: "eFX · LATAM ⇄ China",
  locations: ["Macao", "Hengqin"],
  url: "https://beep.beelogik.com",
  description:
    "Beep lets Chinese merchants accept Pix across Latin America with up to zero take rate, a 0.75% eFX spread and same-day settlement. No hidden fees, no days-long waits."
} as const;

export interface PricingTier {
  name: string;
  volume: string;
  rate: string;
  detail: string;
  audience: string;
  monthlyPriceUsd: number;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Tier 1",
    volume: "Up to $1,500 / mo",
    rate: "2.75%",
    detail: "2.00% base + 0.75% eFX",
    audience: "Independent dropshippers testing LATAM.",
    monthlyPriceUsd: 0
  },
  {
    name: "Tier 2",
    volume: "$1,500 to $7,500 / mo",
    rate: "2.25%",
    detail: "1.50% base + 0.75% eFX",
    audience: "Fast-growing stores and regional platforms.",
    monthlyPriceUsd: 0
  },
  {
    name: "Tier 3",
    volume: "Over $7,500 / mo",
    rate: "1.50%",
    detail: "0.75% base + 0.75% eFX",
    audience: "High-ticket cross-border brands.",
    monthlyPriceUsd: 0,
    featured: true
  },
  {
    name: "Subscription",
    volume: "Over $15,000 / mo",
    rate: "0.75%",
    detail: "0% base + 0.75% eFX · ¥1,500 / mo or ¥14,400 / yr",
    audience: "Your brand on our rails. Same-day settlement.",
    monthlyPriceUsd: 210
  }
];

export const providerComparison = [
  {
    provider: "Card acquirers",
    totalCost: "~6.0% to 9.0%",
    settlement: "D+3 to D+7",
    payoutFee: "$0.30"
  },
  {
    provider: "Cross-border PSPs",
    totalCost: "~4.5% to 6.5%",
    settlement: "D+1 to D+3",
    payoutFee: "$0.20"
  },
  {
    provider: "Wise + gateway",
    totalCost: "~2.0% to 4.5%",
    settlement: "1 to 3 days",
    payoutFee: "Variable"
  },
  {
    provider: brand.name,
    totalCost: "1.50% to 2.75% (0.75% via subscription)",
    settlement: "Seconds",
    payoutFee: "$0.00",
    isBeep: true
  }
];

export const marketStats = [
  {
    value: "184M",
    label: `Pix users, 86% of Brazil’s adult population <sup><a
    style="color: red"
    href="https://febrabantech.com/noticias/arquitetura-hibrida-futuro-do-pix-e-integrar-nao-substituir#:~:text=Hoje%2C%2086%25%20da%20popula%C3%A7%C3%A3o%20adulta%20brasileira%20usa%20o%20Pix"
    target="_blank" id="reference-1"> 1</a></sup>`
  },
  {
    value: "60M",
    label: `Brazilian adults without a credit card <sup><a
    style="color: red"
    href="https://www.cnnbrasil.com.br/economia/money/macroeconomia/galipolo-60-mi-que-nao-possuem-cartao-terao-servicos-com-pix-automatico/#:~:text=Pix%20Autom%C3%A1tico%20possibilitar%C3%A1%20que%20cerca%20de%2060%20milh%C3%B5es%20de%20usu%C3%A1rios%20que%20n%C3%A3o%20possuem%20cart%C3%A3o%20de%20cr%C3%A9dito%20tenham%20acesso%20a%20servi%C3%A7os"
    target="_blank" id="reference-1"> 2</a></sup>`
  },
  {
    value: "$171B",
    label: `Brazil–China trade corridor, 2025 <sup><a
    style="color: red"
    href="https://cbcde.org.br/comercio-brasil-china-bate-recorde-e-chega-a-us-171-bilhoes-em-2025/#:~:text=e%20chega%20a-,US%24%20171%20bilh%C3%B5es%20em%202025,-O%20com%C3%A9rcio%20entre"
    target="_blank" id="reference-1"> 3</a></sup>`
  },
  {
    value: "82%",
    label: `Cart abandonment, driven by payment friction <sup><a
    style="color: red"
    href="https://fabricaresultados.com.br/2026/04/20/abandono-de-carrinho-no-e-commerce-em-2026-como-recuperar-ate-35-das-vendas-perdidas/#:~:text=abandono%20entre%2070%25%20e%2082%25"
    target="_blank" id="reference-1"> 4</a></sup>`
  }
];

export const faqs = [
  {
    question: "How fast do I receive funds?",
    answer:
      "Pix confirms in seconds. Beep pays your RMB (CNY) account the same business day from a pre-funded liquidity pool custodied at Bank of China (Macau), so you never wait on correspondent banking."
  },
  {
    question: "What is the 0.75% eFX spread?",
    answer:
      "A flat, pass-through spread on the BRL to RMB conversion. It is identical on every tier and itemised on every settlement statement, together with the statutory Brazilian IOF (0.38%)."
  },
  {
    question: "Why Pix instead of cards?",
    answer:
      "About 60 million Brazilian adults have no credit card, while roughly 184 million use Pix. Pix checkout removes the card wall behind Brazil’s 82% cart abandonment rate."
  },
  {
    question: "Do you support instalments?",
    answer:
      "Yes, soon we will enable Pix Installments (Pix Parcelado) to be offered and  lets shoppers split a purchase into instalments while you are still full settled upfront."
  },
  {
    question: "Is Beep regulated?",
    answer:
      "Yes. Phase 1 operates through a licensed BaaS partner in Brazil. Beep is filing its own Central Bank of Brazil Payment Institution application for Phase 2. We also comply with the LGPD in Brazil and the PIPL in China."
  }
];
