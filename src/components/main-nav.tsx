"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

import ModalMenuMobile from "./Modals/ModalMenuMobile"

const MotionLink = motion(Link)

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

const navContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delayChildren: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const liItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { bounce: 0 } },
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex items-center justify-between w-full gap-6 md:gap-10">
      <MotionLink
        href="/"
        passHref
        className="flex items-center text-3xl font-bold text-primary transition-colors duration-300 hover:text-primary/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {"{ JC }"}
      </MotionLink>
      {items?.length ? (
        <motion.nav
          className="hidden gap-6 md:flex"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          {items?.map((item, index) => (
            <motion.div
              variants={liItem}
              key={`nav-item-${index}`}
              className="flex items-center gap-2"
            >
              <span className="text-sm leading-none text-primary">
                0{index + 1}.
              </span>{" "}
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Icons.menu size={24} />
      </button>
      {/* {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )} */}
      <ModalMenuMobile isOpen={showMobileMenu} setIsOpen={setShowMobileMenu} />
    </div>
  )
}
