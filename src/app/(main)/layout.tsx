import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <header className="px-8 z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header> */}
      <main className="flex-1 mx-auto max-w-3xl prose dark:prose-invert">
        {children}
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}
