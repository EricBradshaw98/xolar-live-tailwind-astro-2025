export interface ServiceArea {
  slug: string;
  city: string;
  province: string;
  region: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  
  // Location details
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  averageHomeValue: number;
  solarPotential: string; // "Excellent", "Very Good", "Good"
  
  // Content
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  
  // Local information
  localInfo: {
    climate: string;
    sunHours: number; // average daily sun hours
    incentives: string[];
    electricityRate: number; // cents per kWh
  };
  
  // Testimonials specific to this area
  testimonials: {
    name: string;
    location: string; // specific neighborhood
    quote: string;
    rating: number;
    installDate: string;
    systemSize: string;
    savings: string;
  }[];
  
  // Local gallery
  gallery: {
    image: string;
    alt: string;
    location: string; // specific address/neighborhood
    systemSize: string;
    installDate: string;
  }[];
  
  // Nearby areas for internal linking
  nearbyAreas: string[]; // slugs of nearby service areas
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'toronto',
    city: 'Toronto',
    province: 'Ontario',
    region: 'Greater Toronto Area',
    displayName: 'Toronto, Ontario',
    metaTitle: 'Solar Panel Installation Toronto | Solar Energy Solutions Ontario',
    metaDescription: 'Professional solar panel installation in Toronto, Ontario. Reduce energy costs with premium solar systems. Free quotes, 25-year warranty, certified installers.',
    keywords: [
      'solar panels Toronto',
      'solar installation Toronto',
      'solar energy Toronto Ontario',
      'Toronto solar company',
      'residential solar Toronto',
      'commercial solar Toronto',
      'Tesla Powerwall Toronto',
      'solar incentives Ontario'
    ],
    
    coordinates: {
      lat: 43.6532,
      lng: -79.3832
    },
    population: 2794356,
    averageHomeValue: 1100000,
    solarPotential: 'Very Good',
    
    hero: {
      title: 'Solar Panel Installation in Toronto',
      subtitle: 'Join thousands of Toronto homeowners and businesses saving money with clean solar energy. Professional installation with 25-year warranty.',
      backgroundImage: '/images/areas/toronto-skyline.jpg'
    },
    
    localInfo: {
      climate: 'Continental climate with cold winters and warm summers',
      sunHours: 4.2,
      incentives: [
        'Federal Solar Tax Credit',
        'Ontario Net Metering Program',
        'Canada Greener Homes Grant',
        'Municipal rebates available'
      ],
      electricityRate: 13.5
    },
    
    testimonials: [
      {
        name: 'Sarah Chen',
        location: 'North York',
        quote: 'Our 8kW system has exceeded expectations. Living in Toronto, we were concerned about winter performance, but even on cloudy days we generate substantial power.',
        rating: 5,
        installDate: '2023-08-15',
        systemSize: '8kW',
        savings: '$2,400/year'
      },
      {
        name: 'Mike Rodriguez',
        location: 'Scarborough',
        quote: 'The installation team was professional and completed our roof-mounted system in one day. Our electricity bills have dropped by 85% since going solar.',
        rating: 5,
        installDate: '2023-06-22',
        systemSize: '6.5kW',
        savings: '$1,890/year'
      },
      {
        name: 'Jennifer Park',
        location: 'Etobicoke',
        quote: 'As a Toronto homeowner, I was impressed by how quickly we saw ROI. The system pays for itself while increasing our home value.',
        rating: 5,
        installDate: '2023-09-10',
        systemSize: '10kW',
        savings: '$2,850/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/toronto-residential-1.jpg',
        alt: 'Modern solar panel installation on Toronto home in North York',
        location: 'North York',
        systemSize: '8.5kW',
        installDate: '2023-07'
      },
      {
        image: '/images/gallery/toronto-commercial-1.jpg',
        alt: 'Commercial solar installation on Toronto office building',
        location: 'Downtown Toronto',
        systemSize: '45kW',
        installDate: '2023-05'
      },
      {
        image: '/images/gallery/toronto-residential-2.jpg',
        alt: 'Solar panels on Victorian home in Beaches Toronto',
        location: 'The Beaches',
        systemSize: '6kW',
        installDate: '2023-09'
      },
      {
        image: '/images/gallery/toronto-townhouse-1.jpg',
        alt: 'Solar installation on Toronto townhouse complex',
        location: 'Leslieville',
        systemSize: '12kW',
        installDate: '2023-08'
      }
    ],
    
    nearbyAreas: ['mississauga', 'brampton', 'markham', 'ottawa']
  },
  
  {
    slug: 'vancouver',
    city: 'Vancouver',
    province: 'British Columbia',
    region: 'Lower Mainland',
    displayName: 'Vancouver, British Columbia',
    metaTitle: 'Solar Panel Installation Vancouver BC | Clean Energy Solutions',
    metaDescription: 'Expert solar panel installation in Vancouver, BC. Harness Pacific Northwest solar potential with premium systems. Free consultation and competitive pricing.',
    keywords: [
      'solar panels Vancouver',
      'solar installation Vancouver BC',
      'Vancouver solar company',
      'BC solar incentives',
      'residential solar Vancouver',
      'commercial solar Vancouver',
      'green energy Vancouver',
      'solar battery Vancouver'
    ],
    
    coordinates: {
      lat: 49.2827,
      lng: -123.1207
    },
    population: 695263,
    averageHomeValue: 1300000,
    solarPotential: 'Good',
    
    hero: {
      title: 'Solar Energy Solutions in Vancouver',
      subtitle: 'Maximize your solar investment in Beautiful British Columbia. Professional installation designed for West Coast climate conditions.',
      backgroundImage: '/images/areas/vancouver-mountains.jpg'
    },
    
    localInfo: {
      climate: 'Oceanic climate with mild, wet winters and warm, dry summers',
      sunHours: 3.8,
      incentives: [
        'BC Hydro Net Metering',
        'Federal Solar Tax Credit',
        'Canada Greener Homes Grant',
        'CleanBC Rebates',
        'Vancouver Green Building Incentives'
      ],
      electricityRate: 9.8
    },
    
    testimonials: [
      {
        name: 'David Thompson',
        location: 'Kitsilano',
        quote: 'Despite Vancouver\'s reputation for rain, our solar system produces excellent results. The summer months more than make up for winter production.',
        rating: 5,
        installDate: '2023-07-18',
        systemSize: '7.2kW',
        savings: '$1,650/year'
      },
      {
        name: 'Lisa Wong',
        location: 'Richmond',
        quote: 'Living near YVR, we wanted clean energy that made financial sense. Our system has exceeded all expectations for both savings and environmental impact.',
        rating: 5,
        installDate: '2023-05-30',
        systemSize: '9kW',
        savings: '$2,100/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/vancouver-residential-1.jpg',
        alt: 'Solar panels on Vancouver heritage home with mountain views',
        location: 'Kitsilano',
        systemSize: '7.2kW',
        installDate: '2023-07'
      },
      {
        image: '/images/gallery/vancouver-modern-1.jpg',
        alt: 'Modern Vancouver home with integrated solar system',
        location: 'West Vancouver',
        systemSize: '10kW',
        installDate: '2023-06'
      },
      {
        image: '/images/gallery/vancouver-commercial-1.jpg',
        alt: 'Commercial solar installation Vancouver warehouse',
        location: 'Richmond',
        systemSize: '50kW',
        installDate: '2023-04'
      }
    ],
    
    nearbyAreas: ['burnaby', 'richmond', 'surrey', 'calgary']
  },
  
  {
    slug: 'calgary',
    city: 'Calgary',
    province: 'Alberta',
    region: 'Southern Alberta',
    displayName: 'Calgary, Alberta',
    metaTitle: 'Solar Panel Installation Calgary AB | Alberta Solar Energy',
    metaDescription: 'Professional solar installation in Calgary, Alberta. Take advantage of Alberta\'s excellent solar potential and energy incentives. Expert installation team.',
    keywords: [
      'solar panels Calgary',
      'Calgary solar installation',
      'Alberta solar company',
      'solar energy Calgary AB',
      'residential solar Calgary',
      'commercial solar Alberta',
      'Calgary solar incentives',
      'Alberta net metering'
    ],
    
    coordinates: {
      lat: 51.0447,
      lng: -114.0719
    },
    population: 1336000,
    averageHomeValue: 520000,
    solarPotential: 'Excellent',
    
    hero: {
      title: 'Calgary Solar Panel Installation',
      subtitle: 'Alberta leads Canada in solar potential. Join Calgary homeowners and businesses saving thousands with professional solar installations.',
      backgroundImage: '/images/areas/calgary-skyline.jpg'
    },
    
    localInfo: {
      climate: 'Semi-arid climate with cold winters and warm summers, abundant sunshine',
      sunHours: 5.2,
      incentives: [
        'Alberta Net Billing Program',
        'Federal Solar Tax Credit',
        'Canada Greener Homes Grant',
        'Municipal Property Tax Exemptions',
        'Alberta Solar Rebates'
      ],
      electricityRate: 6.8
    },
    
    testimonials: [
      {
        name: 'James Mitchell',
        location: 'Kensington',
        quote: 'Calgary\'s sunshine makes solar incredibly effective. Our system generates more power than we use for 8 months of the year.',
        rating: 5,
        installDate: '2023-06-12',
        systemSize: '8.5kW',
        savings: '$2,650/year'
      },
      {
        name: 'Amanda Foster',
        location: 'Airdrie',
        quote: 'As Calgarians, we knew about our solar potential. The installation exceeded our expectations and the savings are substantial.',
        rating: 5,
        installDate: '2023-08-25',
        systemSize: '11kW',
        savings: '$3,200/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/calgary-residential-1.jpg',
        alt: 'Solar panel installation on Calgary suburban home',
        location: 'Kensington',
        systemSize: '8.5kW',
        installDate: '2023-06'
      },
      {
        image: '/images/gallery/calgary-ranch-1.jpg',
        alt: 'Large solar array on Calgary area ranch property',
        location: 'Foothills County',
        systemSize: '25kW',
        installDate: '2023-05'
      },
      {
        image: '/images/gallery/calgary-commercial-1.jpg',
        alt: 'Commercial solar installation Calgary business park',
        location: 'Southeast Calgary',
        systemSize: '75kW',
        installDate: '2023-07'
      }
    ],
    
    nearbyAreas: ['edmonton', 'red-deer', 'lethbridge', 'medicine-hat']
  },

  {
    slug: 'mississauga',
    city: 'Mississauga',
    province: 'Ontario',
    region: 'Greater Toronto Area',
    displayName: 'Mississauga, Ontario',
    metaTitle: 'Solar Panel Installation Mississauga | Solar Energy Solutions Ontario',
    metaDescription: 'Professional solar panel installation in Mississauga, Ontario. Reduce energy costs with premium solar systems. Free quotes, 25-year warranty, certified installers.',
    keywords: [
      'solar panels Mississauga',
      'solar installation Mississauga',
      'solar energy Mississauga Ontario',
      'Mississauga solar company',
      'residential solar Mississauga',
      'commercial solar Mississauga',
      'Tesla Powerwall Mississauga',
      'solar incentives Ontario'
    ],
    
    coordinates: {
      lat: 43.5890,
      lng: -79.6441
    },
    population: 721599,
    averageHomeValue: 950000,
    solarPotential: 'Very Good',
    
    hero: {
      title: 'Solar Panel Installation in Mississauga',
      subtitle: 'Join Mississauga homeowners and businesses saving money with clean solar energy. Professional installation with 25-year warranty.',
      backgroundImage: '/images/areas/mississauga-skyline.jpg'
    },
    
    localInfo: {
      climate: 'Continental climate with cold winters and warm, humid summers',
      sunHours: 4.1,
      incentives: [
        'Federal Solar Tax Credit',
        'Ontario Net Metering Program',
        'Canada Greener Homes Grant',
        'Municipal rebates available'
      ],
      electricityRate: 13.5
    },
    
    testimonials: [
      {
        name: 'Robert Kumar',
        location: 'Port Credit',
        quote: 'Our Mississauga home has been solar-powered for two years now. The savings are incredible and our system works perfectly through all seasons.',
        rating: 5,
        installDate: '2022-04-12',
        systemSize: '7.5kW',
        savings: '$2,100/year'
      },
      {
        name: 'Angela Smith',
        location: 'Streetsville',
        quote: 'Living in Mississauga, we wanted the best solar system available. The installation was seamless and the results exceeded our expectations.',
        rating: 5,
        installDate: '2023-03-18',
        systemSize: '9.2kW',
        savings: '$2,650/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/mississauga-residential-1.jpg',
        alt: 'Solar panel installation on Mississauga home in Port Credit',
        location: 'Port Credit',
        systemSize: '7.5kW',
        installDate: '2022-04'
      },
      {
        image: '/images/gallery/mississauga-townhouse-1.jpg',
        alt: 'Solar panels on Mississauga townhouse complex',
        location: 'Streetsville',
        systemSize: '9.2kW',
        installDate: '2023-03'
      },
      {
        image: '/images/gallery/mississauga-commercial-1.jpg',
        alt: 'Commercial solar installation Mississauga business park',
        location: 'Airport Corporate Centre',
        systemSize: '35kW',
        installDate: '2023-06'
      }
    ],
    
    nearbyAreas: ['toronto', 'brampton', 'oakville', 'burlington']
  },

  {
    slug: 'edmonton',
    city: 'Edmonton',
    province: 'Alberta',
    region: 'Central Alberta',
    displayName: 'Edmonton, Alberta',
    metaTitle: 'Solar Panel Installation Edmonton AB | Alberta Solar Energy',
    metaDescription: 'Professional solar installation in Edmonton, Alberta. Take advantage of Alberta\'s excellent solar potential and energy incentives. Expert installation team.',
    keywords: [
      'solar panels Edmonton',
      'Edmonton solar installation',
      'Alberta solar company',
      'solar energy Edmonton AB',
      'residential solar Edmonton',
      'commercial solar Alberta',
      'Edmonton solar incentives',
      'Alberta net metering'
    ],
    
    coordinates: {
      lat: 53.5461,
      lng: -113.4938
    },
    population: 981280,
    averageHomeValue: 410000,
    solarPotential: 'Excellent',
    
    hero: {
      title: 'Edmonton Solar Panel Installation',
      subtitle: 'Edmonton enjoys some of Canada\'s best solar conditions. Join homeowners and businesses across the capital region saving with solar energy.',
      backgroundImage: '/images/areas/edmonton-skyline.jpg'
    },
    
    localInfo: {
      climate: 'Continental climate with long, cold winters and warm summers, excellent sunshine',
      sunHours: 5.1,
      incentives: [
        'Alberta Net Billing Program',
        'Federal Solar Tax Credit',
        'Canada Greener Homes Grant',
        'Municipal Property Tax Exemptions',
        'Alberta Solar Rebates'
      ],
      electricityRate: 7.2
    },
    
    testimonials: [
      {
        name: 'Tom Anderson',
        location: 'Sherwood Park',
        quote: 'Edmonton\'s long summer days make our solar system incredibly productive. Even in winter, we generate substantial power and our bills are minimal.',
        rating: 5,
        installDate: '2023-05-20',
        systemSize: '10.5kW',
        savings: '$3,100/year'
      },
      {
        name: 'Maria Gonzalez',
        location: 'St. Albert',
        quote: 'As Edmonton residents, we knew about Alberta\'s solar potential. Our system has exceeded every expectation and the installation was flawless.',
        rating: 5,
        installDate: '2023-07-15',
        systemSize: '8.8kW',
        savings: '$2,800/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/edmonton-residential-1.jpg',
        alt: 'Solar panel installation on Edmonton home',
        location: 'Sherwood Park',
        systemSize: '10.5kW',
        installDate: '2023-05'
      },
      {
        image: '/images/gallery/edmonton-acreage-1.jpg',
        alt: 'Large solar array on Edmonton area acreage',
        location: 'Sturgeon County',
        systemSize: '18kW',
        installDate: '2023-06'
      },
      {
        image: '/images/gallery/edmonton-commercial-1.jpg',
        alt: 'Commercial solar installation Edmonton warehouse',
        location: 'Nisku Industrial',
        systemSize: '85kW',
        installDate: '2023-07'
      }
    ],
    
    nearbyAreas: ['calgary', 'red-deer', 'sherwood-park', 'st-albert']
  },

  {
    slug: 'ottawa',
    city: 'Ottawa',
    province: 'Ontario',
    region: 'National Capital Region',
    displayName: 'Ottawa, Ontario',
    metaTitle: 'Solar Panel Installation Ottawa | Solar Energy Solutions Ontario',
    metaDescription: 'Professional solar panel installation in Ottawa, Ontario. Canada\'s capital city solar solutions. Reduce energy costs with premium solar systems.',
    keywords: [
      'solar panels Ottawa',
      'solar installation Ottawa',
      'solar energy Ottawa Ontario',
      'Ottawa solar company',
      'residential solar Ottawa',
      'commercial solar Ottawa',
      'Tesla Powerwall Ottawa',
      'solar incentives Ontario'
    ],
    
    coordinates: {
      lat: 45.4215,
      lng: -75.6972
    },
    population: 994837,
    averageHomeValue: 650000,
    solarPotential: 'Good',
    
    hero: {
      title: 'Solar Panel Installation in Ottawa',
      subtitle: 'Canada\'s capital embraces clean energy. Join Ottawa homeowners and businesses reducing costs with professional solar installation.',
      backgroundImage: '/images/areas/ottawa-parliament.jpg'
    },
    
    localInfo: {
      climate: 'Humid continental climate with cold winters and warm summers',
      sunHours: 4.0,
      incentives: [
        'Federal Solar Tax Credit',
        'Ontario Net Metering Program',
        'Canada Greener Homes Grant',
        'Municipal rebates available',
        'Hydro Ottawa Programs'
      ],
      electricityRate: 13.5
    },
    
    testimonials: [
      {
        name: 'Dr. Elizabeth Reid',
        location: 'Kanata',
        quote: 'Our Ottawa home has been solar-powered for three years. The system works beautifully through our harsh winters and productive summers.',
        rating: 5,
        installDate: '2021-06-10',
        systemSize: '8.2kW',
        savings: '$2,200/year'
      },
      {
        name: 'François Dubois',
        location: 'Orléans',
        quote: 'En tant que résidents d\'Ottawa, nous voulions la meilleure solution solaire. L\'installation était parfaite et les économies sont excellentes.',
        rating: 5,
        installDate: '2023-04-22',
        systemSize: '6.8kW',
        savings: '$1,950/year'
      }
    ],
    
    gallery: [
      {
        image: '/images/gallery/ottawa-residential-1.jpg',
        alt: 'Solar panel installation on Ottawa home in Kanata',
        location: 'Kanata',
        systemSize: '8.2kW',
        installDate: '2021-06'
      },
      {
        image: '/images/gallery/ottawa-heritage-1.jpg',
        alt: 'Solar panels on Ottawa heritage home',
        location: 'The Glebe',
        systemSize: '5.5kW',
        installDate: '2023-05'
      },
      {
        image: '/images/gallery/ottawa-government-1.jpg',
        alt: 'Solar installation on Ottawa government building',
        location: 'Downtown Ottawa',
        systemSize: '150kW',
        installDate: '2023-04'
      }
    ],
    
    nearbyAreas: ['gatineau', 'kanata', 'orleans', 'gloucester']
  },

  // Quebec Service Areas
  {
    slug: 'montreal',
    city: 'Montreal',
    province: 'Quebec',
    region: 'Greater Montreal Area',
    displayName: 'Montreal, Quebec',
    metaTitle: 'Installation Panneaux Solaires Montréal | Énergie Solaire Québec',
    metaDescription: 'Installation professionnelle de panneaux solaires à Montréal, Québec. Solutions d\'énergie solaire pour résidentiel et commercial.',
    keywords: ['panneaux solaires Montréal', 'énergie solaire Québec', 'installation solaire Montréal'],
    coordinates: { lat: 45.5017, lng: -73.5673 },
    population: 1780000,
    averageHomeValue: 450000,
    solarPotential: 'Good',
    hero: {
      title: 'Installation Panneaux Solaires à Montréal',
      subtitle: 'Solutions d\'énergie solaire pour les résidents et entreprises de Montréal.',
      backgroundImage: '/images/areas/montreal-skyline.jpg'
    },
    localInfo: {
      climate: 'Continental humid climate with cold winters',
      sunHours: 3.9,
      incentives: ['Rénoclimat Program', 'Federal Solar Tax Credit', 'Canada Greener Homes Grant'],
      electricityRate: 6.4
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['quebec-city', 'gatineau', 'laval']
  },

  {
    slug: 'quebec-city',
    city: 'Quebec City',
    province: 'Quebec',
    region: 'Quebec City Region',
    displayName: 'Quebec City, Quebec',
    metaTitle: 'Installation Panneaux Solaires Québec | Énergie Solaire',
    metaDescription: 'Installation professionnelle de panneaux solaires à Québec. Énergie renouvelable pour la capitale nationale.',
    keywords: ['panneaux solaires Québec', 'installation solaire Québec', 'énergie solaire'],
    coordinates: { lat: 46.8139, lng: -71.2080 },
    population: 540000,
    averageHomeValue: 320000,
    solarPotential: 'Good',
    hero: {
      title: 'Panneaux Solaires à Québec',
      subtitle: 'Solutions d\'énergie renouvelable pour la capitale.',
    },
    localInfo: {
      climate: 'Continental climate with snowy winters',
      sunHours: 3.8,
      incentives: ['Rénoclimat Program', 'Federal Solar Tax Credit'],
      electricityRate: 6.4
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['montreal', 'gatineau', 'trois-rivieres']
  },

  // British Columbia Service Areas
  {
    slug: 'victoria',
    city: 'Victoria',
    province: 'British Columbia',
    region: 'Vancouver Island',
    displayName: 'Victoria, British Columbia',
    metaTitle: 'Solar Panel Installation Victoria BC | Vancouver Island Solar',
    metaDescription: 'Professional solar installation in Victoria, BC. Island solar solutions with ocean views.',
    keywords: ['solar panels Victoria', 'Vancouver Island solar', 'Victoria BC solar'],
    coordinates: { lat: 48.4284, lng: -123.3656 },
    population: 367000,
    averageHomeValue: 850000,
    solarPotential: 'Good',
    hero: {
      title: 'Solar Energy Solutions in Victoria',
      subtitle: 'Beautiful Vancouver Island solar installations.',
    },
    localInfo: {
      climate: 'Oceanic climate, mildest in Canada',
      sunHours: 4.1,
      incentives: ['BC Hydro Net Metering', 'CleanBC Rebates'],
      electricityRate: 9.8
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['vancouver', 'nanaimo', 'duncan']
  },

  {
    slug: 'burnaby',
    city: 'Burnaby',
    province: 'British Columbia',
    region: 'Lower Mainland',
    displayName: 'Burnaby, British Columbia',
    metaTitle: 'Solar Panel Installation Burnaby BC | Metro Vancouver Solar',
    metaDescription: 'Expert solar panel installation in Burnaby, BC. Clean energy solutions for Metro Vancouver.',
    keywords: ['solar panels Burnaby', 'Burnaby solar installation', 'Metro Vancouver solar'],
    coordinates: { lat: 49.2488, lng: -122.9805 },
    population: 249125,
    averageHomeValue: 1100000,
    solarPotential: 'Good',
    hero: {
      title: 'Solar Installation in Burnaby',
      subtitle: 'Metro Vancouver solar energy solutions.',
    },
    localInfo: {
      climate: 'Oceanic climate with mild wet winters',
      sunHours: 3.8,
      incentives: ['BC Hydro Net Metering', 'CleanBC Rebates'],
      electricityRate: 9.8
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['vancouver', 'richmond', 'surrey']
  },

  // Saskatchewan Service Areas
  {
    slug: 'saskatoon',
    city: 'Saskatoon',
    province: 'Saskatchewan',
    region: 'Central Saskatchewan',
    displayName: 'Saskatoon, Saskatchewan',
    metaTitle: 'Solar Panel Installation Saskatoon SK | Saskatchewan Solar',
    metaDescription: 'Professional solar installation in Saskatoon, Saskatchewan. Prairie province solar solutions.',
    keywords: ['solar panels Saskatoon', 'Saskatchewan solar', 'prairie solar installation'],
    coordinates: { lat: 52.1579, lng: -106.6702 },
    population: 317000,
    averageHomeValue: 350000,
    solarPotential: 'Excellent',
    hero: {
      title: 'Saskatoon Solar Panel Installation',
      subtitle: 'Saskatchewan prairie solar energy solutions.',
    },
    localInfo: {
      climate: 'Continental climate with cold winters and warm summers',
      sunHours: 4.9,
      incentives: ['SaskPower Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 14.2
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['regina', 'prince-albert', 'yorkton']
  },

  {
    slug: 'regina',
    city: 'Regina',
    province: 'Saskatchewan',
    region: 'Southern Saskatchewan',
    displayName: 'Regina, Saskatchewan',
    metaTitle: 'Solar Panel Installation Regina SK | Saskatchewan Solar Energy',
    metaDescription: 'Expert solar panel installation in Regina, Saskatchewan. Capital city solar solutions.',
    keywords: ['solar panels Regina', 'Regina solar installation', 'Saskatchewan capital solar'],
    coordinates: { lat: 50.4452, lng: -104.6189 },
    population: 236000,
    averageHomeValue: 310000,
    solarPotential: 'Excellent',
    hero: {
      title: 'Regina Solar Panel Installation',
      subtitle: 'Saskatchewan capital solar energy solutions.',
    },
    localInfo: {
      climate: 'Semi-arid continental climate with abundant sunshine',
      sunHours: 5.0,
      incentives: ['SaskPower Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 14.2
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['saskatoon', 'moose-jaw', 'yorkton']
  },

  // Manitoba Service Areas
  {
    slug: 'winnipeg',
    city: 'Winnipeg',
    province: 'Manitoba',
    region: 'Central Manitoba',
    displayName: 'Winnipeg, Manitoba',
    metaTitle: 'Solar Panel Installation Winnipeg MB | Manitoba Solar Energy',
    metaDescription: 'Professional solar installation in Winnipeg, Manitoba. Prairie province solar solutions.',
    keywords: ['solar panels Winnipeg', 'Manitoba solar', 'Winnipeg solar installation'],
    coordinates: { lat: 49.8951, lng: -97.1384 },
    population: 749000,
    averageHomeValue: 330000,
    solarPotential: 'Very Good',
    hero: {
      title: 'Winnipeg Solar Panel Installation',
      subtitle: 'Manitoba solar energy solutions for the prairies.',
    },
    localInfo: {
      climate: 'Continental climate with cold winters and warm summers',
      sunHours: 4.8,
      incentives: ['Manitoba Hydro Net Billing', 'Federal Solar Tax Credit'],
      electricityRate: 9.1
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['brandon', 'steinbach', 'portage-la-prairie']
  },

  // New Brunswick Service Areas
  {
    slug: 'fredericton',
    city: 'Fredericton',
    province: 'New Brunswick',
    region: 'Central New Brunswick',
    displayName: 'Fredericton, New Brunswick',
    metaTitle: 'Solar Panel Installation Fredericton NB | Maritime Solar Energy',
    metaDescription: 'Professional solar installation in Fredericton, New Brunswick. Maritime solar solutions.',
    keywords: ['solar panels Fredericton', 'New Brunswick solar', 'maritime solar'],
    coordinates: { lat: 45.9636, lng: -66.6431 },
    population: 63000,
    averageHomeValue: 220000,
    solarPotential: 'Good',
    hero: {
      title: 'Fredericton Solar Panel Installation',
      subtitle: 'New Brunswick capital solar energy solutions.',
    },
    localInfo: {
      climate: 'Humid continental climate',
      sunHours: 3.7,
      incentives: ['NB Power Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 12.8
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['saint-john', 'moncton', 'bathurst']
  },

  {
    slug: 'saint-john',
    city: 'Saint John',
    province: 'New Brunswick',
    region: 'Southern New Brunswick',
    displayName: 'Saint John, New Brunswick',
    metaTitle: 'Solar Panel Installation Saint John NB | Bay of Fundy Solar',
    metaDescription: 'Expert solar installation in Saint John, New Brunswick. Bay of Fundy solar solutions.',
    keywords: ['solar panels Saint John', 'Bay of Fundy solar', 'Saint John NB solar'],
    coordinates: { lat: 45.2733, lng: -66.0633 },
    population: 70000,
    averageHomeValue: 180000,
    solarPotential: 'Good',
    hero: {
      title: 'Saint John Solar Installation',
      subtitle: 'Bay of Fundy solar energy solutions.',
    },
    localInfo: {
      climate: 'Humid continental with maritime influence',
      sunHours: 3.6,
      incentives: ['NB Power Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 12.8
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['fredericton', 'moncton', 'miramichi']
  },

  // Nova Scotia Service Areas
  {
    slug: 'halifax',
    city: 'Halifax',
    province: 'Nova Scotia',
    region: 'Halifax Regional Municipality',
    displayName: 'Halifax, Nova Scotia',
    metaTitle: 'Solar Panel Installation Halifax NS | Atlantic Canada Solar',
    metaDescription: 'Professional solar installation in Halifax, Nova Scotia. Atlantic Canada solar solutions.',
    keywords: ['solar panels Halifax', 'Nova Scotia solar', 'Atlantic Canada solar'],
    coordinates: { lat: 44.6488, lng: -63.5752 },
    population: 440000,
    averageHomeValue: 400000,
    solarPotential: 'Good',
    hero: {
      title: 'Halifax Solar Panel Installation',
      subtitle: 'Atlantic Canada solar energy solutions.',
    },
    localInfo: {
      climate: 'Humid continental with maritime influence',
      sunHours: 3.9,
      incentives: ['Nova Scotia Power Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 16.8
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['dartmouth', 'bedford', 'sackville']
  },

  // Prince Edward Island Service Areas
  {
    slug: 'charlottetown',
    city: 'Charlottetown',
    province: 'Prince Edward Island',
    region: 'Queens County',
    displayName: 'Charlottetown, Prince Edward Island',
    metaTitle: 'Solar Panel Installation Charlottetown PEI | Island Solar Energy',
    metaDescription: 'Expert solar installation in Charlottetown, PEI. Island solar solutions for clean energy.',
    keywords: ['solar panels Charlottetown', 'PEI solar', 'Prince Edward Island solar'],
    coordinates: { lat: 46.2382, lng: -63.1311 },
    population: 40000,
    averageHomeValue: 280000,
    solarPotential: 'Good',
    hero: {
      title: 'Charlottetown Solar Installation',
      subtitle: 'Prince Edward Island solar energy solutions.',
    },
    localInfo: {
      climate: 'Humid continental with maritime influence',
      sunHours: 3.8,
      incentives: ['Maritime Electric Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 15.2
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['summerside', 'montague', 'souris']
  },

  // Newfoundland and Labrador Service Areas
  {
    slug: 'st-johns',
    city: 'St. John\'s',
    province: 'Newfoundland and Labrador',
    region: 'Avalon Peninsula',
    displayName: 'St. John\'s, Newfoundland and Labrador',
    metaTitle: 'Solar Panel Installation St. John\'s NL | Newfoundland Solar',
    metaDescription: 'Professional solar installation in St. John\'s, Newfoundland. Atlantic Canada\'s easternmost solar solutions.',
    keywords: ['solar panels St. Johns', 'Newfoundland solar', 'NL solar installation'],
    coordinates: { lat: 47.5615, lng: -52.7126 },
    population: 114000,
    averageHomeValue: 300000,
    solarPotential: 'Fair',
    hero: {
      title: 'St. John\'s Solar Installation',
      subtitle: 'Newfoundland and Labrador solar energy solutions.',
    },
    localInfo: {
      climate: 'Humid continental with strong maritime influence',
      sunHours: 3.2,
      incentives: ['Newfoundland Power Net Metering', 'Federal Solar Tax Credit'],
      electricityRate: 13.9
    },
    testimonials: [],
    gallery: [],
    nearbyAreas: ['mount-pearl', 'conception-bay-south', 'paradise']
  }
];

// Helper functions
export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find(area => area.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return serviceAreas.map(area => area.slug);
}

export function getServiceAreasByProvince(province: string): ServiceArea[] {
  return serviceAreas.filter(area => area.province === province);
}

export function getNearbyServiceAreas(slug: string): ServiceArea[] {
  const currentArea = getServiceAreaBySlug(slug);
  if (!currentArea) return [];
  
  return currentArea.nearbyAreas
    .map(nearbySlug => getServiceAreaBySlug(nearbySlug))
    .filter((area): area is ServiceArea => area !== undefined);
}