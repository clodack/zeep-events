import request from 'request';

export type Address = {
  city: string;
  street: string;
  text: string;
  lat: string;
  lon: string;
};

export type Social = {
  name: string;
  url?: string;
}

export type Organization = {
  id: string;
  name: string;
  description: string;
  poster: string; //
  socials: Social[];
};

export type Event = {
  id: string; //
  parentid: string;
  status: string;
  recurringStatus: string;
  hits: string;
  title: string; //
  isAdvertisement: boolean;
  isRepeated: boolean;
  GAID: unknown;
  startDate: string; //
  endDate: string; //
  minPrice: number; //
  maxPrice: number; ///
  ordersNumber: number;
  ticketsNumber: number;
  allowRegistration: boolean;
  categories: string[]; // ids
  address: Address; //
  contact_phone: string; //
  ofertaLink: string;
  organization: Organization;
};

export type Events = Event[];

export type ResponseEvents = {
  count: number;
  remaining: number;
  list: Events;
}
