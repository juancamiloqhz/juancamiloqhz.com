// import { marketingConfig } from "@/config/marketing"
// import { MainNav } from "@/components/main-nav"

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col pt-0 md:pt-8 p-8">
      {/* <header className="px-8 z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header> */}
      <main className="flex-1 mx-auto max-w-3xl prose dark:prose-invert">
        {children}
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  const links = [
    { name: "@juancamiloqhz", url: "https://x.com/juancamiloqhz" },
    { name: "youtube", url: "https://www.youtube.com/@juancamiloqhz" },
    { name: "linkedin", url: "https://www.linkedin.com/in/juancamiloqhz" },
    { name: "github", url: "https://github.com/juancamiloqhz" },
  ]

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
