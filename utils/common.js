export function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
export function send(res, body, status) {
  status ? res.status(status).jsonp(body) : res.jsonp(body)
}
