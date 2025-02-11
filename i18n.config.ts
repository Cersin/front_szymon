import en from './translations/en.json';
import pl from './translations/pl.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pl',
  messages: {
    en: en,
    pl: pl,
  },
}));
