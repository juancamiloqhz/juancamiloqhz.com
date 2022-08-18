import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';

export default function DateFormatter({
  dateString
}: {
  dateString: string;
  locale?: string;
}) {
  const { locale } = useRouter();
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-sm text-gray-500 dark:text-gray-300"
    >
      {format(date, 'LLLL	d, yyyy', {
        locale: locale === 'es' ? es : undefined
      })}
    </time>
  );
}
