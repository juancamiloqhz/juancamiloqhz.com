import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Gumroad } from 'lib/types';
import MetricCard from 'components/Metrics/Card';

export default function GumroadCard() {
  const { data } = useSWR<Gumroad>('/api/gumroad', fetcher);

  const sales = new Number(data?.sales);
  const link = 'https://gumroad.com/juancamiloqhz';

  return (
    <MetricCard header="Gumroad Sales" link={link} metric={sales} isCurrency />
  );
}
