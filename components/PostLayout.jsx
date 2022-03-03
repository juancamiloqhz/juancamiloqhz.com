import Header from "./Header";
import Meta from "./Meta";

export default function PostLayout({ children, meta }) {
  return (
    <div className="prose container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <Meta title={meta.title} />
      <Header />
      {/* <Meta title='Test Page - JuanCamiloQhz' /> */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
