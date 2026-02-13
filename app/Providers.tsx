import React, { useEffect } from "react"

import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { I18nextProvider } from "react-i18next"

import i18n from "@/libs/i18n"
import { idbPersister } from "@/libs/queryClient"
import themes from "@/styles"

import useThemeStore from "./utils/useThemeStore"

const CACHE_TIME_24H = 1000 * 60 * 60 * 24

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: CACHE_TIME_24H,
            staleTime: 1000 * 30,
            retry: 1,
        },
    },
})

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { displayedTheme } = useThemeStore()

    return <div className={themes[displayedTheme]}>{children}</div>
}

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: idbPersister }}
        >
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>{children}</ThemeProvider>
            </I18nextProvider>
        </PersistQueryClientProvider>
    )
}

export default Providers
