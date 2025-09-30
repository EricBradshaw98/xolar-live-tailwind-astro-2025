export interface Dealer {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  metaDescription: string;

  // Branding
  branding: {
    logo?: string; // Path to dealer logo
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      gradient: string;
    };
    hero: {
      background: string; // Background image or gradient
      overlay?: string; // Overlay color for readability
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone: string;
    address?: {
      street: string;
      city: string;
      province: string;
      postal: string;
    };
    website?: string;
    social?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
    };
  };

  // Page Content
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };

  // Services/Specialties
  services: string[];

  // Testimonial or highlight
  highlight?: {
    text: string;
    author: string;
    title?: string;
  };

  // Service areas (optional)
  serviceAreas?: string[];

  // Custom message for the contact form
  formMessage?: string;
}

export const dealers: Dealer[] = [
  {
    slug: 'solar-solutions-ontario',
    name: 'Solar Solutions Ontario',
    displayName: 'Solar Solutions Ontario',
    description:
      'Premier solar installation services across Ontario with over 10 years of experience.',
    metaDescription:
      'Get a solar quote from Solar Solutions Ontario. Expert solar panel installation and maintenance services across Ontario.',

    branding: {
      logo: '/images/dealers/solar-solutions-ontario-logo.png',
      colors: {
        primary: '#2563eb', // Blue
        secondary: '#1d4ed8',
        accent: '#60a5fa',
        gradient: 'from-blue-600 to-blue-700',
      },
      hero: {
        background: 'bg-gradient-to-br from-blue-600 to-blue-800',
        overlay: 'bg-black/20',
      },
    },

    contact: {
      email: 'info@solarsolutionsontario.com',
      phone: '(416) 555-0123',
      address: {
        street: '123 Solar Drive',
        city: 'Toronto',
        province: 'Ontario',
        postal: 'M5V 1A1',
      },
      website: 'https://solarsolutionsontario.com',
      social: {
        facebook: 'https://facebook.com/solarsolutionsontario',
        instagram: 'https://instagram.com/solarsolutionsontario',
      },
    },

    hero: {
      title: "Ontario's Premier Solar Installer",
      subtitle:
        'Transform your home or business with clean, renewable solar energy. Get a free consultation today.',
      cta: 'Get Your Free Solar Quote',
    },

    services: [
      'Residential Solar Installation',
      'Commercial Solar Systems',
      'Tesla Powerwall Installation',
      'Solar Maintenance & Repair',
      'Energy Storage Solutions',
    ],

    highlight: {
      text: 'Solar Solutions Ontario installed our 10kW system last year. Our electricity bills have dropped by 85% and the installation was flawless!',
      author: 'Sarah Mitchell',
      title: 'Homeowner, Mississauga',
    },

    serviceAreas: ['Toronto', 'Mississauga', 'Brampton', 'Hamilton', 'Markham'],
    formMessage:
      'Ready to go solar? Fill out the form below and our Ontario solar experts will contact you within 24 hours with a personalized quote.',
  },

  {
    slug: 'green-energy-bc',
    name: 'Green Energy BC',
    displayName: 'Green Energy BC',
    description:
      "British Columbia's trusted solar energy partner specializing in eco-friendly solutions.",
    metaDescription:
      'Solar installation services in BC from Green Energy BC. Sustainable solar solutions for homes and businesses.',

    branding: {
      logo: '/images/dealers/green-energy-bc-logo.png',
      colors: {
        primary: '#059669', // Green
        secondary: '#047857',
        accent: '#34d399',
        gradient: 'from-green-600 to-emerald-700',
      },
      hero: {
        background: 'bg-gradient-to-br from-green-600 to-emerald-800',
        overlay: 'bg-black/10',
      },
    },

    contact: {
      email: 'hello@greenergybc.ca',
      phone: '(604) 555-0456',
      address: {
        street: '456 Renewable Way',
        city: 'Vancouver',
        province: 'British Columbia',
        postal: 'V6B 1A1',
      },
      website: 'https://greenergybc.ca',
    },

    hero: {
      title: "BC's Green Energy Specialists",
      subtitle:
        "Harness the power of the sun with our sustainable solar solutions designed for British Columbia's unique climate.",
      cta: 'Start Your Solar Journey',
    },

    services: [
      'Residential Solar Panels',
      'Off-Grid Solar Systems',
      'Solar Hot Water Systems',
      'EV Charging Stations',
      'Solar Maintenance',
    ],

    highlight: {
      text: 'The team at Green Energy BC made our transition to solar seamless. Professional, knowledgeable, and committed to sustainability.',
      author: 'David Chen',
      title: 'Business Owner, Richmond',
    },

    serviceAreas: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Coquitlam'],
    formMessage:
      "Join the renewable energy revolution in BC! Complete the form below and let's discuss how solar can benefit your property.",
  },

  {
    slug: 'prairie-solar-power',
    name: 'Prairie Solar Power',
    displayName: 'Prairie Solar Power',
    description:
      "Alberta's leading solar installer with expertise in extreme weather installations.",
    metaDescription:
      'Professional solar installation in Alberta. Prairie Solar Power - your trusted solar partner.',

    branding: {
      logo: '/images/dealers/prairie-solar-logo.png',
      colors: {
        primary: '#dc2626', // Red
        secondary: '#b91c1c',
        accent: '#f87171',
        gradient: 'from-red-600 to-orange-700',
      },
      hero: {
        background: 'bg-gradient-to-br from-red-600 to-orange-700',
        overlay: 'bg-black/30',
      },
    },

    contact: {
      email: 'contact@prairiesolarpower.ca',
      phone: '(403) 555-0789',
      address: {
        street: '789 Energy Boulevard',
        city: 'Calgary',
        province: 'Alberta',
        postal: 'T2P 1A1',
      },
      website: 'https://prairiesolarpower.ca',
    },

    hero: {
      title: "Alberta's Solar Powerhouse",
      subtitle:
        "Built tough for prairie conditions. Our solar systems are designed to withstand Alberta's challenging climate.",
      cta: 'Get Prairie-Tough Solar',
    },

    services: [
      'High-Efficiency Solar Panels',
      'Winter-Optimized Systems',
      'Agricultural Solar Solutions',
      'Commercial Installations',
      'Snow Load Engineering',
    ],

    highlight: {
      text: 'Even in Calgary winters, our Prairie Solar system keeps producing. These guys know Alberta weather!',
      author: 'Mark Thompson',
      title: 'Rancher, Airdrie',
    },

    serviceAreas: ['Calgary', 'Edmonton', 'Red Deer', 'Medicine Hat', 'Lethbridge'],
    formMessage:
      'Ready for prairie-tough solar? Our Alberta specialists are standing by to design your perfect system.',
  },
];

export function getDealerBySlug(slug: string): Dealer | undefined {
  return dealers.find((dealer) => dealer.slug === slug);
}

export function getAllDealerSlugs(): string[] {
  return dealers.map((dealer) => dealer.slug);
}

export function getAllDealers(): Dealer[] {
  return dealers;
}
