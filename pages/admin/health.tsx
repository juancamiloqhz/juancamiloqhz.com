import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import AdminContainer from '@/components/shared/AdminContainer';
import { getSession, useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  //   console.log(session);
  if (session?.user?.email === process.env.ADMIN_EMAIL) {
    return {
      props: {
        session,
        ...(await serverSideTranslations(context.locale ?? 'en', [
          'header',
          'footer',
        ])),
      },
    };
  }

  return {
    props: {},
  };

  // return {
  //   notFound: true
  // };
};

const BarChart = dynamic(() => import('components/admin/BarChart'), {
  ssr: false,
});

const PieChart = dynamic(() => import('components/admin/PieChart'), {
  ssr: false,
});

const CalendarChart = dynamic(() => import('components/admin/CalendarChart'), {
  ssr: false,
});

export default function PersonalHealthDashboard() {
  const { data: session } = useSession();

  return (
    <AdminContainer
    // title="Private Dashboard"
    // description="My Private Dashboard"
    >
      <div className="mx-auto mb-16 flex w-full flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Health Dashboard
        </h1>
        <h2>Data visualization and other tools to handle health info</h2>
        <ol>
          <li>Weight</li>
          <li>Height</li>
          <li>Age</li>
          <li>Blood pressure</li>
          <li>Heart Rate</li>
        </ol>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <div className="h-96 w-full">
            <BarChart />
          </div>
          <div className="h-96 w-full">
            <PieChart />
          </div>
          <div className="h-96 w-full">
            <CalendarChart />
          </div>
        </div>
      </div>
    </AdminContainer>
  );
}
