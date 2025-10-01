import type { Province } from './types';

export const princeEdwardIslandData: Province = {
  name: 'Prince Edward Island',
  code: 'PE',
  slug: 'prince-edward-island',
  data: {
    averageSavings: '$1,800/year',
    avgElectricityRate: '$0.17/kWh',
    primaryUtility: 'Maritime Electric',
    climate: 'Maritime climate with moderate sunshine',
    solarPotential: 'Good - 1,100-1,150 kWh/kW annually',
    provincialIncentives: [
      'Maritime Electric Net Metering Program',
      'Federal Canada Greener Homes Grant (up to $5,000)',
      'Federal Canada Greener Homes Loan (up to $40,000)',
      'PEI Home Energy Loan Program',
      'EfficiencyPEI Solar Rebates',
    ],
  },
  cities: [
    {
      name: 'Charlottetown',
      slug: 'charlottetown',
      areasServed: [
        'Downtown Charlottetown',
        'Brighton',
        'Sherwood',
        'West Royalty',
        'East Royalty',
        'Parkdale',
        'Winsloe',
        'Cornwall',
        'Stratford',
      ],
      data: {
        averageSavings: '$1,850/year',
        avgElectricityRate: '$0.17/kWh',
        primaryUtility: 'Maritime Electric',
        climate: 'Gulf of St. Lawrence maritime climate',
        solarPotential: 'Good - 1,140 kWh/kW annually',
        localIncentives: [
          'Maritime Electric Net Metering',
          'Federal Canada Greener Homes Grant (up to $5,000)',
          'EfficiencyPEI Solar Rebates',
          'City of Charlottetown Green Building Program',
        ],
      },
    },
    {
      name: 'Summerside',
      slug: 'summerside',
      areasServed: [
        'Downtown Summerside',
        'St. Eleanors',
        'Wilmot',
        'Central Bedeque',
        'Miscouche',
      ],
      data: {
        averageSavings: '$1,800/year',
        avgElectricityRate: '$0.17/kWh',
        primaryUtility: 'Summerside Electric (Municipal)',
        climate: 'Western PEI with good solar access',
        solarPotential: 'Good - 1,150 kWh/kW annually',
        localIncentives: [
          'Summerside Electric Net Metering',
          'Federal Canada Greener Homes Grant (up to $5,000)',
          'EfficiencyPEI Solar Rebates',
          'Summerside Solar City Initiative',
        ],
      },
    },
  ],
};
