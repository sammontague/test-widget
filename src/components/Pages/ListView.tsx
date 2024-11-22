import { LunaContainerThemes } from '@luna/react';
import { Page, Tabs, TabItem } from '@nm/flexible-ui-framework';
import { FC, memo } from 'react';
import { ClientsBookmark, WebsitesBookmark } from '@/types';
import WebsitesTab from '../Tabs/WebsitesTab';
import ClientsTab from '../Tabs/ClientsTab';

interface ListViewProps {
    websites: WebsitesBookmark[];
    clients: ClientsBookmark[];
}


const ListView: FC<ListViewProps> = ({ websites, clients }) => {
    return (
        <Page id='list-view-page'>
          <Tabs defaultActiveId='clients' theme={LunaContainerThemes.neutral1}>
            <TabItem id='websites' label='Websites' key={1}>
              <WebsitesTab websites={websites}/>
            </TabItem>
            <TabItem id='clients' label='Clients' key={2}>
              <ClientsTab clients={clients}/>
            </TabItem>
        </Tabs>
      </Page>
    );
};

export default ListView;
