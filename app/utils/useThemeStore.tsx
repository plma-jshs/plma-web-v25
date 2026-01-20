import { useEffect } from "react"

import { create } from "zustand"

import { type ThemeKeys } from "@/styles"
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage"

export type ThemeKeysWithSystem = ThemeKeys | "system"

const getSystemTheme = (): ThemeKeys => {
    if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark"
    }
    return "light"
}

const resolveThemeSetting = (value: ThemeKeysWithSystem): ThemeKeys =>
    value === "system" ? getSystemTheme() : value

const storedTheme =
    (getLocalStorageItem("theme") as ThemeKeysWithSystem | null) ?? "system"

type ThemeState = {
    displayedTheme: ThemeKeys
    themeSetting: ThemeKeysWithSystem
    setTheme: (newTheme: ThemeKeysWithSystem) => void
    setResolvedTheme: (resolvedTheme: ThemeKeys) => void
}

const useThemeStoreBase = create<ThemeState>((set) => ({
    themeSetting: storedTheme,
    displayedTheme: "light",
    setTheme: (newTheme) => {
        const resolvedTheme = resolveThemeSetting(newTheme)
        if (typeof window !== "undefined") {
            setLocalStorageItem("theme", newTheme)
        }
        set({ themeSetting: newTheme, displayedTheme: resolvedTheme })
    },
    setResolvedTheme: (resolvedTheme) =>
        set((state) =>
            state.themeSetting === "system" ? { displayedTheme: resolvedTheme } : state,
        ),
}))

const useThemeStore = () => {
    const { themeSetting, displayedTheme, setTheme, setResolvedTheme } =
        useThemeStoreBase()

    useEffect(() => {
        if (themeSetting !== "system" || typeof window === "undefined") {
            return
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const applySystemTheme = (event?: MediaQueryListEvent) => {
            const isDark = event ? event.matches : mediaQuery.matches
            setResolvedTheme(isDark ? "dark" : "light")
        }

        applySystemTheme()
        mediaQuery.addEventListener("change", applySystemTheme)
        return () => mediaQuery.removeEventListener("change", applySystemTheme)
    }, [themeSetting, setResolvedTheme])

    return { themeSetting, displayedTheme, setTheme }
}

export default useThemeStore
