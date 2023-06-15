export function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
export function send(res, body, status) {
  status ? res.status(status).jsonp(body) : res.jsonp(body)
}

export function removePrivateField(req, res) {
  let data = res.locals.data
  data = data.map((obj) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      if (!key.startsWith('_')) {
        acc[key] = value;
      }
      return acc;
    }, {})
  );
  send(res, data)
};
