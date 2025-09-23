export interface CommercialService {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  overview: {
    title: string;
    description: string;
    keyBenefits: string[];
  };
  features: {
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  specifications: {
    title: string;
    description: string;
    categories: {
      title: string;
      specs: {
        label: string;
        value: string;
      }[];
    }[];
  };
  pricing: {
    title: string;
    description: string;
    disclaimer: string;
    factors: string[];
  };
  caseStudies: {
    title: string;
    description: string;
    studies: {
      title: string;
      client: string;
      location: string;
      systemSize: string;
      savings: string;
      description: string;
      image: string;
    }[];
  };
  faqs: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export const commercialServices: CommercialService[] = [
  {
    slug: 'solar-solutions',
    title: 'Commercial Solar Solutions',
    shortTitle: 'Solar Solutions',
    description: 'Comprehensive solar panel systems designed for businesses, warehouses, and commercial properties across Canada.',
    metaDescription: 'Professional commercial solar solutions for businesses across Canada. Reduce operating costs with custom solar panel installations. Free consultation and quote.',
    keywords: [
      'commercial solar panels',
      'business solar systems',
      'commercial solar installation',
      'industrial solar solutions',
      'warehouse solar panels',
      'office building solar',
      'commercial renewable energy',
      'business energy savings',
      'commercial solar financing',
      'large scale solar systems'
    ],
    hero: {
      title: 'Commercial Solar Solutions',
      subtitle: 'Reduce operating costs and carbon footprint with custom commercial solar installations designed for Canadian businesses.',
      backgroundImage: '/images/hero-commercial-solar.jpg'
    },
    overview: {
      title: 'Transform Your Business with Solar Power',
      description: 'Our commercial solar solutions are designed to maximize energy production and minimize costs for businesses of all sizes. From small offices to large industrial facilities, we provide comprehensive solar systems that deliver measurable ROI.',
      keyBenefits: [
        'Reduce electricity costs by up to 90%',
        'Accelerated depreciation tax benefits',
        'Hedge against rising energy costs',
        'Demonstrate corporate sustainability',
        'Increase property value',
        'Professional monitoring and maintenance'
      ]
    },
    features: {
      title: 'Enterprise-Grade Solar Features',
      description: 'Our commercial solar systems include cutting-edge technology and professional-grade components designed for maximum performance and longevity.',
      items: [
        {
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          title: 'High-Efficiency Panels',
          description: 'Tier 1 commercial-grade solar panels with 25-year warranties and industry-leading efficiency ratings.'
        },
        {
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          title: 'Real-Time Monitoring',
          description: 'Advanced monitoring systems with detailed analytics, alerts, and performance tracking accessible via web and mobile.'
        },
        {
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          title: 'Commercial Inverters',
          description: 'Enterprise-grade string or power optimized inverters designed for maximum uptime and easy maintenance.'
        },
        {
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
          title: 'Performance Guarantees',
          description: 'Comprehensive production guarantees and system warranties backed by leading manufacturers and our installation expertise.'
        }
      ]
    },
    process: {
      title: 'Our Commercial Installation Process',
      description: 'We follow a proven methodology to ensure your commercial solar project is completed on time, within budget, and to the highest standards.',
      steps: [
        {
          number: '01',
          title: 'Site Assessment & Engineering',
          description: 'Comprehensive site evaluation including structural analysis, electrical assessment, and shading studies to optimize system design.',
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        },
        {
          number: '02',
          title: 'Custom System Design',
          description: 'Detailed engineering and 3D modeling to create the optimal solar system configuration for your specific building and energy needs.',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
        },
        {
          number: '03',
          title: 'Permits & Approvals',
          description: 'Complete handling of all permits, utility interconnection agreements, and regulatory approvals required for your project.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          number: '04',
          title: 'Professional Installation',
          description: 'Certified installers complete your project using industry best practices with minimal disruption to business operations.',
          icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
        },
        {
          number: '05',
          title: 'System Commissioning',
          description: 'Thorough testing, monitoring setup, and team training to ensure optimal system performance and your team is fully informed.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        }
      ]
    },
    specifications: {
      title: 'Technical Specifications',
      description: 'Our commercial solar systems are built with enterprise-grade components designed for maximum performance and durability.',
      categories: [
        {
          title: 'Solar Panels',
          specs: [
            { label: 'Panel Type', value: 'Monocrystalline Silicon' },
            { label: 'Efficiency Rating', value: '20-22%' },
            { label: 'Power Output', value: '400-550W per panel' },
            { label: 'Warranty', value: '25-year performance guarantee' },
            { label: 'Temperature Coefficient', value: '-0.35%/°C' },
            { label: 'Certifications', value: 'IEC, UL, CEC Listed' }
          ]
        },
        {
          title: 'Inverters',
          specs: [
            { label: 'Inverter Type', value: 'String or Power Optimized' },
            { label: 'Efficiency', value: '97-99%' },
            { label: 'Monitoring', value: 'Real-time web/mobile access' },
            { label: 'Warranty', value: '10-25 years' },
            { label: 'Grid Compliance', value: 'IEEE 1547, CSA 22.2' },
            { label: 'Operating Temperature', value: '-40°C to +60°C' }
          ]
        },
        {
          title: 'Mounting System',
          specs: [
            { label: 'Mounting Type', value: 'Ballasted or Penetrating' },
            { label: 'Material', value: 'Aluminum and Stainless Steel' },
            { label: 'Wind Rating', value: 'Up to 180 mph' },
            { label: 'Snow Load', value: 'Engineered per local codes' },
            { label: 'Tilt Options', value: '0° to 45° adjustable' },
            { label: 'Warranty', value: '25-year structural warranty' }
          ]
        }
      ]
    },
    pricing: {
      title: 'Commercial Solar Investment',
      description: 'Commercial solar pricing varies based on system size, complexity, and site-specific requirements. Our team provides detailed ROI analysis and financing options.',
      disclaimer: 'Pricing varies based on system size, location, installation complexity, and current incentives. Contact us for a detailed proposal.',
      factors: [
        'System size and energy requirements',
        'Roof type and structural considerations',
        'Electrical infrastructure upgrades',
        'Permits and interconnection fees',
        'Available incentives and rebates',
        'Financing terms and options'
      ]
    },
    caseStudies: {
      title: 'Commercial Success Stories',
      description: 'See how businesses across Canada have transformed their operations with commercial solar installations.',
      studies: [
        {
          title: 'Manufacturing Facility Solar Array',
          client: 'Advanced Manufacturing Corp',
          location: 'Toronto, ON',
          systemSize: '500 kW',
          savings: '$95,000/year',
          description: 'Large rooftop installation providing 70% of facility energy needs with advanced monitoring and energy management integration.',
          image: '/images/case-study-manufacturing.jpg'
        },
        {
          title: 'Retail Chain Distribution Center',
          client: 'National Retail Chain',
          location: 'Calgary, AB',
          systemSize: '750 kW',
          savings: '$125,000/year',
          description: 'Ground-mount solar farm designed to offset distribution center operations with carport integration for employee parking.',
          image: '/images/case-study-retail.jpg'
        },
        {
          title: 'Office Complex Solar Installation',
          client: 'Professional Services Building',
          location: 'Vancouver, BC',
          systemSize: '250 kW',
          savings: '$45,000/year',
          description: 'Multi-building office complex with integrated energy storage and demand charge management for optimal cost savings.',
          image: '/images/case-study-office.jpg'
        }
      ]
    },
    faqs: {
      title: 'Commercial Solar FAQs',
      items: [
        {
          question: 'How much can my business save with commercial solar?',
          answer: 'Commercial solar savings depend on your energy usage, system size, and local electricity rates. Most businesses see 50-90% reduction in electricity costs, with typical payback periods of 4-7 years. Our team provides detailed ROI analysis based on your specific situation.'
        },
        {
          question: 'What size solar system does my business need?',
          answer: 'System sizing depends on your energy consumption, available roof or land space, and budget. We analyze 12 months of electricity bills and conduct site assessments to recommend the optimal system size for your needs and financial goals.'
        },
        {
          question: 'How long does commercial solar installation take?',
          answer: 'Commercial projects typically take 2-6 months from contract signing to system activation, depending on size and complexity. This includes design, permits, equipment procurement, installation, and utility interconnection. We provide detailed project timelines during the proposal phase.'
        },
        {
          question: 'What financing options are available for commercial solar?',
          answer: 'We offer multiple financing options including cash purchase, solar loans, leases, and power purchase agreements (PPAs). Each option has different benefits regarding upfront costs, ownership, tax benefits, and cash flow. Our team helps you choose the best option for your situation.'
        },
        {
          question: 'What maintenance is required for commercial solar systems?',
          answer: 'Commercial solar systems require minimal maintenance. We recommend annual inspections and occasional cleaning. Our monitoring systems alert us to any performance issues. We offer comprehensive maintenance packages to ensure optimal system performance throughout its 25+ year lifespan.'
        },
        {
          question: 'How does net metering work for commercial solar?',
          answer: 'Net metering allows your business to send excess solar power back to the grid and receive credits. These credits offset electricity used when your system isn\'t producing enough power. Net metering policies vary by province and utility, and we help navigate these requirements.'
        },
        {
          question: 'Will solar panels work during winter in Canada?',
          answer: 'Yes! Solar panels actually perform more efficiently in cold temperatures. While winter has fewer daylight hours, panels still generate significant power from reflected light off snow. Our systems are designed specifically for Canadian climate conditions with appropriate tilt angles and snow load considerations.'
        },
        {
          question: 'What warranties come with commercial solar systems?',
          answer: 'Our commercial solar systems include comprehensive warranties: 25-year panel performance guarantees, 10-25 year inverter warranties, 25-year mounting system warranties, and our 10-year workmanship warranty. We also offer extended warranty options for additional peace of mind.'
        }
      ]
    },
    cta: {
      title: 'Ready to Reduce Your Business Energy Costs?',
      description: 'Get a comprehensive analysis of your commercial solar potential with detailed ROI projections and financing options.',
      primaryButton: {
        text: 'Get Commercial Quote',
        href: '/quote'
      },
      secondaryButton: {
        text: 'Schedule Consultation',
        href: '/contact'
      }
    }
  },
  {
    slug: 'energy-storage',
    title: 'Commercial Energy Storage',
    shortTitle: 'Energy Storage',
    description: 'Advanced battery storage systems for businesses to maximize solar investment, reduce demand charges, and ensure energy security.',
    metaDescription: 'Commercial battery storage solutions for Canadian businesses. Reduce demand charges, backup power, and maximize solar ROI with advanced energy storage systems.',
    keywords: [
      'commercial battery storage',
      'business energy storage',
      'commercial backup power',
      'demand charge reduction',
      'peak shaving systems',
      'industrial batteries',
      'commercial UPS',
      'grid independence',
      'energy security',
      'battery backup systems'
    ],
    hero: {
      title: 'Commercial Energy Storage',
      subtitle: 'Maximize your solar investment and ensure energy security with advanced commercial battery storage systems designed for Canadian businesses.',
      backgroundImage: '/images/hero-commercial-storage.jpg'
    },
    overview: {
      title: 'Intelligent Energy Storage Solutions',
      description: 'Our commercial energy storage systems provide businesses with energy independence, cost savings, and backup power security. Combine with solar for maximum value or deploy standalone for demand management and grid services.',
      keyBenefits: [
        'Reduce demand charges by up to 90%',
        'Backup power during outages',
        'Peak shaving and load management',
        'Maximize solar self-consumption',
        'Participate in grid services programs',
        'Improve power quality and reliability'
      ]
    },
    features: {
      title: 'Advanced Storage Technology',
      description: 'Our commercial energy storage solutions incorporate the latest battery technology and intelligent management systems for optimal performance.',
      items: [
        {
          icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
          title: 'Lithium Iron Phosphate',
          description: 'Safe, long-lasting LiFePO4 battery chemistry with 6000+ cycle life and excellent thermal stability.'
        },
        {
          icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
          title: 'Intelligent Management',
          description: 'Advanced battery management system with predictive algorithms for optimal charge/discharge cycles and longevity.'
        },
        {
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          title: 'Rapid Response',
          description: 'Millisecond response time for seamless backup power transition and grid services participation.'
        },
        {
          icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4',
          title: 'Modular Design',
          description: 'Scalable system architecture allowing future capacity expansion as your business grows.'
        }
      ]
    },
    process: {
      title: 'Storage Installation Process',
      description: 'Our systematic approach ensures your commercial energy storage system is designed, installed, and commissioned for maximum performance and safety.',
      steps: [
        {
          number: '01',
          title: 'Energy Audit & Analysis',
          description: 'Comprehensive analysis of your energy usage patterns, demand charges, and backup power requirements to size the optimal system.',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          number: '02',
          title: 'System Design & Engineering',
          description: 'Custom system design including electrical integration, safety systems, and optimal placement for your facility requirements.',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
        },
        {
          number: '03',
          title: 'Permits & Safety Approvals',
          description: 'Complete handling of electrical permits, utility approvals, and safety certifications required for commercial battery installations.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          number: '04',
          title: 'Professional Installation',
          description: 'Certified technicians install your system with proper safety protocols, minimal business disruption, and code compliance.',
          icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
        },
        {
          number: '05',
          title: 'System Programming & Testing',
          description: 'Complete system commissioning with performance testing, staff training, and optimization of operating parameters.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        }
      ]
    },
    specifications: {
      title: 'Storage System Specifications',
      description: 'Our commercial energy storage systems feature industry-leading components designed for reliability, safety, and performance.',
      categories: [
        {
          title: 'Battery System',
          specs: [
            { label: 'Battery Chemistry', value: 'Lithium Iron Phosphate (LiFePO4)' },
            { label: 'Cycle Life', value: '6,000+ cycles at 80% DOD' },
            { label: 'Round-Trip Efficiency', value: '94-96%' },
            { label: 'Operating Temperature', value: '-10°C to +50°C' },
            { label: 'Capacity Options', value: '50 kWh to 1 MWh+' },
            { label: 'Warranty', value: '10 years / 6,000 cycles' }
          ]
        },
        {
          title: 'Inverter System',
          specs: [
            { label: 'Power Rating', value: '25 kW to 500 kW+' },
            { label: 'Efficiency', value: '97-98%' },
            { label: 'Response Time', value: '<10 milliseconds' },
            { label: 'Grid Support', value: 'VAR support, frequency regulation' },
            { label: 'Standards', value: 'IEEE 1547, UL 1741, CSA' },
            { label: 'Monitoring', value: 'Real-time web/mobile platform' }
          ]
        },
        {
          title: 'Safety & Control',
          specs: [
            { label: 'Safety Certifications', value: 'UL 9540, UL 1973, NFPA 855' },
            { label: 'Fire Suppression', value: 'Available with NOVEC 1230' },
            { label: 'Environmental Rating', value: 'NEMA 3R outdoor rated' },
            { label: 'Communication', value: 'Ethernet, cellular, RS485' },
            { label: 'Control System', value: 'Advanced energy management' },
            { label: 'Remote Monitoring', value: '24/7 system monitoring' }
          ]
        }
      ]
    },
    pricing: {
      title: 'Energy Storage Investment',
      description: 'Commercial energy storage pricing depends on system size, application requirements, and site-specific factors. ROI typically achieved through demand charge savings and backup value.',
      disclaimer: 'Pricing varies based on capacity, power requirements, installation complexity, and available incentives. Contact us for detailed analysis.',
      factors: [
        'Battery capacity and power rating',
        'Installation complexity and location',
        'Electrical infrastructure requirements',
        'Safety and monitoring systems',
        'Available incentives and rebates',
        'Financing options and terms'
      ]
    },
    caseStudies: {
      title: 'Energy Storage Success Stories',
      description: 'Discover how Canadian businesses have achieved energy independence and cost savings with our commercial storage solutions.',
      studies: [
        {
          title: 'Hospital Backup Power System',
          client: 'Regional Medical Center',
          location: 'Toronto, ON',
          systemSize: '500 kWh',
          savings: '$75,000/year',
          description: 'Critical backup power system with seamless transfer and demand charge reduction for healthcare facility operations.',
          image: '/images/case-study-hospital.jpg'
        },
        {
          title: 'Data Center Peak Shaving',
          client: 'Cloud Computing Company',
          location: 'Vancouver, BC',
          systemSize: '1 MWh',
          savings: '$150,000/year',
          description: 'Large-scale battery system providing demand charge reduction and grid services revenue for mission-critical data center.',
          image: '/images/case-study-datacenter.jpg'
        },
        {
          title: 'Manufacturing Peak Management',
          client: 'Automotive Parts Manufacturer',
          location: 'Windsor, ON',
          systemSize: '750 kWh',
          savings: '$100,000/year',
          description: 'Peak shaving system reducing demand charges during high-energy manufacturing processes with backup power capability.',
          image: '/images/case-study-manufacturing-storage.jpg'
        }
      ]
    },
    faqs: {
      title: 'Energy Storage FAQs',
      items: [
        {
          question: 'How much can energy storage save on demand charges?',
          answer: 'Energy storage can reduce demand charges by 70-90% depending on your usage patterns and utility rate structure. The system automatically discharges during peak demand periods to keep your maximum demand low. Typical payback periods are 5-8 years through demand charge savings alone.'
        },
        {
          question: 'How long will the batteries provide backup power?',
          answer: 'Backup duration depends on your critical load requirements and battery capacity. We size systems based on your specific needs, typically providing 2-8 hours of backup power for critical systems, or longer for reduced loads. The system can be configured to prioritize specific circuits during outages.'
        },
        {
          question: 'Can energy storage work without solar panels?',
          answer: 'Yes! Energy storage can be deployed independently for demand charge reduction, backup power, and grid services. While combining with solar maximizes benefits, standalone storage provides significant value through peak shaving and improved power reliability.'
        },
        {
          question: 'What maintenance is required for battery systems?',
          answer: 'Commercial battery systems require minimal maintenance. Our monitoring systems provide 24/7 remote oversight with automatic alerts. Annual inspections and occasional cleaning are recommended. Battery management systems optimize performance and longevity automatically.'
        },
        {
          question: 'How safe are commercial battery systems?',
          answer: 'Our systems meet the highest safety standards including UL 9540 and NFPA 855. We use safe LiFePO4 chemistry with multiple protection layers including thermal management, fire suppression options, and emergency disconnect systems. Professional installation ensures all safety codes are met.'
        },
        {
          question: 'Can the system participate in grid programs?',
          answer: 'Yes, our systems can participate in various grid services programs where available, including demand response, frequency regulation, and capacity markets. These programs can provide additional revenue streams beyond demand charge savings and backup value.'
        },
        {
          question: 'How does the system integrate with existing electrical infrastructure?',
          answer: 'Our energy storage systems are designed to integrate seamlessly with your existing electrical system. We conduct thorough assessments and coordinate with your electrical contractor to ensure proper integration with minimal disruption to operations.'
        },
        {
          question: 'What financing options are available for energy storage?',
          answer: 'We offer multiple financing options including purchase, leasing, and energy-as-a-service models. Many businesses prefer leasing to preserve capital while immediately realizing operational savings. Our team helps structure the best financing approach for your situation.'
        }
      ]
    },
    cta: {
      title: 'Maximize Your Energy Independence',
      description: 'Discover how commercial energy storage can reduce costs, provide backup power, and future-proof your business energy strategy.',
      primaryButton: {
        text: 'Get Storage Quote',
        href: '/quote'
      },
      secondaryButton: {
        text: 'Schedule Assessment',
        href: '/contact'
      }
    }
  },
  {
    slug: 'maintenance',
    title: 'Commercial Solar Maintenance',
    shortTitle: 'Maintenance',
    description: 'Comprehensive maintenance and monitoring services to maximize your commercial solar investment performance and longevity.',
    metaDescription: 'Professional commercial solar maintenance services across Canada. Maximize system performance and ROI with comprehensive monitoring, cleaning, and repair services.',
    keywords: [
      'commercial solar maintenance',
      'solar system monitoring',
      'solar panel cleaning',
      'commercial solar repair',
      'solar performance optimization',
      'preventive solar maintenance',
      'solar system inspection',
      'commercial solar service',
      'solar warranty service',
      'solar system troubleshooting'
    ],
    hero: {
      title: 'Commercial Solar Maintenance',
      subtitle: 'Maximize your solar investment with comprehensive maintenance services designed to keep your commercial system operating at peak performance.',
      backgroundImage: '/images/hero-commercial-maintenance.jpg'
    },
    overview: {
      title: 'Protect Your Solar Investment',
      description: 'Our comprehensive maintenance programs ensure your commercial solar system operates at maximum efficiency throughout its 25+ year lifespan. From routine inspections to emergency repairs, we keep your system generating optimal power and savings.',
      keyBenefits: [
        'Maintain optimal system performance',
        'Extend equipment lifespan',
        'Preserve warranty coverage',
        'Minimize downtime and lost production',
        'Proactive issue identification',
        'Comprehensive performance reporting'
      ]
    },
    features: {
      title: 'Complete Maintenance Solutions',
      description: 'Our maintenance services combine advanced monitoring technology with expert technician support to ensure your system performs optimally year-round.',
      items: [
        {
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          title: '24/7 Remote Monitoring',
          description: 'Advanced monitoring systems track performance in real-time with automatic alerts for any issues or underperformance.'
        },
        {
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          title: 'Preventive Maintenance',
          description: 'Scheduled inspections, cleaning, and component testing to prevent issues before they impact system performance.'
        },
        {
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
          title: 'Emergency Response',
          description: 'Rapid response team available for urgent repairs and system failures to minimize downtime and lost production.'
        },
        {
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
          title: 'Performance Optimization',
          description: 'Regular performance analysis and system optimization to ensure maximum energy production and ROI achievement.'
        }
      ]
    },
    process: {
      title: 'Our Maintenance Approach',
      description: 'We follow a systematic approach to commercial solar maintenance that combines proactive monitoring with scheduled service visits.',
      steps: [
        {
          number: '01',
          title: 'System Assessment & Baseline',
          description: 'Comprehensive initial assessment to establish performance baselines and identify any existing issues or optimization opportunities.',
          icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 0V3a2 2 0 012-2h2a2 2 0 012 2v2'
        },
        {
          number: '02',
          title: 'Monitoring System Setup',
          description: 'Advanced monitoring installation and configuration for real-time performance tracking with automated alerting and reporting.',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          number: '03',
          title: 'Scheduled Maintenance Visits',
          description: 'Regular on-site inspections, cleaning, testing, and preventive maintenance according to your customized service schedule.',
          icon: 'M8 7V3a4 4 0 118 0v4m-4 0v8m0-8H6m10 0h-6'
        },
        {
          number: '04',
          title: 'Performance Reporting',
          description: 'Detailed monthly and annual performance reports with trend analysis, recommendations, and warranty compliance documentation.',
          icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          number: '05',
          title: 'Optimization & Upgrades',
          description: 'Continuous system optimization recommendations and professional upgrade services to maintain peak performance as technology advances.',
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        }
      ]
    },
    specifications: {
      title: 'Maintenance Service Details',
      description: 'Our comprehensive maintenance programs include all services necessary to keep your commercial solar system operating at peak performance.',
      categories: [
        {
          title: 'Monitoring Services',
          specs: [
            { label: 'Real-time Monitoring', value: '24/7 system performance tracking' },
            { label: 'Alert Response', value: '<24 hour response to alerts' },
            { label: 'Performance Analysis', value: 'Monthly trend analysis reports' },
            { label: 'Weather Integration', value: 'Performance vs. weather correlation' },
            { label: 'Mobile Access', value: 'Real-time mobile app access' },
            { label: 'Historical Data', value: '10+ years data retention' }
          ]
        },
        {
          title: 'Physical Maintenance',
          specs: [
            { label: 'Visual Inspections', value: 'Quarterly comprehensive inspections' },
            { label: 'Panel Cleaning', value: 'As needed based on soiling analysis' },
            { label: 'Electrical Testing', value: 'Annual electrical system testing' },
            { label: 'Inverter Service', value: 'Quarterly inverter maintenance' },
            { label: 'Structural Checks', value: 'Annual mounting system inspection' },
            { label: 'Vegetation Management', value: 'Ground-mount shading prevention' }
          ]
        },
        {
          title: 'Warranty & Support',
          specs: [
            { label: 'Response Time', value: 'Same-day response for emergencies' },
            { label: 'Service Coverage', value: 'All system components included' },
            { label: 'Warranty Compliance', value: 'Maintain all manufacturer warranties' },
            { label: 'Parts Availability', value: 'Stocked replacement parts' },
            { label: 'Technician Certification', value: 'Factory-trained service team' },
            { label: 'Service Guarantee', value: 'Performance restoration guarantee' }
          ]
        }
      ]
    },
    pricing: {
      title: 'Maintenance Service Plans',
      description: 'Our maintenance plans are designed to provide comprehensive coverage while delivering measurable ROI through optimized system performance.',
      disclaimer: 'Service plan pricing varies based on system size, complexity, location, and service level requirements. Contact us for customized proposal.',
      factors: [
        'System size and complexity',
        'Geographic location and accessibility',
        'Service level requirements',
        'Monitoring technology needs',
        'Warranty compliance requirements',
        'Emergency response preferences'
      ]
    },
    caseStudies: {
      title: 'Maintenance Success Stories',
      description: 'See how our comprehensive maintenance programs have helped businesses maximize their solar system performance and ROI.',
      studies: [
        {
          title: 'Warehouse Solar Optimization',
          client: 'Logistics Distribution Center',
          location: 'Calgary, AB',
          systemSize: '800 kW',
          savings: '$15,000/year',
          description: 'Proactive maintenance program identified and resolved inverter issues, optimized panel positioning, and maintained 99.5% system uptime.',
          image: '/images/case-study-warehouse-maintenance.jpg'
        },
        {
          title: 'Retail Chain Performance Management',
          client: 'National Retail Chain',
          location: 'Toronto, ON',
          systemSize: '1.2 MW',
          savings: '$25,000/year',
          description: 'Comprehensive monitoring and maintenance across 12 store locations with centralized reporting and coordinated service delivery.',
          image: '/images/case-study-retail-maintenance.jpg'
        },
        {
          title: 'Manufacturing Plant Uptime',
          client: 'Food Processing Facility',
          location: 'Vancouver, BC',
          systemSize: '600 kW',
          savings: '$18,000/year',
          description: 'Emergency response program prevented extended outages, while preventive maintenance identified aging components before failure.',
          image: '/images/case-study-food-maintenance.jpg'
        }
      ]
    },
    faqs: {
      title: 'Maintenance Service FAQs',
      items: [
        {
          question: 'How often should commercial solar systems be maintained?',
          answer: 'We recommend quarterly visual inspections, annual electrical testing, and panel cleaning as needed based on environmental conditions. Our monitoring systems provide daily performance analysis with immediate alerts for any issues requiring attention.'
        },
        {
          question: 'What does solar system monitoring include?',
          answer: 'Our monitoring includes real-time performance tracking, weather correlation analysis, component-level diagnostics, automatic alerts for underperformance or failures, mobile app access, and detailed monthly reports with trend analysis and recommendations.'
        },
        {
          question: 'How quickly do you respond to system problems?',
          answer: 'Emergency issues receive same-day response, while non-critical alerts are addressed within 48 hours. Our monitoring systems detect most issues before they significantly impact performance, allowing for proactive rather than reactive maintenance.'
        },
        {
          question: 'Do maintenance services preserve equipment warranties?',
          answer: 'Yes, our maintenance programs are designed to maintain all manufacturer warranties. We follow OEM specifications and document all service activities to ensure warranty compliance and preserve your equipment coverage.'
        },
        {
          question: 'How much can proper maintenance improve system performance?',
          answer: 'Proper maintenance typically improves system performance by 5-15% compared to unmaintained systems. This includes optimization of inverter settings, regular cleaning, early issue detection, and component replacement before failure impacts production.'
        },
        {
          question: 'What happens if my system fails during the warranty period?',
          answer: 'We coordinate all warranty claims with manufacturers and handle the replacement process. Our stocked parts inventory and technician network ensure minimal downtime while warranty issues are resolved.'
        },
        {
          question: 'Can you maintain systems installed by other companies?',
          answer: 'Yes, we provide maintenance services for commercial solar systems regardless of the original installer. We begin with a comprehensive assessment to understand your system and establish baseline performance metrics.'
        },
        {
          question: 'How do you handle maintenance during Canadian winters?',
          answer: 'Our maintenance programs account for seasonal conditions including snow removal when necessary, cold weather electrical testing, and adjusted cleaning schedules. We have experience maintaining systems across all Canadian climate zones.'
        }
      ]
    },
    cta: {
      title: 'Maximize Your Solar System Performance',
      description: 'Protect your investment with comprehensive maintenance services designed to keep your commercial solar system operating at peak efficiency.',
      primaryButton: {
        text: 'Get Maintenance Quote',
        href: '/quote'
      },
      secondaryButton: {
        text: 'Schedule Assessment',
        href: '/contact'
      }
    }
  }
];

export function getServiceBySlug(slug: string): CommercialService | undefined {
  return commercialServices.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return commercialServices.map(service => service.slug);
}

export default commercialServices;