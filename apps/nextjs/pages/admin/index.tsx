import AdminContainer from 'components/AdminContainer';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  //   console.log(session);
  if (session?.user?.email === process.env.ADMIN_EMAIL) {
    return {
      props: {
        session,
        ...(await serverSideTranslations(context.locale ?? 'en', [
          'header',
          'footer'
        ]))
      }
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', [
        'header',
        'footer'
      ]))
    }
  };
};

const BarChart = dynamic(() => import('components/admin/BarChart'), {
  ssr: false
});

const PieChart = dynamic(() => import('components/admin/PieChart'), {
  ssr: false
});

const CalendarChart = dynamic(() => import('components/admin/CalendarChart'), {
  ssr: false
});

export default function PersonalDashboard() {
  const { data: session } = useSession();

  return (
    <AdminContainer
    // title="Private Dashboard"
    // description="My Private Dashboard"
    >
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-20 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            Dashboard
          </h1>

          <h2>A cuales datos quiero hacerles seguimiento?</h2>
          <ol>
            <li>Balanza deudas</li>
          </ol>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="w-full h-96 bar-chart">
              <BarChart />
            </div>
            <div className="w-full h-96">
              <PieChart />
            </div>
            <div className="w-full h-96">
              <CalendarChart />
            </div>
          </div>
        </div>
      </div>
    </AdminContainer>
  );
}
