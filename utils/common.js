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


export const TYPES = {
  STRING: 'string',
  DATE: 'date',
  NUMBER: 'number',
  TAGS: 'tags',
  PHONE: 'phone',
  EMAIL: 'email',
  LINK: 'link',
  BIRTHDAY: 'birthday',
  PRESENCE: 'presence',
  MONEY: 'money',
  TERM: 'term',
  TIMESTAMP: 'timestamp'
}

export function setRow(value, label, type) {
  if (!Object.values(TYPES).includes(type)) throw new Error(`Type ${type} is not supported`)
  if (Array.isArray(value)) {
    value = value.map((v) => {
      return typeof v === 'string' ? v : String(v)
    })
  } else if (typeof value != 'string') {
    value = String(value)
  }
  return { value, label, type }
}

export function pickUniqRandom(number, list) {
  let uniq = []
  let i = 0
  while (i < number) {
    let index = Math.floor(Math.random() * list.length)
    if (!uniq.includes(index)) {
      uniq.push(index)
      i++
    }
  }
  return uniq.map((i) => list[i])
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
