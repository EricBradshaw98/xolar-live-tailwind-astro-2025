export interface ServiceZone {
  id: string;
  name: string;
  province: string;
  status: 'active' | 'expanding' | 'planned';
  cities: string[];
  coverage: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bounds: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
  color: string;
  description: string;
}

export const serviceZones: ServiceZone[] = [
  {
    id: 'on-gta',
    name: 'Greater Toronto Area',
    province: 'Ontario',
    status: 'active',
    cities: ['Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan', 'Richmond Hill'],
    coverage: 'Greater Toronto Area and surrounding regions',
    coordinates: { lat: 43.7, lng: -79.4 },
    bounds: { north: 44.2, south: 43.2, east: -78.5, west: -80.3 },
    color: '#10B981',
    description:
      'Our largest service area covering the GTA with full residential and commercial solar services.',
  },
  {
    id: 'on-ottawa',
    name: 'Ottawa Region',
    province: 'Ontario',
    status: 'active',
    cities: ['Ottawa', 'Gatineau', 'Kanata', 'Orleans'],
    coverage: 'National Capital Region',
    coordinates: { lat: 45.4, lng: -75.7 },
    bounds: { north: 45.8, south: 45.0, east: -75.0, west: -76.4 },
    color: '#10B981',
    description:
      "Serving Canada's capital region with premium solar installations and battery storage.",
  },
  {
    id: 'on-hamilton',
    name: 'Hamilton-Niagara',
    province: 'Ontario',
    status: 'active',
    cities: ['Hamilton', 'St. Catharines', 'Niagara Falls', 'Burlington'],
    coverage: 'Hamilton and Niagara Peninsula',
    coordinates: { lat: 43.2, lng: -79.8 },
    bounds: { north: 43.6, south: 42.8, east: -78.8, west: -80.8 },
    color: '#10B981',
    description: 'Full-service solar solutions for the Golden Horseshoe region.',
  },
  {
    id: 'on-london',
    name: 'London-Windsor',
    province: 'Ontario',
    status: 'expanding',
    cities: ['London', 'Windsor', 'Kitchener', 'Waterloo', 'Cambridge'],
    coverage: 'Southwestern Ontario',
    coordinates: { lat: 42.9, lng: -81.2 },
    bounds: { north: 43.5, south: 42.3, east: -80.0, west: -83.0 },
    color: '#F59E0B',
    description:
      'Expanding our services across southwestern Ontario with new installations weekly.',
  },
  {
    id: 'bc-vancouver',
    name: 'Greater Vancouver',
    province: 'British Columbia',
    status: 'active',
    cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Coquitlam', 'Langley'],
    coverage: 'Lower Mainland',
    coordinates: { lat: 49.2, lng: -123.0 },
    bounds: { north: 49.6, south: 48.8, east: -122.0, west: -124.0 },
    color: '#10B981',
    description:
      'Comprehensive solar services for the Lower Mainland with focus on rain-optimized systems.',
  },
  {
    id: 'bc-victoria',
    name: 'Victoria Region',
    province: 'British Columbia',
    status: 'active',
    cities: ['Victoria', 'Saanich', 'Esquimalt', 'Oak Bay'],
    coverage: 'Southern Vancouver Island',
    coordinates: { lat: 48.4, lng: -123.4 },
    bounds: { north: 48.7, south: 48.1, east: -123.0, west: -123.8 },
    color: '#10B981',
    description: 'Island solar specialists serving Victoria and southern Vancouver Island.',
  },
  {
    id: 'ab-calgary',
    name: 'Calgary Region',
    province: 'Alberta',
    status: 'active',
    cities: ['Calgary', 'Airdrie', 'Cochrane', 'Chestermere'],
    coverage: 'Calgary Metropolitan Area',
    coordinates: { lat: 51.0, lng: -114.1 },
    bounds: { north: 51.4, south: 50.6, east: -113.5, west: -114.7 },
    color: '#10B981',
    description: "High-efficiency solar installations designed for Alberta's climate conditions.",
  },
  {
    id: 'ab-edmonton',
    name: 'Edmonton Region',
    province: 'Alberta',
    status: 'expanding',
    cities: ['Edmonton', 'St. Albert', 'Sherwood Park', 'Spruce Grove'],
    coverage: 'Edmonton Capital Region',
    coordinates: { lat: 53.5, lng: -113.5 },
    bounds: { north: 53.9, south: 53.1, east: -112.9, west: -114.1 },
    color: '#F59E0B',
    description: "Growing our presence in Alberta's capital with cold-climate solar solutions.",
  },
  {
    id: 'qc-montreal',
    name: 'Greater Montreal',
    province: 'Quebec',
    status: 'active',
    cities: ['Montreal', 'Laval', 'Longueuil', 'Brossard', 'Saint-Laurent'],
    coverage: 'Montreal Metropolitan Area',
    coordinates: { lat: 45.5, lng: -73.6 },
    bounds: { north: 45.9, south: 45.1, east: -73.0, west: -74.2 },
    color: '#10B981',
    description: "Bilingual solar services for Quebec's largest metropolitan area.",
  },
  {
    id: 'qc-quebec',
    name: 'Quebec City',
    province: 'Quebec',
    status: 'expanding',
    cities: ['Quebec City', 'Lévis', 'Sainte-Foy'],
    coverage: 'Quebec City Region',
    coordinates: { lat: 46.8, lng: -71.2 },
    bounds: { north: 47.2, south: 46.4, east: -70.8, west: -71.6 },
    color: '#F59E0B',
    description:
      'Expanding services in the historic capital with heritage-sensitive installations.',
  },
  {
    id: 'mb-winnipeg',
    name: 'Winnipeg Region',
    province: 'Manitoba',
    status: 'planned',
    cities: ['Winnipeg', 'Brandon', 'Steinbach'],
    coverage: 'Southern Manitoba',
    coordinates: { lat: 49.9, lng: -97.1 },
    bounds: { north: 50.3, south: 49.5, east: -96.5, west: -97.7 },
    color: '#6B7280',
    description: 'Coming soon: Prairie-optimized solar solutions for Manitoba residents.',
  },
  {
    id: 'sk-saskatoon',
    name: 'Saskatchewan Region',
    province: 'Saskatchewan',
    status: 'planned',
    cities: ['Saskatoon', 'Regina', 'Prince Albert'],
    coverage: 'Major Saskatchewan Cities',
    coordinates: { lat: 52.1, lng: -106.6 },
    bounds: { north: 52.5, south: 50.4, east: -104.6, west: -108.6 },
    color: '#6B7280',
    description: "Future expansion: High-efficiency systems for Saskatchewan's sunny climate.",
  },
];

export const provinceColors = {
  Ontario: '#10B981',
  'British Columbia': '#3B82F6',
  Alberta: '#F59E0B',
  Quebec: '#8B5CF6',
  Manitoba: '#EF4444',
  Saskatchewan: '#F97316',
};

export function getZonesByStatus(status: ServiceZone['status']): ServiceZone[] {
  return serviceZones.filter((zone) => zone.status === status);
}

export function getZonesByProvince(province: string): ServiceZone[] {
  return serviceZones.filter((zone) => zone.province === province);
}

export function getZoneById(id: string): ServiceZone | undefined {
  return serviceZones.find((zone) => zone.id === id);
}

// Canada bounds for map initialization
export const canadaBounds = {
  north: 70.0,
  south: 41.0,
  east: -52.0,
  west: -141.0,
};

export const canadaCenter = {
  lat: 56.1304,
  lng: -106.3468,
};
