export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'installation' | 'financing' | 'maintenance' | 'technical';
}

export const faqs: FAQ[] = [
  {
    question: "How much can I save with solar panels?",
    answer: "Most Canadian homeowners save between 70-90% on their electricity bills with solar. The exact savings depend on your energy usage, roof orientation, local electricity rates, and available incentives. Our average customer saves $2,000-4,000 per year on energy costs.",
    category: "general"
  },
  {
    question: "How long does solar installation take?",
    answer: "A typical residential solar installation takes 1-3 days to complete once permits are approved. The entire process from initial consultation to system activation usually takes 4-8 weeks, including permit approval, utility interconnection, and inspection processes.",
    category: "installation"
  },
  {
    question: "What financing options are available for solar?",
    answer: "We offer multiple financing options including cash purchase, solar loans with competitive rates, leasing options, and Power Purchase Agreements (PPAs). Many customers qualify for $0 down financing with monthly payments often lower than their current electricity bills.",
    category: "financing"
  },
  {
    question: "Do solar panels work in Canadian winters?",
    answer: "Yes! Solar panels actually work more efficiently in cold weather. While there are fewer daylight hours in winter, modern panels can generate electricity even on cloudy days. Snow typically slides off panels or melts quickly due to their dark surface and angle.",
    category: "technical"
  },
  {
    question: "What government incentives are available for solar?",
    answer: "Canada offers several incentives including the federal GST/HST rebate on solar installations, provincial rebates (varies by province), net metering programs, and accelerated capital cost allowance for businesses. Many provinces also offer additional rebates and financing programs.",
    category: "financing"
  },
  {
    question: "How long do solar panels last?",
    answer: "Solar panels typically last 25-30+ years with minimal maintenance. They come with 25-year performance warranties and often continue producing electricity well beyond that. Most systems pay for themselves within 8-12 years and provide free electricity for decades afterward.",
    category: "technical"
  },
  {
    question: "What happens if my roof needs repairs?",
    answer: "If your roof needs repairs after solar installation, panels can be temporarily removed and reinstalled. We work with certified roofing contractors and our installation warranty covers any roof-related issues. We also provide roof condition assessments during our site evaluation.",
    category: "installation"
  },
  {
    question: "Can I go completely off-grid with solar?",
    answer: "Yes, with the right battery storage system. Off-grid systems require larger battery banks and backup generators for extended cloudy periods. However, most homeowners find grid-tied systems with net metering more cost-effective, allowing you to use the grid as your 'battery'.",
    category: "technical"
  },
  {
    question: "How do I maintain my solar system?",
    answer: "Solar systems require minimal maintenance. We recommend annual professional inspections and occasional cleaning if needed. Our monitoring systems alert us to any performance issues, and we provide 24/7 monitoring and maintenance services to ensure optimal performance.",
    category: "maintenance"
  },
  {
    question: "What if I sell my house?",
    answer: "Solar systems typically increase home value by 3-4% and make homes sell faster. The solar system and remaining warranty transfer to new owners. If you have a solar loan, it can either be paid off at closing or transferred to the new owner with their approval.",
    category: "general"
  },
  {
    question: "Are there any hidden costs with solar?",
    answer: "No hidden costs with Xolar. Our quotes include all equipment, installation, permits, inspections, and warranties. The only potential additional costs are rare electrical upgrades if your panel doesn't meet current codes, which we identify during our free site assessment.",
    category: "financing"
  },
  {
    question: "What happens during power outages?",
    answer: "Standard grid-tied systems shut off during outages for safety. However, with battery storage (like Tesla Powerwall), you can maintain power to essential loads during outages. The battery automatically switches over and your solar panels can recharge it during the day.",
    category: "technical"
  },
  {
    question: "Can solar panels damage my roof?",
    answer: "When properly installed by certified professionals like Xolar, solar panels actually protect your roof from weather damage. We use industry-leading mounting systems and our installations are backed by comprehensive warranties that cover any roof-related issues.",
    category: "installation"
  },
  {
    question: "How much roof space do I need for solar?",
    answer: "A typical residential system needs 400-800 square feet of south-facing roof space. However, panels can also be installed on east and west-facing roofs with good results. Our site assessment determines the optimal placement and system size for your specific roof.",
    category: "installation"
  },
  {
    question: "What if my electricity usage changes?",
    answer: "Solar systems are sized based on your historical usage, but they can often accommodate reasonable increases. If you get an electric vehicle or heat pump, we can add panels to your existing system. Net metering also helps balance seasonal variations in usage.",
    category: "general"
  }
];

export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}

export function getAllFAQs(): FAQ[] {
  return faqs;
}