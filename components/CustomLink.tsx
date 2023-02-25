import Link, { LinkProps } from 'next/link';

export default function LinkText(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Link {...props} href={props.href || ''} className="link-primary link">
      {props.children}
    </Link>
  );
}
