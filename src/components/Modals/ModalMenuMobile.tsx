import React from "react"
import Link from "next/link"
import FocusTrap from "focus-trap-react"
import { AnimatePresence, motion } from "framer-motion"
// import { useTranslation } from "next-i18next"
import { createPortal } from "react-dom"

import { useKeydown } from "@/lib/helpers"
import { useLockBody } from "@/hooks/use-lock-body"
// import LocaleSwitcher from "@/components/shared/LocaleSwitcher"
import MenuToggle from "@/components/shared/MenuToggle"
import SocialLinks from "@/components/shared/SocialLinks"

const MotionLink = motion(Link)

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

const list = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
    },
  },
}

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

function ModalElement({ setIsOpen, isOpen }: ModalProps) {
  // const { t } = useTranslation("header")
  useKeydown("Escape", () => setIsOpen(false))
  useLockBody()

  return (
    <>
      <div className="fixed inset-0 z-50 w-full bg-background" />{" "}
      {/* backdrop */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="fixed top-6 right-6 z-[110] md:top-8 md:right-12"
      >
        <MenuToggle isOpen={isOpen} size={24} />
      </button>
      <motion.nav
        variants={list}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed top-0 bottom-0 right-0 z-[100] flex w-full flex-col items-center justify-center gap-3"
      >
        <MotionLink
          variants={item}
          href="/"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("home")} */}
          Home
        </MotionLink>

        <MotionLink
          variants={item}
          href="/blog"
          passHref
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
          onClick={() => setIsOpen(false)}
        >
          {/* {t("blog")} */}
          Blog
        </MotionLink>

        <MotionLink
          variants={item}
          href="/dashboard"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          Dashboard
        </MotionLink>

        <MotionLink
          variants={item}
          href="/mailinglist"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("mailList")} */}
          Mailing List
        </MotionLink>

        <MotionLink
          variants={item}
          href="/#work"
          onClick={() => setIsOpen(false)}
          passHref
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("work")} */}
          Work
        </MotionLink>

        <MotionLink
          variants={item}
          href="/guestbook"
          onClick={() => setIsOpen(false)}
          passHref
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("guestbook")} */}
          Guestbook
        </MotionLink>

        <MotionLink
          variants={item}
          href="/about"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("about")} */}
          About
        </MotionLink>

        <MotionLink
          variants={item}
          href="/contact"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("contact")} */}
          Contact
        </MotionLink>

        <MotionLink
          variants={item}
          href="/JuanCamiloQHz_Resume_2023.pdf"
          passHref
          onClick={() => setIsOpen(false)}
          className="link flex text-2xl font-semibold no-underline md:text-3xl"
        >
          {/* {t("resume")} */}
          Resume
        </MotionLink>

        {/* <motion.div variants={item} className="mt-4">
          <LocaleSwitcher />
        </motion.div>*/}
        <motion.div variants={item} className="mt-4 flex items-center gap-5">
          <SocialLinks size={24} />
        </motion.div>
      </motion.nav>
    </>
  )
}

export default function ModalMenuMobile(props: ModalProps) {
  if (!canUseDOM) return null
  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {props.isOpen && (
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
          <div className="absolute">
            <ModalElement {...props} />
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>,
    document.body as HTMLElement
  )
}
