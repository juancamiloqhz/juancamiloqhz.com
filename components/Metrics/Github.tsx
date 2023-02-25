import fetcher from 'lib/fetcher';
import { GitHub } from 'lib/types';
import useSWR from 'swr';
import MetricCard from '@/components/Metrics/Card';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const stars = new Number(data?.stars);
  const followers = data?.followers || 0;
  const link = 'https://github.com/juancamiloqhz';
  // console.log(data);

  return (
    // <MetricCard
    //   header="GitHub Stars"
    //   link={link}
    //   metric={stars}
    //   isCurrency={false}
    // />
    <MetricCard
      header="GitHub Followers"
      link={link}
      metric={followers}
      isCurrency={false}
    />
  );
}
