import type { I18nBase as I18nBaseBundle } from "@/i18n/locales/_base"

import { i18nKo as i18nKoBundle } from "./locales/ko"

export const i18nBase = {
    common: i18nKoBundle,
}

export type I18nBase = {
    common: I18nBaseBundle
}

export const i18nKo: I18nBase = {
    common: i18nKoBundle,
}

export const namespaces = Object.keys(i18nBase)

export const resources = {
    ko: i18nKo,
}
