import z from "zod"

const possibleTrueValues = ["true", "1", "yes", "y", "on", "enable", "enabled"]

const stringToBoolean = (value: string) => {
    return possibleTrueValues.includes(value)
}

const publicEnvSchema = z.object({
    VITE_APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
    VITE_APP_API_URL: z.url(),
    VITE_DEV_MODE: z.preprocess((value) => stringToBoolean(value as string), z.boolean()),
    VITE_APP_API_MOCK_MODE: z.preprocess(
        (value) => stringToBoolean(value as string),
        z.boolean(),
    ),
})

export const clientEnv = publicEnvSchema.parse(import.meta.env)

if (process.env.NODE_ENV === "development") {
    console.log("[Current Environment]", clientEnv)
}
