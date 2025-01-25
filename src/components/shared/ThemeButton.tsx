import React from "react"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function ThemeButton({ withText = false }) {
  const [mounted, setMounted] = React.useState(false)
  const { locale } = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      className="m-0 flex h-8 w-8 items-center justify-center gap-2 rounded-full border-0 bg-base-200 p-1 hover:bg-base-300"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      title={locale === "en" ? "Change theme" : "Cambiar tema"}
    >
      <AnimatePresence mode="wait">
        {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </AnimatePresence>
      {withText && "Light Mode"}
    </button>
  )
}

function MoonIcon({
  className = "w-6 h-6 text-base-content origin-center",
}: {
  className?: string
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      initial={{ opacity: 0, rotate: 45 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </motion.svg>
  )
}

function SunIcon({
  className = "w-6 h-6 text-base-content origin-center",
}: {
  className?: string
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      initial={{ opacity: 0, rotate: -45 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </motion.svg>
  )
}
