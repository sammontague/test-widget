import { FC, useState } from 'react';
import { LunaIconAction, LunaIconActionTypes, LunaIconActionSizes, LunaGlyphs, LunaIconActionLabelPlacement, LunaRadioCards, LunaRadioCardSizes } from '@luna/react';
import { Page } from '@nm/flexible-ui-framework';
import { ClientsBookmark, WebsitesBookmark } from '@/types';
import { NewWebsiteForm } from '../Forms/NewWebsiteForm';
import { NewClientForm } from '../Forms/NewClientForm';

interface AddNewItemProps {
    goBack: () => void;
    saveWebsite: (item: WebsitesBookmark) => void;
    saveClient: (item: ClientsBookmark) => void;
}

const AddNewItem: FC<AddNewItemProps> = ({ goBack, saveWebsite, saveClient }) => {

    type Tabs = 'websites' | 'clients';
    const [activeTab, setActiveTab] = useState<Tabs>('websites');

    const topBarDismiss = (
        <LunaIconAction
          type={LunaIconActionTypes.t20}
          onClick={goBack}
          size={LunaIconActionSizes.s20}
          glyph={LunaGlyphs["chevron-left"]}
          label="Back to list"
          labelPosition={LunaIconActionLabelPlacement.right}
        />
    );

    return (
        <Page id={'add-new-item-page'} mode='work' topBarTitleMain={<></>} topBarDismiss={topBarDismiss}>

            <LunaRadioCards
                id='add-new-item-tabs'
                items={[
                    {value: 'websites', id: 'websites', label: 'Add Website'},
                    {value: 'clients', id: 'clients', label: 'Add Client'},
                ]}
                onChange={(value: Tabs) => {setActiveTab(value)}}
                value={activeTab}
                size={LunaRadioCardSizes.small}
                />


            {activeTab === 'websites' && <NewWebsiteForm saveWebsite={saveWebsite} goBack={goBack}/>}
            {activeTab === 'clients' && <NewClientForm saveClient={saveClient} goBack={goBack}/>}
        </Page>
    );
};

export default AddNewItem;
