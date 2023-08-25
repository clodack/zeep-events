import request from 'request';

export type EventQueryParams = {
  recommended?: number;
  city?: string;
  startDate?: string;
  endDate?: string;
  categoryIds?: number | number[];
  excludeIds?: number | number[];
}

export function getEvents(params: EventQueryParams): request.Request {
  const url = new URL(`${process.env.EVENTS_URL}/events/list`);

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      url.searchParams.append(`${key}[]`, String(value));
    } else {
      url.searchParams.set(key, String(value));
    }
  });

  return request(url.toString());
}
