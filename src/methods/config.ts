import request from 'request';

export function getConfigs(): request.Request {
  return request(`${process.env.EVENTS_URL}/events/config`)
}