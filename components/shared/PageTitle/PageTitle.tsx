export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-14 w-full items-center md:h-56 ">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center md:justify-center">
        <h1 className="font-serif text-3xl font-bold md:text-7xl">
          {children}
        </h1>
      </div>
    </div>
  )
}
