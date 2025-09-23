export interface ResidentialService {
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
    benefits: string[];
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      step: number;
      title: string;
      description: string;
    }[];
  };
  specifications?: {
    title: string;
    items: {
      label: string;
      value: string;
    }[];
  };
  pricing: {
    title: string;
    description: string;
    startingPrice: string;
    priceNote: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const residentialServices: ResidentialService[] = [
  {
    slug: 'solar-panels',
    title: 'Residential Solar Panel Installation',
    shortTitle: 'Solar Panels',
    description: 'High-efficiency solar panel systems designed to maximize energy production and savings for Canadian homes.',
    metaDescription: 'Professional residential solar panel installation in Canada. Get high-efficiency solar systems with 25-year warranties. Free consultation and quote available.',
    keywords: ['residential solar panels', 'solar installation Canada', 'home solar systems', 'solar energy', 'rooftop solar'],
    hero: {
      title: 'Power Your Home with Solar Energy',
      subtitle: 'Cut your electricity bills by up to 90% with our premium residential solar panel systems. Designed for Canadian weather conditions with industry-leading warranties.',
      backgroundImage: '/images/residential/solar-panels-hero.jpg'
    },
    overview: {
      title: 'Why Choose Solar Panels for Your Home?',
      description: 'Our residential solar panel systems are engineered to deliver maximum energy production and long-term savings. With advanced monocrystalline technology and Canadian-optimized design, your solar investment will provide decades of clean, renewable energy.',
      benefits: [
        'Reduce electricity bills by 70-90%',
        'Increase property value by 4-6%',
        '25-year manufacturer warranty',
        'Canadian weather-tested components',
        'Net metering compatibility',
        'Federal and provincial rebates available',
        'Professional installation and monitoring',
        'Minimal maintenance requirements'
      ]
    },
    features: {
      title: 'Premium Solar Panel Features',
      items: [
        {
          title: 'High-Efficiency Monocrystalline Cells',
          description: 'Industry-leading 21.5%+ efficiency rating ensures maximum energy production from available roof space.',
          icon: 'solar-panel'
        },
        {
          title: 'Canadian Weather Resistance',
          description: 'Panels tested to withstand extreme Canadian weather including hail, snow loads, and temperature cycling.',
          icon: 'shield'
        },
        {
          title: 'Smart Monitoring System',
          description: 'Real-time monitoring via mobile app to track energy production and system performance.',
          icon: 'smartphone'
        },
        {
          title: 'Optimized Inverter Technology',
          description: 'Power optimizers or microinverters ensure maximum energy harvest even with partial shading.',
          icon: 'microchip'
        },
        {
          title: 'Aesthetic Integration',
          description: 'Sleek, low-profile design that complements your home\'s architecture with minimal visual impact.',
          icon: 'home'
        },
        {
          title: '25-Year Performance Guarantee',
          description: 'Industry-leading warranty covering both product defects and performance degradation.',
          icon: 'certificate'
        }
      ]
    },
    process: {
      title: 'Our Installation Process',
      steps: [
        {
          step: 1,
          title: 'Free Consultation & Site Assessment',
          description: 'Our solar experts visit your home to assess roof condition, sun exposure, and energy needs. We provide a detailed proposal with system sizing and savings projections.'
        },
        {
          step: 2,
          title: 'Custom System Design',
          description: 'Using advanced modeling software, we create a custom solar design optimized for your roof layout, energy consumption, and aesthetic preferences.'
        },
        {
          step: 3,
          title: 'Permits & Approvals',
          description: 'We handle all permit applications, utility interconnection agreements, and local authority approvals to ensure code compliance.'
        },
        {
          step: 4,
          title: 'Professional Installation',
          description: 'Our certified installers complete the installation typically within 1-2 days, including electrical connections and system commissioning.'
        },
        {
          step: 5,
          title: 'System Activation & Monitoring',
          description: 'After utility approval and net meter installation, we activate your system and set up monitoring to ensure optimal performance.'
        }
      ]
    },
    specifications: {
      title: 'Technical Specifications',
      items: [
        { label: 'Panel Efficiency', value: '21.5% - 22.8%' },
        { label: 'Power Output', value: '400W - 450W per panel' },
        { label: 'Warranty', value: '25 years product & performance' },
        { label: 'Temperature Coefficient', value: '-0.35%/°C' },
        { label: 'Snow Load Rating', value: '5,400 Pa (113 psf)' },
        { label: 'Wind Load Rating', value: '2,400 Pa (50 psf)' },
        { label: 'Operating Temperature', value: '-40°C to +85°C' },
        { label: 'Cell Technology', value: 'Monocrystalline PERC' }
      ]
    },
    pricing: {
      title: 'Investment & Savings',
      description: 'Solar panel system costs vary based on system size, roof complexity, and equipment selection. Most homeowners see a full return on investment within 8-12 years.',
      startingPrice: '$15,000',
      priceNote: 'Price before federal and provincial incentives. Final cost depends on system size and installation requirements.'
    },
    faq: [
      {
        question: 'How much can I save with solar panels?',
        answer: 'Most homeowners save 70-90% on their electricity bills. Annual savings typically range from $1,200 to $3,000 depending on system size and energy consumption. Over 25 years, total savings often exceed $50,000.'
      },
      {
        question: 'Do solar panels work in Canadian winters?',
        answer: 'Yes! Solar panels actually work more efficiently in cold temperatures. While shorter days reduce daily production, snow reflection can boost output. Annual production accounts for seasonal variations, and net metering allows summer overproduction to offset winter usage.'
      },
      {
        question: 'What happens during power outages?',
        answer: 'Standard grid-tied solar systems shut off during outages for safety. However, systems with battery storage can provide backup power to critical loads. We offer Tesla Powerwall integration for energy storage and backup capability.'
      },
      {
        question: 'How long do solar panels last?',
        answer: 'Solar panels are designed to last 25-30+ years with minimal maintenance. Our panels come with 25-year warranties and are expected to produce 80%+ of their original output after 25 years. Many systems continue operating effectively for 40+ years.'
      },
      {
        question: 'What maintenance is required?',
        answer: 'Solar panels require minimal maintenance. Occasional cleaning (rain usually suffices) and annual inspections are recommended. Our monitoring systems alert you to any performance issues, and we offer maintenance packages for peace of mind.'
      },
      {
        question: 'Are there financing options available?',
        answer: 'Yes, we offer multiple financing options including solar loans, leases, and power purchase agreements (PPAs). Many customers choose financing to start saving immediately while preserving cash for other investments.'
      }
    ],
    relatedServices: ['tesla-powerwall', 'ev-charging', 'heat-pumps'],
    ctaSection: {
      title: 'Ready to Start Saving with Solar?',
      description: 'Get a free consultation and personalized solar proposal for your home. Our experts will assess your energy needs and provide detailed savings projections.',
      buttonText: 'Get Free Solar Quote'
    }
  },
  {
    slug: 'tesla-powerwall',
    title: 'Tesla Powerwall Home Battery Storage',
    shortTitle: 'Tesla Powerwall',
    description: 'Advanced home battery storage system that stores solar energy and provides backup power during outages.',
    metaDescription: 'Tesla Powerwall installation in Canada. Store solar energy, backup power during outages, and optimize electricity costs. Professional installation with warranty.',
    keywords: ['Tesla Powerwall', 'home battery storage', 'solar battery', 'backup power', 'energy storage Canada'],
    hero: {
      title: 'Store Your Solar Energy with Tesla Powerwall',
      subtitle: 'Maximize your solar investment with the world\'s most advanced home battery. Store excess energy, reduce grid dependence, and keep the lights on during outages.',
      backgroundImage: '/images/residential/powerwall-hero.jpg'
    },
    overview: {
      title: 'Tesla Powerwall: The Future of Home Energy Storage',
      description: 'The Tesla Powerwall is a rechargeable lithium-ion battery designed to store energy at the residential level for backup protection and self-consumption of solar power generation. Its sleek design and advanced technology make it the perfect complement to any solar installation.',
      benefits: [
        'Store 13.5 kWh of usable energy',
        'Seamless backup power during outages',
        'Time-of-use optimization for peak shaving',
        'Stackable up to 10 units for larger homes',
        'Mobile app monitoring and control',
        '10-year warranty with guaranteed capacity',
        'Weather-resistant outdoor installation',
        'Integrated solar system compatibility'
      ]
    },
    features: {
      title: 'Powerwall Features & Capabilities',
      items: [
        {
          title: '13.5 kWh Energy Capacity',
          description: 'Store enough energy to power your home for 8-12 hours during outages, depending on usage patterns.',
          icon: 'battery'
        },
        {
          title: 'Instantaneous Backup',
          description: 'Automatic switchover in milliseconds during power outages - so fast you won\'t even notice.',
          icon: 'lightning'
        },
        {
          title: 'Smart Energy Management',
          description: 'Optimizes energy usage based on time-of-use rates, weather forecasts, and usage patterns.',
          icon: 'brain'
        },
        {
          title: 'Scalable Design',
          description: 'Install multiple Powerwalls to meet larger energy storage needs, up to 135 kWh total capacity.',
          icon: 'layers'
        },
        {
          title: 'Tesla App Control',
          description: 'Monitor energy production, consumption, and battery status from anywhere using the Tesla mobile app.',
          icon: 'smartphone'
        },
        {
          title: 'All-Weather Performance',
          description: 'Operates reliably in extreme temperatures from -20°C to 50°C with minimal performance degradation.',
          icon: 'thermometer'
        }
      ]
    },
    process: {
      title: 'Powerwall Installation Process',
      steps: [
        {
          step: 1,
          title: 'Energy Assessment & Design',
          description: 'We analyze your energy usage patterns, solar production, and backup power needs to determine optimal Powerwall configuration.'
        },
        {
          step: 2,
          title: 'Site Preparation & Permits',
          description: 'Site preparation for indoor or outdoor installation, electrical permits, and utility interconnection agreements.'
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Certified Tesla installers mount the Powerwall, complete electrical connections, and integrate with your existing solar system.'
        },
        {
          step: 4,
          title: 'System Configuration',
          description: 'Programming backup circuits, setting up time-of-use optimization, and configuring the Tesla app for monitoring.'
        },
        {
          step: 5,
          title: 'Testing & Commissioning',
          description: 'Comprehensive testing of backup functionality, energy management features, and system performance verification.'
        }
      ]
    },
    specifications: {
      title: 'Technical Specifications',
      items: [
        { label: 'Energy Capacity', value: '13.5 kWh usable' },
        { label: 'Power Output', value: '5 kW continuous / 7 kW peak' },
        { label: 'Efficiency', value: '90% round-trip' },
        { label: 'Operating Temperature', value: '-20°C to 50°C' },
        { label: 'Warranty', value: '10 years unlimited cycles' },
        { label: 'Dimensions', value: '1150 x 755 x 155 mm' },
        { label: 'Weight', value: '114 kg' },
        { label: 'Installation', value: 'Indoor/Outdoor rated' }
      ]
    },
    pricing: {
      title: 'Powerwall Investment',
      description: 'Tesla Powerwall pricing includes the battery unit, installation, and configuration. Multiple units can be installed for larger energy storage needs.',
      startingPrice: '$18,500',
      priceNote: 'Price includes installation and commissioning. Additional electrical work may be required for some installations.'
    },
    faq: [
      {
        question: 'How long will Powerwall power my home?',
        answer: 'A single Powerwall can power essential loads for 8-12 hours, or your entire home for 4-6 hours, depending on energy consumption. Multiple Powerwalls can extend this significantly.'
      },
      {
        question: 'Can I install Powerwall without solar panels?',
        answer: 'Yes, Powerwall can be installed independently to provide backup power and optimize grid electricity usage based on time-of-use rates. However, it\'s most cost-effective when paired with solar.'
      },
      {
        question: 'How does Powerwall work during winter?',
        answer: 'Powerwall performs well in Canadian winters, operating effectively down to -20°C. The battery management system optimizes performance in cold conditions, and indoor installations further protect against extreme temperatures.'
      },
      {
        question: 'What\'s included in the warranty?',
        answer: 'Tesla provides a 10-year warranty covering unlimited charge/discharge cycles and guarantees 70% capacity retention. The warranty includes the battery, inverter, and associated hardware.'
      },
      {
        question: 'Can Powerwall be expanded later?',
        answer: 'Yes, additional Powerwalls can be added to existing installations up to a maximum of 10 units (135 kWh total). This allows for future expansion as energy needs grow.'
      },
      {
        question: 'How does time-of-use optimization work?',
        answer: 'Powerwall automatically charges when electricity rates are low and discharges when rates are high, maximizing savings. It learns your usage patterns and optimizes based on utility rate schedules.'
      }
    ],
    relatedServices: ['solar-panels', 'ev-charging', 'heat-pumps'],
    ctaSection: {
      title: 'Power Your Home with Tesla Powerwall',
      description: 'Experience energy independence with the world\'s most advanced home battery. Get a personalized assessment and quote for your home.',
      buttonText: 'Get Powerwall Quote'
    }
  },
  {
    slug: 'heat-pumps',
    title: 'Heat Pump Installation & Service',
    shortTitle: 'Heat Pumps',
    description: 'Energy-efficient heat pump systems for year-round heating and cooling, perfectly integrated with solar energy.',
    metaDescription: 'Professional heat pump installation in Canada. Energy-efficient heating and cooling systems. Cold climate heat pumps with solar integration available.',
    keywords: ['heat pumps Canada', 'cold climate heat pump', 'energy efficient heating', 'heat pump installation', 'solar heat pump'],
    hero: {
      title: 'Efficient Heating & Cooling with Heat Pumps',
      subtitle: 'Revolutionary heat pump technology that provides comfortable heating and cooling year-round, even in Canada\'s harsh climate. Perfect for solar-powered homes.',
      backgroundImage: '/images/residential/heat-pump-hero.jpg'
    },
    overview: {
      title: 'Cold Climate Heat Pump Technology',
      description: 'Our advanced cold climate heat pumps deliver exceptional efficiency even at temperatures as low as -25°C. When paired with solar energy, you can achieve near-zero operating costs for home heating and cooling.',
      benefits: [
        'Up to 300% more efficient than electric heating',
        'Provides both heating and cooling',
        'Operates effectively to -25°C',
        'Significant reduction in energy costs',
        'Compatible with solar energy systems',
        'Quiet operation with advanced sound dampening',
        'Environmental-friendly refrigerants',
        'Government rebates and incentives available'
      ]
    },
    features: {
      title: 'Advanced Heat Pump Features',
      items: [
        {
          title: 'Cold Climate Optimization',
          description: 'Enhanced vapor injection technology maintains high efficiency even in extreme Canadian cold.',
          icon: 'snowflake'
        },
        {
          title: 'Variable Speed Compressor',
          description: 'Inverter-driven compressor adjusts output to match heating/cooling demand for maximum efficiency.',
          icon: 'gauge'
        },
        {
          title: 'Smart Thermostat Integration',
          description: 'Wi-Fi enabled controls with smartphone app for remote monitoring and energy optimization.',
          icon: 'smartphone'
        },
        {
          title: 'Dual Fuel Capability',
          description: 'Automatic switching to backup heating during extreme cold ensures consistent comfort.',
          icon: 'fire'
        },
        {
          title: 'Solar System Integration',
          description: 'Optimized operation with solar energy systems for maximum renewable energy utilization.',
          icon: 'solar-panel'
        },
        {
          title: 'Ultra-Quiet Operation',
          description: 'Advanced sound dampening technology ensures peaceful operation at noise levels below 58 dB.',
          icon: 'volume-off'
        }
      ]
    },
    process: {
      title: 'Heat Pump Installation Process',
      steps: [
        {
          step: 1,
          title: 'Home Energy Assessment',
          description: 'Comprehensive evaluation of your home\'s heating/cooling loads, insulation, and existing systems to determine optimal heat pump sizing.'
        },
        {
          step: 2,
          title: 'System Design & Selection',
          description: 'Custom system design including indoor and outdoor unit placement, ductwork modifications, and integration with existing systems.'
        },
        {
          step: 3,
          title: 'Pre-Installation Preparation',
          description: 'Obtaining permits, scheduling utility connections, and preparing installation sites including electrical and refrigerant line routing.'
        },
        {
          step: 4,
          title: 'Professional Installation',
          description: 'Expert installation of indoor and outdoor units, refrigerant line connections, electrical hookups, and system commissioning.'
        },
        {
          step: 5,
          title: 'Testing & Optimization',
          description: 'Comprehensive system testing, refrigerant charging, airflow balancing, and smart thermostat programming for optimal performance.'
        }
      ]
    },
    specifications: {
      title: 'Heat Pump Specifications',
      items: [
        { label: 'Heating Capacity', value: '18,000 - 60,000 BTU/h' },
        { label: 'Cooling Capacity', value: '18,000 - 60,000 BTU/h' },
        { label: 'HSPF Rating', value: 'Up to 13.2' },
        { label: 'SEER Rating', value: 'Up to 26' },
        { label: 'Operating Range', value: '-25°C to 46°C' },
        { label: 'Sound Level', value: '48-58 dB' },
        { label: 'Refrigerant', value: 'R-410A or R-32' },
        { label: 'Warranty', value: '10 years compressor / 5 years parts' }
      ]
    },
    pricing: {
      title: 'Heat Pump Investment',
      description: 'Heat pump system costs vary based on home size, existing ductwork, and system capacity. Government rebates can significantly reduce initial investment.',
      startingPrice: '$12,000',
      priceNote: 'Price includes installation and commissioning. Additional electrical or ductwork modifications may be required.'
    },
    faq: [
      {
        question: 'Do heat pumps work in Canadian winters?',
        answer: 'Yes! Modern cold climate heat pumps are specifically designed for Canadian conditions. They maintain high efficiency down to -25°C and can provide reliable heating even in extreme cold. Backup heating ensures comfort during the coldest days.'
      },
      {
        question: 'How much can I save with a heat pump?',
        answer: 'Heat pumps can reduce heating costs by 40-60% compared to electric baseboard heating and 30-40% compared to natural gas. When powered by solar energy, operating costs can approach zero during sunny periods.'
      },
      {
        question: 'Can I keep my existing ductwork?',
        answer: 'In most cases, yes. Existing ductwork can often be adapted for heat pump systems. We perform ductwork evaluation and make necessary modifications to optimize airflow and efficiency.'
      },
      {
        question: 'What maintenance is required?',
        answer: 'Regular maintenance includes changing air filters, cleaning outdoor unit coils, and annual professional servicing. Proper maintenance ensures optimal efficiency and extends system life to 15-20+ years.'
      },
      {
        question: 'Are there government rebates available?',
        answer: 'Yes, significant rebates are available through federal programs like the Canada Greener Homes Grant (up to $5,000) and various provincial programs. We help you navigate and apply for all available incentives.'
      },
      {
        question: 'How does a heat pump work with solar panels?',
        answer: 'Heat pumps pair excellently with solar systems. Solar energy can power the heat pump during the day, with net metering crediting excess production. This combination can achieve near-zero energy costs for heating and cooling.'
      }
    ],
    relatedServices: ['solar-panels', 'tesla-powerwall', 'ev-charging'],
    ctaSection: {
      title: 'Upgrade to Efficient Heat Pump Heating',
      description: 'Experience year-round comfort with advanced cold climate heat pump technology. Get a free assessment and quote for your home.',
      buttonText: 'Get Heat Pump Quote'
    }
  },
  {
    slug: 'ev-charging',
    title: 'Electric Vehicle Charging Stations',
    shortTitle: 'EV Charging',
    description: 'Professional EV charging station installation for home use, powered by clean solar energy for sustainable transportation.',
    metaDescription: 'Professional EV charging station installation in Canada. Level 2 home chargers with solar integration. Tesla, universal, and smart charging solutions.',
    keywords: ['EV charging station', 'home EV charger', 'Tesla charger installation', 'solar EV charging', 'electric car charger'],
    hero: {
      title: 'Charge Your EV with Clean Solar Energy',
      subtitle: 'Professional installation of Level 2 EV charging stations. Power your electric vehicle with clean, renewable solar energy and achieve true transportation independence.',
      backgroundImage: '/images/residential/ev-charging-hero.jpg'
    },
    overview: {
      title: 'Home EV Charging Solutions',
      description: 'Transform your home into a personal fueling station with our professional EV charging installations. When combined with solar energy, you can charge your electric vehicle with 100% renewable energy, dramatically reducing transportation costs.',
      benefits: [
        'Charge 5-7x faster than standard outlets',
        'Compatible with all electric vehicles',
        'Smart charging with load management',
        'Integration with solar energy systems',
        'Weatherproof outdoor installation',
        'Mobile app monitoring and control',
        'Time-of-use optimization available',
        'Government rebates and incentives'
      ]
    },
    features: {
      title: 'EV Charging Station Features',
      items: [
        {
          title: 'Level 2 Fast Charging',
          description: 'Delivers up to 11.5 kW (48A) for rapid charging - add 25-40 miles of range per hour.',
          icon: 'lightning'
        },
        {
          title: 'Universal Compatibility',
          description: 'Works with all electric vehicles including Tesla, Ford, GM, Nissan, BMW, and more.',
          icon: 'car'
        },
        {
          title: 'Smart Load Management',
          description: 'Automatically adjusts charging power based on home energy usage to prevent electrical overload.',
          icon: 'brain'
        },
        {
          title: 'Solar Integration',
          description: 'Optimize charging schedules to maximize use of solar energy production during peak sun hours.',
          icon: 'solar-panel'
        },
        {
          title: 'Weather-Resistant Design',
          description: 'NEMA 4 rated enclosures withstand Canadian weather conditions including rain, snow, and extreme temperatures.',
          icon: 'shield'
        },
        {
          title: 'Mobile App Control',
          description: 'Monitor charging sessions, schedule charging times, and track energy usage from your smartphone.',
          icon: 'smartphone'
        }
      ]
    },
    process: {
      title: 'EV Charger Installation Process',
      steps: [
        {
          step: 1,
          title: 'Site Assessment & Planning',
          description: 'Evaluate electrical panel capacity, optimal charger location, and determine any required electrical upgrades.'
        },
        {
          step: 2,
          title: 'Permits & Electrical Design',
          description: 'Obtain electrical permits and design the installation including circuit routing and safety disconnect requirements.'
        },
        {
          step: 3,
          title: 'Electrical Infrastructure',
          description: 'Install dedicated 240V circuit, appropriate breaker, and safety equipment. Upgrade electrical panel if needed.'
        },
        {
          step: 4,
          title: 'Charger Installation',
          description: 'Mount charging station, complete electrical connections, and install protective equipment as required by code.'
        },
        {
          step: 5,
          title: 'Testing & Commissioning',
          description: 'Comprehensive testing of all safety systems, charging functionality, and app connectivity setup.'
        }
      ]
    },
    specifications: {
      title: 'Charger Specifications',
      items: [
        { label: 'Power Output', value: '3.3 - 11.5 kW (Level 2)' },
        { label: 'Input Voltage', value: '240V AC' },
        { label: 'Charging Current', value: '16-48 Amp adjustable' },
        { label: 'Connector Type', value: 'J1772 or Tesla NACS' },
        { label: 'Cable Length', value: '18-25 feet standard' },
        { label: 'Operating Temperature', value: '-40°C to 50°C' },
        { label: 'Enclosure Rating', value: 'NEMA 4 (weatherproof)' },
        { label: 'Warranty', value: '3-5 years manufacturer' }
      ]
    },
    pricing: {
      title: 'EV Charger Investment',
      description: 'EV charging station costs include the charger unit and professional installation. Prices vary based on charger features and electrical requirements.',
      startingPrice: '$1,800',
      priceNote: 'Price includes basic installation. Additional costs may apply for electrical panel upgrades or extensive wiring runs.'
    },
    faq: [
      {
        question: 'How fast will my EV charge at home?',
        answer: 'Level 2 chargers typically add 25-40 miles of range per hour of charging, compared to 3-5 miles per hour from a standard household outlet. Most EVs can fully charge overnight (8-10 hours) with a Level 2 charger.'
      },
      {
        question: 'Do I need to upgrade my electrical panel?',
        answer: 'Many homes can accommodate an EV charger with existing electrical capacity. We assess your panel during the site visit and recommend upgrades only if necessary. Modern panels typically have sufficient capacity.'
      },
      {
        question: 'Can I charge my EV with solar power?',
        answer: 'Absolutely! EV charging pairs excellently with solar systems. Smart chargers can prioritize solar energy during peak production hours, allowing you to drive on sunshine. This combination maximizes renewable energy usage.'
      },
      {
        question: 'Will EV charging increase my electricity bill significantly?',
        answer: 'The average EV driver adds $30-50 per month to their electricity bill, compared to $150+ for gasoline. With time-of-use rates and solar power, costs can be even lower.'
      },
      {
        question: 'Are there rebates for EV charger installation?',
        answer: 'Yes, various federal and provincial programs offer rebates for home EV charger installation, typically $500-1,500. We help you identify and apply for all available incentives.'
      },
      {
        question: 'What if I need to charge multiple EVs?',
        answer: 'We can install multiple chargers or dual-port units for households with multiple EVs. Load management systems ensure safe operation without overloading your electrical service.'
      }
    ],
    relatedServices: ['solar-panels', 'tesla-powerwall', 'heat-pumps'],
    ctaSection: {
      title: 'Start Charging with Clean Energy',
      description: 'Join the electric revolution with professional EV charging installation. Get a free assessment and quote for your home charging solution.',
      buttonText: 'Get EV Charger Quote'
    }
  }
];

export function getServiceBySlug(slug: string): ResidentialService | undefined {
  return residentialServices.find(service => service.slug === slug);
}

export function getRelatedServices(slug: string): ResidentialService[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  
  return service.relatedServices
    .map(relatedSlug => getServiceBySlug(relatedSlug))
    .filter((service): service is ResidentialService => service !== undefined);
}

export function getAllServices(): ResidentialService[] {
  return residentialServices;
}