"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { shimmerPlaceholder } from "@/lib/image-placeholder"

const MAX_RETRIES = 3
const RETRY_DELAYS = [1500, 3000, 6000]

type SmartImageProps = ImageProps & {
  fallbackIcon?: boolean
}

export function SmartImage({ className, onError, onLoad, fallbackIcon = true, ...props }: SmartImageProps) {
  const [retryCount, setRetryCount] = useState(0)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [cacheBuster, setCacheBuster] = useState("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleError: ImageProps["onError"] = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      onError?.(e)

      if (retryCount < MAX_RETRIES) {
        const delay = RETRY_DELAYS[retryCount] ?? 6000
        timerRef.current = setTimeout(() => {
          setCacheBuster(`?retry=${Date.now()}`)
          setRetryCount((prev) => prev + 1)
        }, delay)
      } else {
        setFailed(true)
      }
    },
    [retryCount, onError],
  )

  const handleLoad: ImageProps["onLoad"] = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setLoaded(true)
      setFailed(false)
      onLoad?.(e)
    },
    [onLoad],
  )

  const src = typeof props.src === "string" && cacheBuster
    ? `${props.src}${cacheBuster}`
    : props.src

  if (failed && fallbackIcon) {
    return (
      <div className={cn("flex items-center justify-center bg-gray-100", className)}>
        <div className="text-center text-gray-400 space-y-1">
          <svg className="w-8 h-8 mx-auto opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p className="text-[10px]">Toque para recarregar</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      {...props}
      src={src}
      className={cn(
        className,
        !loaded && "animate-pulse",
      )}
      placeholder="blur"
      blurDataURL={shimmerPlaceholder()}
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}
