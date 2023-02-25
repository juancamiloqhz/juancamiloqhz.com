import Link from 'next/link';
import Image from 'next/image';

// import ProsCard from 'components/ProsCard';
// import ConsCard from 'components/ConsCard';
// import Gumroad from 'components/metrics/Gumroad';
// import Unsplash from 'components/metrics/Unsplash';
// import Analytics from 'components/metrics/Analytics';
// import YouTube from 'components/metrics/Youtube';
// import Step from 'components/Step';
// import ImageWithTheme from 'components/ImageWithTheme';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} className="link link-primary" {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link link-primary"
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
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-[var(--rounded-btn)] p-4">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  //   ImageWithTheme,
  a: CustomLink,
  Callout
  //   Analytics,
  //   ConsCard,
  //   Gumroad,
  //   ProsCard,
  //   Step,
  //   Unsplash,
  //   YouTube
};

export default MDXComponents;
