export default function PostTitle({ children }) {
  return (
    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none my-3 md:my-6 text-left md:text-center">
      {children}
    </h1>
  );
}
