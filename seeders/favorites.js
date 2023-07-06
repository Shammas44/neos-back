import { setRow, TYPES as T, randomNumber } from './../utils/common.js'

const favorites = [
  {
    name: 'Google Developers',
    url: 'https://developers.google.com/'
  },
  {
    name: 'Google Cloud',
    url: 'https://cloud.google.com/'
  },
  {
    name: 'Google APIs',
    url: 'https://developers.google.com/apis'
  },
  {
    name: 'Google Fonts',
    url: 'https://fonts.google.com/'
  },
  {
    name: 'Google Colab',
    url: 'https://colab.research.google.com/'
  },
  {
    name: 'Google Chrome Developer Tools',
    url: 'https://developers.google.com/web/tools/chrome-devtools'
  },
  {
    name: 'Google Analytics',
    url: 'https://analytics.google.com/'
  },
  {
    name: 'Google Maps Platform',
    url: 'https://developers.google.com/maps'
  },
  {
    name: 'Google Firebase',
    url: 'https://firebase.google.com/'
  },
  {
    name: 'Google Search Console',
    url: 'https://search.google.com/search-console'
  },
  {
    name: 'Google Material Design',
    url: 'https://material.io/'
  },
  {
    name: 'Google Earth Engine',
    url: 'https://earthengine.google.com/'
  },
  {
    name: 'Google Pay API',
    url: 'https://developers.google.com/pay/api'
  }
];

const TAG = ['app', 'document', 'other']
let lastId = 0;


function getFavorites(userId) {

  const results = []
  for (const favorite of favorites) {
    const tag = TAG[randomNumber(0, TAG.length - 1)]
    lastId++
    results.push({
      id: String(lastId),
      data: {
        name: setRow(favorite.name, 'nom', T.STRING),
        url: setRow(favorite.url, 'url', T.STRING),
        userId: setRow(userId, 'identifiant du collaborateur', T.TAGS),
        tag: setRow([tag], 'tag', T.TAGS),
      }
    })
  }
  return results

}

export default getFavorites
