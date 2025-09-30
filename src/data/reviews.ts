export interface Review {
  name: string;
  rating: number;
  reviewText: string;
  date: string;
  location?: string;
  verified?: boolean;
  system?: string;
  savings?: string;
}

export const reviews: Review[] = [
  {
    name: 'Michael Thompson',
    rating: 5,
    reviewText:
      "Xolar exceeded our expectations from start to finish. The installation was clean, professional, and completed on schedule. We're already seeing significant savings on our electricity bills and couldn't be happier with the quality of work.",
    date: '2024-08-15',
    location: 'Toronto, ON',
    verified: true,
    system: '12kW Residential Solar + Tesla Powerwall',
    savings: '$2,400/year',
  },
  {
    name: 'Sarah Mitchell',
    rating: 5,
    reviewText:
      'The Xolar team was incredibly knowledgeable and walked us through every step of the process. They handled all the permits and paperwork, making the entire experience seamless. Our energy bills are now practically zero!',
    date: '2024-07-22',
    location: 'Vancouver, BC',
    verified: true,
    system: '8kW Solar System',
    savings: '$1,800/year',
  },
  {
    name: 'David Chen',
    rating: 5,
    reviewText:
      'Outstanding service and exceptional quality. The installation crew was professional, courteous, and cleaned up perfectly after completion. The monitoring app lets me track my energy production in real-time. Highly recommended!',
    date: '2024-08-03',
    location: 'Calgary, AB',
    verified: true,
    system: '15kW Commercial Solar',
    savings: '$5,200/year',
  },
  {
    name: 'Jennifer Adams',
    rating: 5,
    reviewText:
      "Best investment we've made for our home. The solar panels look great and perform even better than expected. Xolar's customer service has been excellent, and they continue to monitor our system's performance proactively.",
    date: '2024-07-10',
    location: 'Ottawa, ON',
    verified: true,
    system: '10kW Solar + Heat Pump Package',
    savings: '$3,200/year',
  },
  {
    name: 'Robert Williams',
    rating: 5,
    reviewText:
      "From the initial consultation to final activation, Xolar delivered on every promise. The sales team was honest about expectations, and the installation exceeded those expectations. We're saving more than projected!",
    date: '2024-06-28',
    location: 'Edmonton, AB',
    verified: true,
    system: '14kW Residential Solar',
    savings: '$2,800/year',
  },
  {
    name: 'Lisa Rodriguez',
    rating: 5,
    reviewText:
      'Professional, efficient, and transparent throughout the entire process. The Xolar team answered all our questions and concerns promptly. Our solar system has been performing flawlessly for months now.',
    date: '2024-06-15',
    location: 'Winnipeg, MB',
    verified: true,
    system: '9kW Solar System',
    savings: '$2,100/year',
  },
  {
    name: 'James Park',
    rating: 5,
    reviewText:
      'Excellent work by the Xolar team. They were punctual, professional, and meticulous in their installation. The system looks fantastic and is generating more power than we anticipated. Very pleased with our choice.',
    date: '2024-08-28',
    location: 'Mississauga, ON',
    verified: true,
    system: '11kW Solar + Tesla Powerwall',
    savings: '$2,600/year',
  },
  {
    name: 'Amanda Foster',
    rating: 5,
    reviewText:
      "Couldn't be happier with our solar installation. The Xolar team was knowledgeable, professional, and completed the work exactly as promised. Our electric bills have dropped dramatically, and the system looks great on our roof.",
    date: '2024-05-20',
    location: 'Halifax, NS',
    verified: true,
    system: '7kW Residential Solar',
    savings: '$1,900/year',
  },
  {
    name: 'Mark Johnson',
    rating: 5,
    reviewText:
      'Top-notch service from consultation to installation. The Xolar team explained everything clearly and delivered exactly what was promised. The installation was completed efficiently with minimal disruption to our daily routine.',
    date: '2024-07-05',
    location: 'Victoria, BC',
    verified: true,
    system: '13kW Solar System',
    savings: '$2,900/year',
  },
  {
    name: 'Karen Lee',
    rating: 5,
    reviewText:
      "Outstanding experience with Xolar. The installation team was skilled, courteous, and detail-oriented. They took great care to ensure everything was perfect. We're thrilled with our solar system's performance and the ongoing support.",
    date: '2024-06-02',
    location: 'London, ON',
    verified: true,
    system: '16kW Commercial Solar',
    savings: '$4,800/year',
  },
  {
    name: 'Steve Morrison',
    rating: 5,
    reviewText:
      'Fantastic company to work with. From the initial assessment to final inspection, everything was handled professionally. The solar panels are generating more electricity than projected, and customer service continues to be excellent.',
    date: '2024-08-10',
    location: 'Regina, SK',
    verified: true,
    system: '12kW Farm Solar Installation',
    savings: '$3,400/year',
  },
  {
    name: 'Patricia Taylor',
    rating: 5,
    reviewText:
      "Xolar made going solar simple and stress-free. They handled all the paperwork, permits, and utility coordination. The installation was clean and professional, and we're already seeing the savings we were promised.",
    date: '2024-05-08',
    location: 'Kitchener, ON',
    verified: true,
    system: '8kW Residential Solar',
    savings: '$2,000/year',
  },
];

export function getTopReviews(count: number = 6): Review[] {
  return reviews
    .filter((review) => review.verified)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAverageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
}

export function getTotalReviews(): number {
  return reviews.length;
}

export function getReviewsByLocation(location: string): Review[] {
  return reviews.filter((review) =>
    review.location?.toLowerCase().includes(location.toLowerCase())
  );
}
