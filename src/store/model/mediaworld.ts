import {Store} from './store';

export const Mediaworld: Store = {
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Too Many Requests.'],
    },
    inStock: {
      container: '.product-add-to-cart',
      text: ['Aggiungi al carrello'],
    },
    outOfStock: {
      container: '.product-add-to-cart',
      text: [' Avvisami'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.mediaworld.it/product/p-140314/microsoft-xbox-series-s',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mediaworld.it/product/p-140551',
    }
  ],
  name: 'mediaworld',
};
