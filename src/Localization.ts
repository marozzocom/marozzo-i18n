type Translation = { [key: string]: string | Translation }

export class Localization {
  private static instance: Localization
  private translations: Translation

  static getInstance() {
    if (!Localization.instance) {
      Localization.instance = new Localization()
    }
    return Localization.instance
  }

  set = (translations: Translation) => {
    this.translations = translations
  }

  getNamespace = (namespace: string = "common") => namespace.split(".").reduce((acc, key) => acc[key], this.translations) as Translation
  
  get = (keys: string = "common") => keys.split(".").reduce((acc, key) => acc[key], this.translations) as string
  
  fill = (...replaceValues: string[]) => (key: string) => replaceValues.reduce((acc, value, index) => acc.replace(this.reg(index), value), key)
  
  private reg = (i: number) => new RegExp(`\\{${i}}`, "g")
}

const { set, getNamespace, get, fill } = Localization.getInstance()

export default {
  set,
  getNamespace,
  get,
  fill
}
