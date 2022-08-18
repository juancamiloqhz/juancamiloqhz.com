import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Newsletter } from 'contentlayer/generated';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';

export default function NewsletterLink({
  slug,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  const { locale } = useRouter();
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>
          {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
            locale: locale === 'es' ? es : undefined
          })}
        </a>
      </Link>
    </li>
  );
}
