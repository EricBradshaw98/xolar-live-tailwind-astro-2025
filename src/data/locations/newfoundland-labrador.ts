import type { Province } from './types';

export const newfoundlandLabradorData: Province = {
  name: 'Newfoundland and Labrador',
  code: 'NL',
  slug: 'newfoundland-labrador',
  data: {
    averageSavings: '$1,700/year',
    avgElectricityRate: '$0.14/kWh',
    primaryUtility: 'Newfoundland Power / Newfoundland and Labrador Hydro',
    climate: 'Atlantic oceanic climate with cool summers',
    solarPotential: 'Moderate - 1,000-1,100 kWh/kW annually',
    provincialIncentives: [
      'Net Metering Program (pending expansion)',
      'Federal Canada Greener Homes Grant (up to $5,000)',
      'Federal Canada Greener Homes Loan (up to $40,000)',
      'Home Energy Savings Program',
      'TakeCharge Rebate Program',
    ],
  },
  cities: [
    {
      name: "St. John's",
      slug: 'st-johns',
      areasServed: [
        "Downtown St. John's",
        'The Battery',
        'Churchill Park',
        'Cowan Heights',
        'Kenmount Terrace',
        'Paradise',
        'Mount Pearl',
        'Portugal Cove-St. Philips',
        'Conception Bay South',
      ],
      data: {
        averageSavings: '$1,750/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'Newfoundland Power',
        climate: "North America's foggiest city, but with good summer sun",
        solarPotential: 'Moderate - 1,080 kWh/kW annually',
        localIncentives: [
          'Federal Canada Greener Homes Grant (up to $5,000)',
          'TakeCharge Rebate Program',
          "City of St. John's Green Building Initiative",
          'Home Energy Savings Program',
        ],
      },
    },
    {
      name: 'Mount Pearl',
      slug: 'mount-pearl',
      areasServed: [
        'Mount Pearl Centre',
        'Glendale',
        'Admiralty Woods',
        'Southlands',
        'Smallwood Crescent',
      ],
      data: {
        averageSavings: '$1,700/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'Newfoundland Power',
        climate: "Part of St. John's metro area",
        solarPotential: 'Moderate - 1,075 kWh/kW annually',
        localIncentives: [
          'Federal Canada Greener Homes Grant (up to $5,000)',
          'TakeCharge Rebate Program',
          'Mount Pearl Energy Efficiency Fund',
        ],
      },
    },
    {
      name: 'Corner Brook',
      slug: 'corner-brook',
      areasServed: [
        'Downtown Corner Brook',
        'Humber Heights',
        'Curling',
        'Mount Moriah',
        'Westside',
      ],
      data: {
        averageSavings: '$1,650/year',
        avgElectricityRate: '$0.14/kWh',
        primaryUtility: 'Newfoundland and Labrador Hydro',
        climate: 'West coast NL with Bay of Islands climate',
        solarPotential: 'Moderate - 1,050 kWh/kW annually',
        localIncentives: [
          'Federal Canada Greener Homes Grant (up to $5,000)',
          'TakeCharge Rebate Program',
          'Corner Brook Green Initiative',
        ],
      },
    },
  ],
};
