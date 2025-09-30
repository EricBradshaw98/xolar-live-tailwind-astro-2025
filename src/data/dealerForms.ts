export interface DealerForm {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  category: 'residential' | 'commercial' | 'consultation' | 'emergency';
  icon: string;
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
  hero: {
    title: string;
    subtitle: string;
    benefits: string[];
  };
  formFields: {
    section: string;
    fields: {
      name: string;
      label: string;
      type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'number' | 'checkbox' | 'radio';
      placeholder?: string;
      required: boolean;
      options?: string[];
      validation?: string;
      description?: string;
    }[];
  }[];
  timeline: {
    title: string;
    description: string;
    steps: {
      title: string;
      timeframe: string;
      description: string;
    }[];
  };
  incentives: {
    title: string;
    items: {
      title: string;
      description: string;
      value: string;
    }[];
  };
}

export const dealerForms: DealerForm[] = [
  {
    slug: 'residential-lead',
    title: 'Residential Solar Lead Submission',
    shortTitle: 'Residential Lead',
    description:
      'Submit high-quality residential solar leads with detailed customer information and requirements.',
    metaDescription:
      'Professional residential solar lead submission portal for authorized Xolar dealers and partners.',
    category: 'residential',
    icon: 'home',
    color: {
      primary: 'blue',
      secondary: 'indigo',
      accent: 'green',
    },
    hero: {
      title: 'Residential Solar Lead Portal',
      subtitle:
        'Transform homeowner interest into confirmed installations with our streamlined lead management system.',
      benefits: [
        'Instant lead validation and scoring',
        'Real-time credit pre-qualification',
        'Automated follow-up scheduling',
        'Commission tracking dashboard',
      ],
    },
    formFields: [
      {
        section: 'Customer Information',
        fields: [
          {
            name: 'customerName',
            label: 'Customer Full Name',
            type: 'text',
            placeholder: 'John & Sarah Smith',
            required: true,
            validation: 'Must be at least 2 characters',
          },
          {
            name: 'customerEmail',
            label: 'Customer Email',
            type: 'email',
            placeholder: 'customer@email.com',
            required: true,
          },
          {
            name: 'customerPhone',
            label: 'Customer Phone',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: true,
            validation: 'Must be valid Canadian phone number',
          },
          {
            name: 'propertyAddress',
            label: 'Property Address',
            type: 'text',
            placeholder: '123 Main Street, City, Province, Postal Code',
            required: true,
            description: 'Full property address including postal code',
          },
        ],
      },
      {
        section: 'Property Details',
        fields: [
          {
            name: 'homeType',
            label: 'Home Type',
            type: 'select',
            required: true,
            options: [
              'Single Family Detached',
              'Semi-Detached',
              'Townhouse/Row House',
              'Condominium',
              'Mobile/Manufactured Home',
              'Other',
            ],
          },
          {
            name: 'roofType',
            label: 'Primary Roof Type',
            type: 'select',
            required: true,
            options: [
              'Asphalt Shingles',
              'Metal',
              'Tile',
              'Slate',
              'Flat/Membrane',
              'Cedar Shakes',
              'Unknown',
            ],
          },
          {
            name: 'roofAge',
            label: 'Roof Age (Approximate)',
            type: 'select',
            required: true,
            options: [
              'Less than 5 years',
              '5-10 years',
              '10-15 years',
              '15-20 years',
              'More than 20 years',
              'Unknown',
            ],
          },
          {
            name: 'monthlyBill',
            label: 'Average Monthly Electric Bill',
            type: 'number',
            placeholder: '250',
            required: true,
            description: 'Enter amount in CAD ($)',
          },
          {
            name: 'shadingConcerns',
            label: 'Shading Concerns',
            type: 'checkbox',
            required: false,
            description: 'Check if property has significant shading from trees, buildings, etc.',
          },
        ],
      },
      {
        section: 'Customer Preferences',
        fields: [
          {
            name: 'projectTimeline',
            label: 'Desired Project Timeline',
            type: 'select',
            required: true,
            options: [
              'ASAP (Within 30 days)',
              'Within 3 months',
              'Within 6 months',
              'Within 1 year',
              'Just researching',
            ],
          },
          {
            name: 'budgetRange',
            label: 'Budget Range',
            type: 'select',
            required: true,
            options: [
              'Under $15,000',
              '$15,000 - $25,000',
              '$25,000 - $35,000',
              '$35,000 - $50,000',
              'Over $50,000',
              'Need financing options',
            ],
          },
          {
            name: 'primaryGoal',
            label: 'Primary Goal',
            type: 'radio',
            required: true,
            options: [
              'Reduce electricity bills',
              'Environmental impact',
              'Energy independence',
              'Increase property value',
              'Backup power during outages',
            ],
          },
          {
            name: 'additionalNotes',
            label: 'Additional Notes',
            type: 'textarea',
            placeholder: 'Any special requirements, questions, or concerns...',
            required: false,
            description: 'Include any relevant details that would help with the consultation',
          },
        ],
      },
      {
        section: 'Dealer Information',
        fields: [
          {
            name: 'dealerName',
            label: 'Your Name',
            type: 'text',
            placeholder: 'Your full name',
            required: true,
          },
          {
            name: 'dealerCompany',
            label: 'Company/Organization',
            type: 'text',
            placeholder: 'Your company name',
            required: true,
          },
          {
            name: 'dealerPhone',
            label: 'Your Phone Number',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: true,
          },
          {
            name: 'leadSource',
            label: 'Lead Source',
            type: 'select',
            required: true,
            options: [
              'Website Inquiry',
              'Phone Call',
              'Referral',
              'Trade Show/Event',
              'Door-to-Door',
              'Social Media',
              'Advertisement',
              'Other',
            ],
          },
          {
            name: 'leadQuality',
            label: 'Lead Quality Assessment',
            type: 'select',
            required: true,
            options: [
              'Hot - Ready to move forward',
              'Warm - Interested but needs more info',
              'Cold - Early research phase',
              'Follow-up required',
            ],
            description: 'Your assessment of customer readiness',
          },
        ],
      },
    ],
    timeline: {
      title: 'Lead Processing Timeline',
      description: 'What happens after you submit this lead',
      steps: [
        {
          title: 'Instant Validation',
          timeframe: 'Within 5 minutes',
          description: 'Lead is automatically validated, scored, and entered into our CRM system',
        },
        {
          title: 'Customer Contact',
          timeframe: 'Within 24 hours',
          description:
            'Our team contacts the customer to schedule a consultation and verify details',
        },
        {
          title: 'Site Assessment',
          timeframe: '2-5 business days',
          description: 'Professional site evaluation and custom system design',
        },
        {
          title: 'Proposal & Commission',
          timeframe: '3-7 business days',
          description: 'Customer receives proposal, dealer receives commission notification',
        },
      ],
    },
    incentives: {
      title: 'Dealer Incentives',
      items: [
        {
          title: 'Base Commission',
          description: 'Earn competitive commission on every closed deal',
          value: 'Up to 8%',
        },
        {
          title: 'Volume Bonus',
          description: 'Additional bonus for monthly lead targets',
          value: '$500-2000',
        },
        {
          title: 'Quality Premium',
          description: 'Extra commission for high-converting leads',
          value: '+25%',
        },
      ],
    },
  },
  {
    slug: 'commercial-lead',
    title: 'Commercial Solar Lead Submission',
    shortTitle: 'Commercial Lead',
    description:
      'Submit commercial and industrial solar opportunities with comprehensive business analysis.',
    metaDescription:
      'Professional commercial solar lead submission portal for business opportunities and industrial projects.',
    category: 'commercial',
    icon: 'building',
    color: {
      primary: 'emerald',
      secondary: 'teal',
      accent: 'blue',
    },
    hero: {
      title: 'Commercial Solar Lead Portal',
      subtitle:
        'Unlock enterprise-level solar opportunities with detailed business case development and project management.',
      benefits: [
        'Enterprise-grade project analysis',
        'Financial modeling and ROI calculation',
        'Utility interconnection support',
        'Premium commission structure',
      ],
    },
    formFields: [
      {
        section: 'Business Information',
        fields: [
          {
            name: 'businessName',
            label: 'Business Name',
            type: 'text',
            placeholder: 'ABC Manufacturing Inc.',
            required: true,
          },
          {
            name: 'contactName',
            label: 'Primary Contact Name',
            type: 'text',
            placeholder: 'John Smith, Facilities Manager',
            required: true,
          },
          {
            name: 'contactTitle',
            label: 'Contact Title/Role',
            type: 'text',
            placeholder: 'Facilities Manager, CFO, Owner, etc.',
            required: true,
          },
          {
            name: 'contactEmail',
            label: 'Contact Email',
            type: 'email',
            placeholder: 'contact@business.com',
            required: true,
          },
          {
            name: 'contactPhone',
            label: 'Contact Phone',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: true,
          },
          {
            name: 'businessAddress',
            label: 'Business Address',
            type: 'text',
            placeholder: '123 Industrial Blvd, City, Province',
            required: true,
          },
        ],
      },
      {
        section: 'Facility Details',
        fields: [
          {
            name: 'facilityType',
            label: 'Facility Type',
            type: 'select',
            required: true,
            options: [
              'Manufacturing Plant',
              'Warehouse/Distribution',
              'Office Building',
              'Retail Store/Mall',
              'Agricultural Facility',
              'Government Building',
              'Educational Institution',
              'Healthcare Facility',
              'Data Center',
              'Other Industrial',
            ],
          },
          {
            name: 'facilitySize',
            label: 'Approximate Building Size',
            type: 'select',
            required: true,
            options: [
              'Under 10,000 sq ft',
              '10,000 - 25,000 sq ft',
              '25,000 - 50,000 sq ft',
              '50,000 - 100,000 sq ft',
              '100,000 - 250,000 sq ft',
              'Over 250,000 sq ft',
            ],
          },
          {
            name: 'roofCondition',
            label: 'Roof Condition',
            type: 'select',
            required: true,
            options: [
              'Excellent (New/Recently replaced)',
              'Good (5-10 years old)',
              'Fair (10-20 years old)',
              'Poor (Needs replacement)',
              'Unknown',
            ],
          },
          {
            name: 'monthlyDemand',
            label: 'Monthly Peak Demand (kW)',
            type: 'number',
            placeholder: '500',
            required: true,
            description: 'Peak electrical demand in kilowatts',
          },
          {
            name: 'monthlyUsage',
            label: 'Monthly Energy Usage (kWh)',
            type: 'number',
            placeholder: '50000',
            required: true,
            description: 'Monthly kilowatt-hours consumed',
          },
          {
            name: 'electricBill',
            label: 'Average Monthly Electric Bill',
            type: 'number',
            placeholder: '8500',
            required: true,
            description: 'Enter amount in CAD ($)',
          },
        ],
      },
      {
        section: 'Project Requirements',
        fields: [
          {
            name: 'projectSize',
            label: 'Estimated System Size Needed',
            type: 'select',
            required: true,
            options: [
              'Under 100 kW',
              '100 kW - 250 kW',
              '250 kW - 500 kW',
              '500 kW - 1 MW',
              '1 MW - 5 MW',
              'Over 5 MW',
            ],
          },
          {
            name: 'installationType',
            label: 'Installation Type',
            type: 'select',
            required: true,
            options: [
              'Rooftop mounting',
              'Ground mount',
              'Carport/Canopy',
              'Building integrated',
              'Mixed installation',
              'Not sure/Need assessment',
            ],
          },
          {
            name: 'timeline',
            label: 'Project Timeline',
            type: 'select',
            required: true,
            options: [
              'Immediate (Within 3 months)',
              'Within 6 months',
              'Within 1 year',
              '1-2 years',
              'Long-term planning (2+ years)',
            ],
          },
          {
            name: 'budgetRange',
            label: 'Project Budget Range',
            type: 'select',
            required: true,
            options: [
              'Under $100K',
              '$100K - $500K',
              '$500K - $1M',
              '$1M - $2M',
              '$2M - $5M',
              'Over $5M',
              'Need financing options',
            ],
          },
          {
            name: 'decisionMaker',
            label: 'Decision Making Authority',
            type: 'select',
            required: true,
            options: [
              'I am the decision maker',
              'I influence the decision',
              'I need to involve others',
              'Board/Committee decision',
              'Corporate approval required',
            ],
          },
        ],
      },
      {
        section: 'Additional Information',
        fields: [
          {
            name: 'currentProvider',
            label: 'Current Electricity Provider',
            type: 'text',
            placeholder: 'Ontario Hydro, BC Hydro, etc.',
            required: false,
          },
          {
            name: 'specialRequirements',
            label: 'Special Requirements',
            type: 'textarea',
            placeholder:
              'Environmental certifications, union requirements, specific equipment needs, etc.',
            required: false,
          },
          {
            name: 'dealerNotes',
            label: 'Dealer Notes',
            type: 'textarea',
            placeholder: 'Additional context, relationship details, competitive landscape, etc.',
            required: false,
          },
        ],
      },
    ],
    timeline: {
      title: 'Commercial Project Timeline',
      description: 'Typical commercial solar project progression',
      steps: [
        {
          title: 'Initial Assessment',
          timeframe: 'Within 48 hours',
          description: 'Lead qualification, utility analysis, and preliminary feasibility review',
        },
        {
          title: 'Site Evaluation',
          timeframe: '1-2 weeks',
          description:
            'Detailed engineering assessment, structural analysis, and utility coordination',
        },
        {
          title: 'Proposal Development',
          timeframe: '2-3 weeks',
          description: 'Custom system design, financial modeling, and comprehensive proposal',
        },
        {
          title: 'Project Execution',
          timeframe: '3-6 months',
          description: 'Permitting, installation, commissioning, and dealer commission payment',
        },
      ],
    },
    incentives: {
      title: 'Commercial Dealer Rewards',
      items: [
        {
          title: 'Premium Commission',
          description: 'Higher commission rates for commercial projects',
          value: 'Up to 12%',
        },
        {
          title: 'Project Milestone Bonuses',
          description: 'Bonuses at key project milestones',
          value: '$2K-10K',
        },
        {
          title: 'Referral Network',
          description: 'Access to exclusive commercial referral network',
          value: 'Ongoing leads',
        },
      ],
    },
  },
  {
    slug: 'consultation-request',
    title: 'Expert Consultation Request',
    shortTitle: 'Consultation',
    description:
      'Request a specialized consultation for complex solar projects or unique customer requirements.',
    metaDescription:
      'Request expert consultation for complex solar installations and specialized customer requirements.',
    category: 'consultation',
    icon: 'users',
    color: {
      primary: 'purple',
      secondary: 'violet',
      accent: 'pink',
    },
    hero: {
      title: 'Expert Consultation Portal',
      subtitle:
        'Access specialized expertise for complex projects, unique installations, or challenging customer requirements.',
      benefits: [
        'Direct access to solar engineers',
        'Custom solution development',
        'Technical feasibility analysis',
        'Regulatory compliance guidance',
      ],
    },
    formFields: [
      {
        section: 'Consultation Request',
        fields: [
          {
            name: 'requestType',
            label: 'Consultation Type',
            type: 'select',
            required: true,
            options: [
              'Technical feasibility study',
              'Complex installation design',
              'Regulatory/permitting guidance',
              'Financial structuring advice',
              'Product selection consultation',
              'Troubleshooting existing system',
              'Upgrade/expansion planning',
              'Other specialized need',
            ],
          },
          {
            name: 'urgency',
            label: 'Urgency Level',
            type: 'select',
            required: true,
            options: [
              'Emergency - Same day response needed',
              'Urgent - Within 24 hours',
              'High Priority - Within 3 days',
              'Normal - Within 1 week',
              'Low Priority - Within 2 weeks',
            ],
          },
          {
            name: 'projectDescription',
            label: 'Project Description',
            type: 'textarea',
            placeholder:
              'Provide detailed description of the project, challenges, or specific requirements...',
            required: true,
            description: 'Include as much detail as possible for accurate consultation',
          },
        ],
      },
      {
        section: 'Customer/Project Information',
        fields: [
          {
            name: 'customerName',
            label: 'Customer Name',
            type: 'text',
            placeholder: 'Customer or company name',
            required: true,
          },
          {
            name: 'projectLocation',
            label: 'Project Location',
            type: 'text',
            placeholder: 'City, Province or full address',
            required: true,
          },
          {
            name: 'projectType',
            label: 'Project Category',
            type: 'select',
            required: true,
            options: [
              'Residential - Single family',
              'Residential - Multi-unit',
              'Commercial - Small business',
              'Commercial - Industrial',
              'Agricultural',
              'Government/Municipal',
              'Non-profit/Educational',
              'Other',
            ],
          },
          {
            name: 'systemSize',
            label: 'Estimated System Size',
            type: 'select',
            required: false,
            options: [
              'Under 10 kW',
              '10-25 kW',
              '25-100 kW',
              '100-500 kW',
              '500 kW - 1 MW',
              'Over 1 MW',
              'Unknown/TBD',
            ],
          },
        ],
      },
      {
        section: 'Technical Details',
        fields: [
          {
            name: 'specificChallenges',
            label: 'Specific Challenges',
            type: 'textarea',
            placeholder: 'Describe any specific technical, regulatory, or financial challenges...',
            required: false,
          },
          {
            name: 'currentSolution',
            label: 'Current/Proposed Solution',
            type: 'textarea',
            placeholder: 'What solutions have been considered or attempted?',
            required: false,
          },
          {
            name: 'requiredOutcome',
            label: 'Required Outcome',
            type: 'textarea',
            placeholder: 'What specific outcome or resolution do you need?',
            required: true,
          },
        ],
      },
      {
        section: 'Dealer Information',
        fields: [
          {
            name: 'dealerName',
            label: 'Your Name',
            type: 'text',
            required: true,
          },
          {
            name: 'dealerCompany',
            label: 'Company',
            type: 'text',
            required: true,
          },
          {
            name: 'dealerPhone',
            label: 'Your Phone',
            type: 'tel',
            required: true,
          },
          {
            name: 'dealerEmail',
            label: 'Your Email',
            type: 'email',
            required: true,
          },
          {
            name: 'preferredContact',
            label: 'Preferred Contact Method',
            type: 'select',
            required: true,
            options: [
              'Phone call',
              'Email',
              'Video conference',
              'In-person meeting',
              'No preference',
            ],
          },
        ],
      },
    ],
    timeline: {
      title: 'Consultation Process',
      description: 'How our expert consultation process works',
      steps: [
        {
          title: 'Request Review',
          timeframe: 'Within 4 hours',
          description: 'Expert team reviews request and assigns appropriate specialist',
        },
        {
          title: 'Initial Contact',
          timeframe: 'Same or next business day',
          description:
            'Specialist contacts you to schedule consultation and gather additional details',
        },
        {
          title: 'Expert Consultation',
          timeframe: '1-3 business days',
          description: 'Detailed consultation session with recommendations and action plan',
        },
        {
          title: 'Follow-up Support',
          timeframe: 'Ongoing',
          description: 'Continued support through project implementation and completion',
        },
      ],
    },
    incentives: {
      title: 'Consultation Benefits',
      items: [
        {
          title: 'Expert Access',
          description: 'Direct access to solar engineers and specialists',
          value: 'No charge',
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored recommendations for unique challenges',
          value: 'Included',
        },
        {
          title: 'Implementation Support',
          description: 'Ongoing support through project completion',
          value: 'Full service',
        },
      ],
    },
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Service Request',
    shortTitle: 'Emergency',
    description:
      'Submit urgent requests for system failures, safety issues, or time-critical solar service needs.',
    metaDescription:
      'Emergency solar service request portal for urgent system failures and time-critical service needs.',
    category: 'emergency',
    icon: 'exclamation',
    color: {
      primary: 'red',
      secondary: 'orange',
      accent: 'yellow',
    },
    hero: {
      title: 'Emergency Service Portal',
      subtitle:
        'Immediate response for critical solar system issues, safety concerns, and urgent service requirements.',
      benefits: [
        '24/7 emergency response team',
        'Priority technician dispatch',
        'Safety issue rapid response',
        'System downtime minimization',
      ],
    },
    formFields: [
      {
        section: 'Emergency Details',
        fields: [
          {
            name: 'emergencyType',
            label: 'Emergency Type',
            type: 'select',
            required: true,
            options: [
              'Safety hazard - Immediate danger',
              'Complete system failure',
              'Partial system failure',
              'Weather damage',
              'Electrical/Fire safety concern',
              'Equipment malfunction',
              'Grid interconnection issue',
              'Other urgent issue',
            ],
          },
          {
            name: 'severityLevel',
            label: 'Severity Level',
            type: 'select',
            required: true,
            options: [
              'Critical - Life safety risk',
              'High - Property damage risk',
              'Medium - System completely down',
              'Low - Partial system impact',
            ],
          },
          {
            name: 'issueDescription',
            label: 'Detailed Issue Description',
            type: 'textarea',
            placeholder:
              'Describe the problem in detail, including any symptoms, error messages, or visible damage...',
            required: true,
            description: 'Include all relevant details to help our emergency response team',
          },
          {
            name: 'whenOccurred',
            label: 'When Did This Occur?',
            type: 'select',
            required: true,
            options: [
              'Just now',
              'Within the last hour',
              'Within the last 4 hours',
              'Within the last 24 hours',
              'More than 24 hours ago',
            ],
          },
        ],
      },
      {
        section: 'System Information',
        fields: [
          {
            name: 'customerName',
            label: 'Customer Name',
            type: 'text',
            required: true,
          },
          {
            name: 'systemAddress',
            label: 'System Location Address',
            type: 'text',
            placeholder: 'Full address where the solar system is located',
            required: true,
          },
          {
            name: 'systemSize',
            label: 'System Size (if known)',
            type: 'text',
            placeholder: 'e.g., 10kW, 25 panels, etc.',
            required: false,
          },
          {
            name: 'installationDate',
            label: 'Installation Date (Approximate)',
            type: 'select',
            required: false,
            options: [
              'Within the last year',
              '1-2 years ago',
              '2-5 years ago',
              '5-10 years ago',
              'More than 10 years ago',
              'Unknown',
            ],
          },
          {
            name: 'warrantyStatus',
            label: 'Warranty Status',
            type: 'select',
            required: false,
            options: ['Still under warranty', 'Warranty expired', 'Unknown', 'Not applicable'],
          },
        ],
      },
      {
        section: 'Contact Information',
        fields: [
          {
            name: 'primaryContact',
            label: 'Primary Contact Name',
            type: 'text',
            required: true,
          },
          {
            name: 'emergencyPhone',
            label: 'Emergency Contact Phone',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: true,
            description: 'Phone number where you can be reached immediately',
          },
          {
            name: 'alternatePhone',
            label: 'Alternate Phone',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: false,
          },
          {
            name: 'onSiteContact',
            label: 'On-Site Contact Available?',
            type: 'select',
            required: true,
            options: [
              'Yes - I am on site now',
              'Yes - Someone else is on site',
              'No - But I can be there within 1 hour',
              'No - But I can be there within 4 hours',
              'No - Remote access only',
            ],
          },
          {
            name: 'accessInstructions',
            label: 'Site Access Instructions',
            type: 'textarea',
            placeholder:
              'Gate codes, key locations, security procedures, contact person for access, etc.',
            required: false,
            description: 'How can our technician access the site if you are not present?',
          },
        ],
      },
      {
        section: 'Dealer Information',
        fields: [
          {
            name: 'dealerName',
            label: 'Your Name',
            type: 'text',
            required: true,
          },
          {
            name: 'dealerCompany',
            label: 'Company',
            type: 'text',
            required: true,
          },
          {
            name: 'dealerPhone',
            label: 'Your Direct Phone',
            type: 'tel',
            required: true,
            description: 'Direct line for emergency coordination',
          },
          {
            name: 'relationshipToCustomer',
            label: 'Relationship to Customer',
            type: 'select',
            required: true,
            options: [
              'Original installer',
              'Service provider',
              'Sales representative',
              'Property manager',
              'Emergency contact',
              'Other',
            ],
          },
        ],
      },
    ],
    timeline: {
      title: 'Emergency Response Timeline',
      description: 'Our commitment to emergency service response',
      steps: [
        {
          title: 'Immediate Triage',
          timeframe: 'Within 15 minutes',
          description: 'Emergency team reviews request and determines response level',
        },
        {
          title: 'Emergency Dispatch',
          timeframe: '30 minutes - 4 hours',
          description:
            'Technician dispatched based on severity (Critical: 30 min, High: 2 hours, Medium: 4 hours)',
        },
        {
          title: 'On-Site Response',
          timeframe: 'Based on location',
          description:
            'Certified technician arrives on-site for assessment and immediate safety measures',
        },
        {
          title: 'Resolution',
          timeframe: 'Same day priority',
          description: 'Problem resolution with same-day priority, temporary measures if needed',
        },
      ],
    },
    incentives: {
      title: 'Emergency Service Guarantee',
      items: [
        {
          title: 'Response Time',
          description: 'Guaranteed response within committed timeframes',
          value: 'SLA backed',
        },
        {
          title: 'Safety Priority',
          description: 'Life safety issues get immediate attention',
          value: 'First priority',
        },
        {
          title: '24/7 Availability',
          description: 'Emergency service available around the clock',
          value: 'Always on',
        },
      ],
    },
  },
];

export function getDealerFormBySlug(slug: string): DealerForm | undefined {
  return dealerForms.find((form) => form.slug === slug);
}

export function getAllDealerFormSlugs(): string[] {
  return dealerForms.map((form) => form.slug);
}

export function getDealerFormsByCategory(category: string): DealerForm[] {
  return dealerForms.filter((form) => form.category === category);
}
