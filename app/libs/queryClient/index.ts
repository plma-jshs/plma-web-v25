import type { PersistedClient, Persister } from "@tanstack/react-query-persist-client"
import { del, get, set } from "idb-keyval"

const IDB_KEY = "otlplus-query-cache"

function serialize(client: PersistedClient): string {
    return JSON.stringify(client)
}

function deserialize(cachedString: string): PersistedClient {
    return JSON.parse(cachedString) as PersistedClient
}

export function createIDBPersister(): Persister {
    return {
        persistClient: async (client: PersistedClient) => {
            const serialized = serialize(client)
            await set(IDB_KEY, serialized)
        },
        restoreClient: async () => {
            const cached = await get<string>(IDB_KEY)
            if (!cached) return undefined
            return deserialize(cached)
        },
        removeClient: async () => {
            await del(IDB_KEY)
        },
    }
}

export const idbPersister = createIDBPersister()

export async function clearQueryCache(): Promise<void> {
    await idbPersister.removeClient()
}
