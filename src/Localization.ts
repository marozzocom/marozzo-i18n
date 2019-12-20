// interface ITranslations {
//   [x: string]: typeof en
// }

type Translation = { [locale: string]: { [key: string]: string } }

export class Localization {
  private static instance: Localization
  private translations: Translation

  // private constructor(translations: Translation) {
  //   this.translations = translations
  // }

  static getInstance() {
    if (!Localization.instance) {
      Localization.instance = new Localization()
    }
    return Localization.instance
  }

  set locale(translations: Translation) {
    this.translations = {...this.translations, ...translations}
  }

  fill = (translatedString: string, ...replaceValues: string[]) => {
    for (let i = 0; i < replaceValues?.length; i++) {
      const reg = new RegExp(`\\{${i}}`, "g")
      translatedString = translatedString.replace(reg, replaceValues[i])
    }

    return translatedString
  }

  getNamespace(namespace: string = "common", language = "en"): any {
    let translation: any = this.translations[language]

    for (const key of namespace.split(".")) {
      translation = translation[key]
    }

    return translation
  }
}

const localization = Localization.getInstance()
export default localization
