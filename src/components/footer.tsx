import { siteConfig } from "@/config/site"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="relative">
      <div className="border-t border-border/50 px-8 pt-20 pb-32 relative bg-background">
        <div className="max-w-7xl mx-auto text-sm flex sm:flex-row flex-col justify-between items-start gap-10">
          <div className="flex flex-col space-y-2.5">
            <Logo />
            <p>{siteConfig.description}</p>
            <p>
              Copyright © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p>All rights reserved</p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-start space-y-3 tracking-tight">
              {siteConfig.footer.navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="link !text-foreground py-0.5 hover:!text-brand/80 hover:translate-x-0.5 transition-transform duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex flex-col justify-start space-y-3 tracking-tight">
              {siteConfig.footer.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link !text-foreground py-0.5 hover:!text-brand/80 hover:translate-x-1 transition-transform duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
