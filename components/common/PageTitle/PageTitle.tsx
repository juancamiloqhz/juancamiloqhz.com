export default function PageTitle({ children }) {
  return (
    <div className="w-full h-14 md:h-56 flex items-center ">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto w-full flex items-center md:justify-center flex-col">
        <h1 className="font-serif font-bold text-3xl md:text-7xl">
          {children}
        </h1>
      </div>
    </div>
  );
}
