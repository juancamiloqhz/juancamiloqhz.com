import Image from 'next/image';

export default function Avatar({ name, src }) {
  return (
    <div className="flex items-center">
      <Image
        src={src}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
