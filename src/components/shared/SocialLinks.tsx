import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

const iconList: {
  name: string
  href: string
  icon: "github" | "twitter" | "instagram" | "linkedIn" | "codepen"
}[] = [
  {
    name: "GitHub",
    href: "https://github.com/juancamiloqhz",
    icon: "github",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/juancamiloqhz",
    icon: "twitter",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/juancamiloqhz",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/juancamiloqhz",
    icon: "linkedIn",
  },
  {
    name: "Codepen",
    href: "https://codepen.io/juancamiloqhz",
    icon: "codepen",
  },
]

export default function SocialLinks({ size = 20 }: { size?: number }) {
  return iconList.map((icon) => {
    const IconComponent = Icons[icon.icon]

    return (
      <TooltipProvider delayDuration={0} key={icon.name}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={icon.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-muted-foreground"
            >
              <IconComponent size={size} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{icon.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  })
}
