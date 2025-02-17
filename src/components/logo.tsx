import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Avatar className="w-7 h-7">
        <AvatarImage src="/face_round.png" />
        <AvatarFallback>{siteConfig.initials}</AvatarFallback>
      </Avatar>
      <span className="text-base font-bold">{siteConfig.name}</span>
    </Link>
  )
}
