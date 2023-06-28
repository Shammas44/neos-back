export function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
export function send(res, body, status) {
  status ? res.status(status).jsonp(body) : res.jsonp(body)
}

export function removePrivateField(data) {
  if (!data) return data
  if (data?.length > 0 ?? 0) {
    return data.map((obj) => removeField("_", obj))
  }
  if (typeof data === "object" && data !== null) {
    return removeField("_", data)
  }
};

function removeField(startWith, obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!key.startsWith(startWith)) {
      acc[key] = value;
    }
    return acc;
  }, {})
}
