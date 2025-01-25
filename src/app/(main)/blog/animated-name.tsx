import { Link } from "next-view-transitions"

export function AnimatedName() {
  return (
    <Link
      href="/"
      className="flex mb-8 font-medium text-muted-foreground fade-in"
    >
      Juan Camilo QHz
    </Link>
  )
}
