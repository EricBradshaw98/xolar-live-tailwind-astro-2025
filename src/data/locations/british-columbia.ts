export interface LocationData {
  averageSavings: string;
  avgElectricityRate: string;
  primaryUtility: string;
  climate: string;
  solarPotential: string;
  provincialIncentives: string[];
  localIncentives?: string[];
  population?: string;
  avgSystemSize?: string;
  paybackPeriod?: string;
}

export interface City {
  name: string;
  slug: string;
  areasServed: string[];
  data: LocationData;
}

export interface Province {
  name: string;
  code: string;
  slug: string;
  cities: City[];
  data: LocationData;
}

export const britishColumbiaData: Province = {
  name: 'British Columbia',
  code: 'BC',
  slug: 'british-columbia',
  data: {
    averageSavings: '$1,800/year',
    avgElectricityRate: '$0.14/kWh',
    primaryUtility: 'BC Hydro',
    climate: 'Mild coastal and varied interior climates',
    solarPotential: 'Good to Excellent - 950-1,250 kWh/kW annually',
    provincialIncentives: [
      'BC Hydro Net Metering Program',
      'PST Exemption on Solar Equipment',
      'Federal Canada Greener Homes Grant (up to $5,000)',
      'CleanBC Rebate Programs',
    ],
    population: '5.2 million',
    avgSystemSize: '7-9 kW',
    paybackPeriod: '10-14 years',
  },
  cities: [
    {
      name: 'Vancouver',
      slug: 'vancouver',
      areasServed: [
        'Downtown Vancouver',
        'West End',
        'Kitsilano',
        'Mount Pleasant',
        'East Vancouver',
        'West Side',
      ],
      data: {
        averageSavings: '$1,750/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic climate with wet winters and dry summers',
        solarPotential: 'Good - 950 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'City of Vancouver Green Building Incentive',
          'Metro Vancouver Solar Ready Program',
        ],
        population: '675,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '12-14 years',
      },
    },
    {
      name: 'Victoria',
      slug: 'victoria',
      areasServed: [
        'Downtown Victoria',
        'James Bay',
        'Fairfield',
        'Fernwood',
        'Oaklands',
        'Rockland',
      ],
      data: {
        averageSavings: '$1,850/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Warmest climate in Canada with mild, wet winters',
        solarPotential: 'Very Good - 1,100 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'City of Victoria Climate Action Rebate',
          'Capital Region Solar Initiative',
        ],
        population: '92,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Surrey',
      slug: 'surrey',
      areasServed: [
        'City Centre',
        'Whalley',
        'Guildford',
        'Fleetwood',
        'Cloverdale',
        'South Surrey',
      ],
      data: {
        averageSavings: '$1,820/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic climate with more sunshine than Vancouver',
        solarPotential: 'Good - 1,000 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'City of Surrey Green Energy Program',
          'Metro Vancouver Solar Initiative',
        ],
        population: '568,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Burnaby',
      slug: 'burnaby',
      areasServed: [
        'Metrotown',
        'Brentwood',
        'Lougheed',
        'Deer Lake',
        'Capitol Hill',
        'South Burnaby',
      ],
      data: {
        averageSavings: '$1,780/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild coastal climate with moderate rainfall',
        solarPotential: 'Good - 970 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Burnaby Solar Ready Program',
          'Metro Vancouver Green Building Initiative',
        ],
        population: '249,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '12-14 years',
      },
    },
    {
      name: 'Richmond',
      slug: 'richmond',
      areasServed: [
        'Richmond Centre',
        'Steveston',
        'Brighouse',
        'City Centre',
        'Hamilton',
        'Thompson',
      ],
      data: {
        averageSavings: '$1,800/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild coastal climate with less rain than Vancouver',
        solarPotential: 'Good - 990 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Richmond Solar Incentive Program',
          'Metro Vancouver Solar Initiative',
        ],
        population: '209,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '12-14 years',
      },
    },
    {
      name: 'Kelowna',
      slug: 'kelowna',
      areasServed: [
        'Downtown Kelowna',
        'Rutland',
        'Glenmore',
        'Dilworth',
        'Mission',
        'South Pandosy',
      ],
      data: {
        averageSavings: '$2,100/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'FortisBC',
        climate: 'Semi-arid climate with hot, dry summers',
        solarPotential: 'Excellent - 1,250 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Okanagan Solar Initiative',
          'FortisBC Renewable Energy Program',
        ],
        population: '144,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '9-11 years',
      },
    },
    {
      name: 'Abbotsford',
      slug: 'abbotsford',
      areasServed: [
        'Downtown Abbotsford',
        'West Abbotsford',
        'East Abbotsford',
        'Clearbrook',
        'Matsqui',
        'Sumas Prairie',
      ],
      data: {
        averageSavings: '$1,850/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild climate with warm, dry summers',
        solarPotential: 'Good - 1,050 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Abbotsford Solar Program',
          'Fraser Valley Solar Initiative',
        ],
        population: '153,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Coquitlam',
      slug: 'coquitlam',
      areasServed: [
        'Town Centre',
        'Burquitlam',
        'Maillardville',
        'Westwood Plateau',
        'Burke Mountain',
        'Austin Heights',
      ],
      data: {
        averageSavings: '$1,790/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic climate with moderate rainfall',
        solarPotential: 'Good - 980 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Tri-Cities Solar Program',
          'Metro Vancouver Green Initiative',
        ],
        population: '148,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-14 years',
      },
    },
    {
      name: 'Langley',
      slug: 'langley',
      areasServed: [
        'Willoughby',
        'Walnut Grove',
        'Fort Langley',
        'Murrayville',
        'Brookswood',
        'Aldergrove',
      ],
      data: {
        averageSavings: '$1,870/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild with warm, dry summers',
        solarPotential: 'Good - 1,020 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Langley Solar Initiative',
          'Fraser Valley Green Energy Program',
        ],
        population: '132,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Kamloops',
      slug: 'kamloops',
      areasServed: [
        'Downtown Kamloops',
        'North Shore',
        'South Shore',
        'Brocklehurst',
        'Sahali',
        'Valleyview',
      ],
      data: {
        averageSavings: '$2,050/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Semi-arid with hot, dry summers and cold winters',
        solarPotential: 'Excellent - 1,200 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Kamloops Solar Program',
          'Interior BC Solar Initiative',
        ],
        population: '97,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '10-12 years',
      },
    },
    {
      name: 'Nanaimo',
      slug: 'nanaimo',
      areasServed: [
        'Downtown Nanaimo',
        'North Nanaimo',
        'South Nanaimo',
        'Departure Bay',
        'Harewood',
        'Lantzville',
      ],
      data: {
        averageSavings: '$1,880/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic climate with less rain than Vancouver',
        solarPotential: 'Very Good - 1,080 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Vancouver Island Solar Initiative',
          'Nanaimo Green Energy Program',
        ],
        population: '100,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Prince George',
      slug: 'prince-george',
      areasServed: [
        'Downtown Prince George',
        'College Heights',
        'Hart Highway',
        'Westwood',
        'Van Bow',
        'Spruceland',
      ],
      data: {
        averageSavings: '$1,950/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Continental with cold winters and warm summers',
        solarPotential: 'Good - 1,050 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Northern BC Solar Grant',
          'Prince George Green Energy Initiative',
        ],
        population: '76,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Chilliwack',
      slug: 'chilliwack',
      areasServed: [
        'Downtown Chilliwack',
        'Sardis',
        'Promontory',
        'Rosedale',
        'Yarrow',
        'Cultus Lake',
      ],
      data: {
        averageSavings: '$1,900/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild with warm, dry summers',
        solarPotential: 'Good - 1,070 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Fraser Valley Solar Initiative',
          'Chilliwack Green Energy Program',
        ],
        population: '93,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Vernon',
      slug: 'vernon',
      areasServed: [
        'Downtown Vernon',
        'East Hill',
        'Silver Star',
        'Okanagan Landing',
        'South Vernon',
        'Coldstream',
      ],
      data: {
        averageSavings: '$2,080/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'FortisBC',
        climate: 'Four seasons with hot, dry summers',
        solarPotential: 'Excellent - 1,230 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Okanagan Solar Initiative',
          'FortisBC Renewable Energy Program',
        ],
        population: '44,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '9-12 years',
      },
    },
    {
      name: 'Penticton',
      slug: 'penticton',
      areasServed: [
        'Downtown Penticton',
        'South Beach',
        'North Beach',
        'Valleyview',
        'Wiltse',
        'Parkway',
      ],
      data: {
        averageSavings: '$2,120/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'FortisBC',
        climate: 'Desert-like with hot, sunny summers',
        solarPotential: 'Excellent - 1,270 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Okanagan Solar Initiative',
          'FortisBC Renewable Energy Program',
          'South Okanagan Solar Grant',
        ],
        population: '37,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '9-11 years',
      },
    },
    {
      name: 'Campbell River',
      slug: 'campbell-river',
      areasServed: [
        'Downtown Campbell River',
        'Willow Point',
        'Campbellton',
        'Quinsam Heights',
        'Rockland',
        'Oyster Bay',
      ],
      data: {
        averageSavings: '$1,850/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic with moderate rainfall',
        solarPotential: 'Good - 1,000 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Vancouver Island Solar Initiative',
          'North Island Green Energy Program',
        ],
        population: '36,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'West Kelowna',
      slug: 'west-kelowna',
      areasServed: [
        'Westbank',
        'Lakeview Heights',
        'Rose Valley',
        'Glenrosa',
        'Smith Creek',
        'West Kelowna Estates',
      ],
      data: {
        averageSavings: '$2,090/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'FortisBC',
        climate: 'Semi-arid with hot, dry summers',
        solarPotential: 'Excellent - 1,245 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Okanagan Solar Initiative',
          'FortisBC Renewable Energy Program',
        ],
        population: '36,000',
        avgSystemSize: '8 kW',
        paybackPeriod: '9-11 years',
      },
    },
    {
      name: 'North Vancouver',
      slug: 'north-vancouver',
      areasServed: [
        'Lower Lonsdale',
        'Central Lonsdale',
        'Upper Lonsdale',
        'Lynn Valley',
        'Deep Cove',
        'Edgemont',
      ],
      data: {
        averageSavings: '$1,780/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic with higher rainfall than Vancouver',
        solarPotential: 'Good - 960 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'North Shore Solar Initiative',
          'Metro Vancouver Green Building Program',
        ],
        population: '88,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '12-14 years',
      },
    },
    {
      name: 'Delta',
      slug: 'delta',
      areasServed: [
        'Ladner',
        'Tsawwassen',
        'North Delta',
        'Boundary Beach',
        'Beach Grove',
        'English Bluff',
      ],
      data: {
        averageSavings: '$1,820/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild coastal climate with moderate rainfall',
        solarPotential: 'Good - 1,010 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Delta Solar Initiative',
          'Metro Vancouver Green Energy Program',
        ],
        population: '108,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
    {
      name: 'Courtenay',
      slug: 'courtenay',
      areasServed: [
        'Downtown Courtenay',
        'Crown Isle',
        'North Courtenay',
        'Comox Valley',
        'Royston',
        'Black Creek',
      ],
      data: {
        averageSavings: '$1,870/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'BC Hydro',
        climate: 'Mild oceanic with warm, dry summers',
        solarPotential: 'Good - 1,040 kWh/kW annually',
        provincialIncentives: [
          'BC Hydro Net Metering Program',
          'Federal Canada Greener Homes Grant',
          'PST Exemption on Solar Equipment',
        ],
        localIncentives: [
          'Vancouver Island Solar Initiative',
          'Comox Valley Green Energy Program',
        ],
        population: '27,000',
        avgSystemSize: '7 kW',
        paybackPeriod: '11-13 years',
      },
    },
  ],
};

export default britishColumbiaData;
