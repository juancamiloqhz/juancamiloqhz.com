import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function GetStartedButton({
  text = "Book a Free AI Strategy Call",
  variant = "default",
  className,
}: {
  text?: string
  variant?: "default" | "outline"
  className?: string
}) {
  return (
    <Button
      variant={variant}
      size="sm"
      asChild
      animation="elevate"
      className={className}
    >
      <Link href="/contact">{text}</Link>
    </Button>
  )
}
