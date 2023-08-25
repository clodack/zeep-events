import request from 'request';

export function getCategories(): request.Request {
  return request(`${process.env.EVENTS_URL}/events/categories`)
}
