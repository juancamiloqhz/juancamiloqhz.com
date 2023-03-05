import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import AdminContainer from '@/shared/AdminContainer';
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
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', [
        'header',
        'footer',
      ])),
    },
  };
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

export default function PersonalDashboard() {
  const { data: session } = useSession();

  return (
    <AdminContainer
    // title="Private Dashboard"
    // description="My Private Dashboard"
    >
      <div className="px-8 transition-all duration-500 ease-in-out md:px-28">
        <div className="mx-auto mt-20 mb-16 flex w-full flex-col items-start justify-center lg:mt-48">
          <h1 className="mb-8 w-full font-serif text-5xl font-bold tracking-tight md:mb-20 md:text-center md:text-7xl ">
            Dashboard
          </h1>

          <h2>A cuales datos quiero hacerles seguimiento?</h2>
          <ol>
            <li>Balanza deudas</li>
          </ol>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bar-chart h-96 w-full">
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
      </div>
    </AdminContainer>
  );
}
