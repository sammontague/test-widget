import { Page } from '@nm/flexible-ui-framework';
import { ClientsBookmark, WebsitesBookmark } from '@/types';
import { FC } from 'react';

interface EditItemProps {
    goBack: () => void;
    saveWebsite: (item: WebsitesBookmark) => void;
    saveClient: (item: ClientsBookmark) => void;
}

const EditItem: FC<EditItemProps> = ({ goBack, saveWebsite, saveClient }) => {
    return (
        <Page>Edit Item</Page>
    );
};

export default EditItem;