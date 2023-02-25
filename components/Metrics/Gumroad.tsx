import fetcher from 'lib/fetcher';
import { Gumroad } from 'lib/types';
import useSWR from 'swr';
import MetricCard from '@/components/Metrics/Card';

export default function GumroadCard() {
  const { data } = useSWR<Gumroad>('/api/gumroad', fetcher);

  const sales = data?.sales || 0;
  const link = 'https://gumroad.com/juancamiloqhz';

  return (
    <MetricCard header="Gumroad Sales" link={link} metric={sales} isCurrency />
  );
}
