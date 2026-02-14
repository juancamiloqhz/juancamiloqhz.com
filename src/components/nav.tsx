import { Link } from "next-view-transitions"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="text-foreground transition-element font-medium no-underline hover:no-underline"
      >
        Juan Camilo QHz
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          Blog
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
