export const fallbackLng = "zh-TW";
export const defaultNS = "common";
export const cookieName = "i18next";

export const languageOptions = {
  "zh-TW": {
    label: "繁體中文",
    value: "zh-TW",
  },
  en: {
    label: "English",
    value: "en",
  },
};
export const languages = Object.keys(languageOptions);

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
