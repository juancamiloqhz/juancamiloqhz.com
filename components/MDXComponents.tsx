import Image from 'next/image';
import Link from 'next/link';

// import ProsCard from '@/components/ProsCard';
// import ConsCard from '@/components/ConsCard';
// import Gumroad from '@/components/metrics/Gumroad';
// import Unsplash from '@/components/metrics/Unsplash';
// import Analytics from '@/components/metrics/Analytics';
// import YouTube from '@/components/metrics/Youtube';
// import Step from '@/components/Step';
// import ImageWithTheme from '@/components/ImageWithTheme';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} className="link-primary link" {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-primary link"
      {...props}
    />
  );
};

function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      className="rounded-[var(--rounded-btn)]"
      {...props}
    />
  );
}

function Callout(props: any) {
  return (
    <div className="flex rounded-[var(--rounded-btn)] bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  //   ImageWithTheme,
  a: CustomLink,
  Callout,
  //   Analytics,
  //   ConsCard,
  //   Gumroad,
  //   ProsCard,
  //   Step,
  //   Unsplash,
  //   YouTube
};

export default MDXComponents;
