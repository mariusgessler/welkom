const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

export const GoogleTranslate = require('google-translate')(API_KEY);
