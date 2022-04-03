export default function PostTitle({ children }) {
  return (
    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none my-3 md:my-6 text-left md:text-center">
      {children}
    </h1>
  );
}
