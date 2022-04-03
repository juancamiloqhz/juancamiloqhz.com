import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-base text-gray-500">
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
