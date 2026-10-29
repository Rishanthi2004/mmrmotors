export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  iconName: 'Wrench' | 'Settings' | 'Car';
}

export const COMPANY_INFO = {
  name: 'MMR MOTORS LTD',
  logo: '/assets/aistudio/MMR_Motors_Chrome_Racing_Logo_dfa94b36.png',
  tagline: 'Your Trusted Partner for Vehicle Care',
  subheading: 'Vehicle maintenance, repair services and used car sales from MMR MOTORS LTD.',
  address: {
    line1: 'Flat 9 Solar Court',
    line2: '119 Sydenham Road',
    town: 'Croydon',
    postcode: 'CR0 2EZ',
    country: 'United Kingdom',
    fullAddress: 'Flat 9 Solar Court, 119 Sydenham Road, Croydon, CR0 2EZ, United Kingdom',
  },
  phone: '07735 508394',
  phoneFormatted: '+44 7735 508394',
  phoneHref: 'tel:+447735508394',
  email: 'mmrmotorsltd@gmail.com',
  emailHref: 'mailto:mmrmotorsltd@gmail.com',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Flat+9+Solar+Court%2C+119+Sydenham+Road%2C+Croydon%2C+CR0+2EZ%2C+United+Kingdom',
  embedMapUrl:
    'https://maps.google.com/maps?q=119+Sydenham+Road,+Croydon+CR0+2EZ,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed',
  openingHours: [
    { days: 'Monday – Friday', hours: '08:30 – 18:00' },
    { days: 'Saturday', hours: '09:00 – 16:00' },
    { days: 'Sunday', hours: 'By appointment / Closed' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'maintenance',
    title: 'Vehicle Maintenance',
    description:
      'Routine vehicle maintenance to help keep your vehicle in good working condition.',
    details: [
      'Engine oil & filter replacements',
      'Fluid level checks and vital top-ups',
      'Battery condition & charging health check',
      'Brake pad & disc safety inspections',
      'Tyre tread depth & pressure assessment',
    ],
    image: '/src/assets/images/service_maintenance_1793255217217.jpg',
    iconName: 'Settings',
  },
  {
    id: 'repairs',
    title: 'Vehicle Repair Services',
    description:
      'Automotive repair services to address vehicle issues and maintenance requirements.',
    details: [
      'Comprehensive mechanical diagnosis',
      'Braking system repairs & disc changes',
      'Suspension, shock absorbers & steering',
      'Cooling system, radiator & hose repairs',
      'Exhaust repairs and component replacements',
    ],
    image: '/src/assets/images/service_repairs_1793255218270.jpg',
    iconName: 'Wrench',
  },
  {
    id: 'used-cars',
    title: 'Used Car Sales',
    description:
      'Explore used-car options and contact our team for enquiries about available vehicles.',
    details: [
      'Inspected pre-owned vehicle stock',
      'Direct guidance based on your budget & requirements',
      'Assistance with vehicle specifications & history',
      'Straightforward, direct customer advice',
      'Personalised consultation on incoming vehicles',
    ],
    image: '/src/assets/images/used_car_showroom_1793255217450.jpg',
    iconName: 'Car',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Vehicle Maintenance',
    description:
      'Dedicated routine maintenance procedures tailored to help preserve vehicle performance, fuel economy, and roadworthiness.',
  },
  {
    title: 'Repair Service Enquiries',
    description:
      'Prompt and thorough responses to mechanical faults and maintenance requests, focusing on practical and reliable solutions.',
  },
  {
    title: 'Used Car Sales',
    description:
      'Transparent vehicle sales support. We help you explore options and obtain accurate information on pre-owned cars.',
  },
  {
    title: 'Direct Customer Contact',
    description:
      'No call centres or complex ticketing. You speak directly to our team via phone or email for honest advice.',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Used Cars', href: '#used-cars', id: 'used-cars' },
  { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  { label: 'Contact Us', href: '#contact', id: 'contact' },
];
