import { Nav } from "@/components/nav"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col p-8 pt-0 md:pt-8">
      <div className="mx-auto w-full max-w-3xl">
        <Nav />
      </div>
      <main className="prose dark:prose-invert mx-auto flex-1 max-w-3xl">
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
