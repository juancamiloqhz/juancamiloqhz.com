export default function PostTitle({ children }: { children: string }) {
  return (
    <h1 className="my-3 text-left font-serif text-5xl font-bold leading-tight tracking-tighter md:my-6 md:text-center md:text-6xl md:leading-none lg:text-7xl">
      {children}
    </h1>
  )
}
