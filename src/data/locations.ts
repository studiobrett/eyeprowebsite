export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  stateAbbr: string;
  zip: string;
  phone: string;
  fax?: string;
  hours: {
    [key: string]: string;
  };
  googleMapsUrl?: string;
  reviewUrl?: string;
  region: 'virginia' | 'south-carolina';
}

export const locations: Location[] = [
  {
    id: 'haymarket',
    name: 'Haymarket',
    address: '6530 Trading Square',
    city: 'Haymarket',
    state: 'Virginia',
    stateAbbr: 'VA',
    zip: '20169',
    phone: '703-754-1113',
    hours: {
      'Monday': '10:00 AM - 5:00 PM',
      'Tuesday': '10:00 AM - 5:00 PM',
      'Wednesday': '10:00 AM - 5:00 PM',
      'Thursday': '10:00 AM - 5:00 PM',
      'Friday': '10:00 AM - 5:00 PM',
      'Saturday': 'Closed',
      'Sunday': 'Closed',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/ngbnu68dCcMQUfWa7',
    reviewUrl: 'https://g.page/r/CfEKX3Yknt2rEAE/review',
    region: 'virginia',
  },
  {
    id: 'winchester',
    name: 'Winchester',
    address: '501 Walmart Drive',
    city: 'Winchester',
    state: 'Virginia',
    stateAbbr: 'VA',
    zip: '22603',
    phone: '540-535-2096',
    hours: {
      'Monday': '10:00 AM - 5:00 PM',
      'Tuesday': '10:00 AM - 5:00 PM',
      'Wednesday': '10:00 AM - 5:00 PM',
      'Thursday': '10:00 AM - 5:00 PM',
      'Friday': '10:00 AM - 5:00 PM',
      'Saturday': 'Closed',
      'Sunday': 'Closed',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/yoTeXSwJ2ZURD5B16',
    reviewUrl: 'https://g.page/r/Cd--JRAHdIc6EAE/review',
    region: 'virginia',
  },
  {
    id: 'georgetown',
    name: 'Georgetown',
    address: '1334 N Fraser St',
    city: 'Georgetown',
    state: 'South Carolina',
    stateAbbr: 'SC',
    zip: '29440',
    phone: '843-945-0843',
    hours: {
      'Monday': '9:30 AM - 5:00 PM',
      'Tuesday': '9:30 AM - 5:00 PM',
      'Wednesday': '9:30 AM - 5:00 PM',
      'Thursday': '9:30 AM - 5:00 PM',
      'Friday': '9:30 AM - 5:00 PM',
      'Saturday': '9:30 AM - 5:00 PM',
      'Sunday': 'Closed',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/4U46AwQ7o7j95Q6p7',
    reviewUrl: 'https://g.page/r/CWiH_EJyn4HPEAE/review',
    region: 'south-carolina',
  },
];

export function getLocation(id: string): Location | undefined {
  return locations.find(loc => loc.id === id);
}

export function getLocationsByRegion(region: 'virginia' | 'south-carolina'): Location[] {
  return locations.filter(loc => loc.region === region);
}

export const virginiaLocations = locations.filter(loc => loc.region === 'virginia');
export const southCarolinaLocations = locations.filter(loc => loc.region === 'south-carolina');
