export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-14 md:h-56 flex items-center ">
      <div className="px-6 md:px-8 max-w-3xl mx-auto w-full flex items-center md:justify-center flex-col">
        <h1 className="font-serif font-bold text-3xl md:text-7xl">
          {children}
        </h1>
      </div>
    </div>
  );
}
