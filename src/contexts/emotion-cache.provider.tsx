"use client"

import { CacheProvider as EmotionCacheProvider } from "@emotion/react"
import { EmotionCacheOptions, useEmotionCache } from "@utils/use-emotion-cache"
import { PropsWithChildren } from "react"

export type CacheProviderProps = PropsWithChildren<EmotionCacheOptions>

export function CacheProvider({
  children,
  ...cacheOptions
}: CacheProviderProps) {
  return (
    <EmotionCacheProvider value={useEmotionCache(cacheOptions)}>
      {children}
    </EmotionCacheProvider>
  )
}
