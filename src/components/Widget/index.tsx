import { LunaAppProvider, LunaContainerPaddings } from '@luna/react';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetPortalProvider,
  useWidgetAssets
} from '@nm/flexible-ui-framework';
import { FC, useState } from 'react';
import { mockClients, mockWebsites } from '@/mockData';
import { ClientsBookmark, WebsitesBookmark } from '@/types';
import ListView from '../Pages/ListView';
import AddNewItem from '../Pages/AddNewItem';
import EditItem from '../Pages/EditItem';

type Pages = 'listView' | 'addNewItem' | 'editItem';

export const TestWidget: FC = () => {
  const { isReady } = useWidgetAssets();

  const [websites, setWebsites] = useState<WebsitesBookmark[]>([
    mockWebsites['phoebe'],
    mockWebsites['joey'],
    mockWebsites['chandler'],
    mockWebsites['ross']
  ] as WebsitesBookmark[]);

  const [clients, setClients] = useState<ClientsBookmark[]>([
    mockClients['rachel'],
    mockClients['gunther']
  ]);

  const [activePage, setActivePage] = useState<Pages>('listView');

  const primaryAction = {
    onClick: () => setActivePage('addNewItem')
  };

  const goBack = () => {
    setActivePage('listView');
  }
  
  const saveWebsite = (item: WebsitesBookmark) => {
    setWebsites([...websites, item]);
    setActivePage('listView');
  }

  const saveClient = (item: ClientsBookmark) => {
    setClients([...clients, item]);
    setActivePage('listView');
  }

  return (
    <WidgetPortalProvider widgetId={'ad-test-widget-bookmarks'}>
      <LunaAppProvider appname={'ad-test-widget-bookmarks'}>
        <Widget ready={isReady} data-testid='test-id' className='test-widget-bookmarks' padding={[LunaContainerPaddings.l10.all]}>
          <WidgetHeader title='Bookmarks' primaryAction={primaryAction} />
          <WidgetContent>
            {activePage === 'listView' && <ListView websites={websites} clients={clients} />}
            {activePage === 'addNewItem' && <AddNewItem goBack={goBack} saveWebsite={saveWebsite} saveClient={saveClient} />}
            {activePage === 'editItem' && <EditItem goBack={goBack} saveWebsite={saveWebsite} saveClient={saveClient} />}
          </WidgetContent>
        </Widget>
      </LunaAppProvider>
    </WidgetPortalProvider>
  );
};
