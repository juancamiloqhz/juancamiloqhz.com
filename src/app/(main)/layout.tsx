import Footer from "@/components/footer"
import Header from "@/components/header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div data-wrapper="" className="border-grid flex flex-1 flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
