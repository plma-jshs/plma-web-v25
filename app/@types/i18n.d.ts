import "react-i18next"

import type { I18nBase } from "@/i18n/locales/_base"

declare module "react-i18next" {
    interface CustomTypeOptions {
        resources: I18nBase
    }
}

declare module "i18next" {
    interface CustomTypeOptions {
        resources: I18nBase
    }
}
