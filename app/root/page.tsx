import ClientRouterProvider, { ClientRouterPage } from '@/components/ClientRouter';
import JokePage from '../jokes/[jokeid]/page';
import JokesLayout from '../jokes/layout';
import NewJokePage from '../jokes/new/page';
import JokesPage from '../jokes/page';

async function getPage(route: string): Promise<JSX.Element> {
  'use server';
  console.log('getPage', { route });
  const page = (() => { switch (route) {
    case 'all':
      return <JokesPage />;
    case 'new':
      return <NewJokePage />;
    default:
      return <JokePage params={{ jokeid: route }} />;
  }})();
  return <JokesLayout>{page}</JokesLayout>;
}

export default async function RootPage() {
  const route = 'all';
  const page = await getPage(route);
  return (
    <ClientRouterProvider getPage={getPage} page={page} route={route}>
      <ClientRouterPage />
    </ClientRouterProvider>
  );
}
