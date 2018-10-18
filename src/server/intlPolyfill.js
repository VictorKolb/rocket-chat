import areIntlLocalesSupported from "intl-locales-supported";
import IntlPolyfill from "intl";

export default function() {
  const localesMyAppSupports = ["ru-RU"];

  if (global.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
      Intl.test = "test";
    }
  } else {
    global.Intl = IntlPolyfill;
  }
}
