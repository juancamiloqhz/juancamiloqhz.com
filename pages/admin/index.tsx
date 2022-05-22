import AdminContainer from 'components/AdminContainer';
import { useSession, getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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
      <div className="flex flex-col justify-center items-start mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          Dashboard
        </h1>

        <h2>A cuales datos quiero hacerles seguimiento?</h2>
        <ol>
          <li>Balanza deudas</li>
        </ol>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="w-full h-96">
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
    </AdminContainer>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  //   console.log(session);
  if (session && session.user.email == process.env.ADMIN_EMAIL) {
    return {
      props: {
        session,
        ...(await serverSideTranslations(context.locale, ['header', 'footer']))
      }
    };
  }

  return {
    notFound: true
  };
}
