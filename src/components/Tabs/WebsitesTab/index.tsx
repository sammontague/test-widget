import { FC } from 'react';
import {
    LunaType, 
    LunaTypeSets, 
    LunaIconBadgeSizes,
    LunaIconBadgeColors,
    LunaIconBadge,
    LunaGlyphs,
    LunaTextLink
} from '@luna/react';
import { LunaBasicTable } from '@luna/react-tables';
import { WebsitesBookmark, WebsitesBookmarkTitle } from '@/types';


interface WebsitesTabProps {
    websites: WebsitesBookmark[];
}

const columns = [
    {
        accessor: 'icon',
        luna: {
            headerText: '',
            cellType: 'icon',
            format: (cell: { value: typeof LunaGlyphs }) => {
                return (
                    <LunaIconBadge
                        glyph={LunaGlyphs[cell.value]}
                        color={LunaIconBadgeColors.neutral90}
                        size={LunaIconBadgeSizes.s20}
                    />
                )
            }
        }
    },
    {
        accessor: 'title',
        luna: {
            headerText: '',
            cellType: 'text',
            format: (cell: { value: WebsitesBookmarkTitle }) => {
                return (
                  <>
                    <LunaTextLink href={cell.value.url}>{cell.value.label}</LunaTextLink>
                    <LunaType typeSet={LunaTypeSets.body.l20} component='p'>{cell.value.description}</LunaType>
                  </>
                );
            }
        }
    }
];

const rowActions = [
    {
        icon: 'edit',
        label: 'Edit',
        action: (row: any) => alert(`Edit ${row.index}`)
    },
    {
        icon: 'trash',
        label: 'Delete',
        action: (row: any) => alert(`Delete ${row.index}`)
    }
];

const WebsitesTab: FC<WebsitesTabProps> = ({ websites }) => {
    const noData = websites.length === 0;

    return (
      <LunaBasicTable 
        className='websites-tab-table'
        columns={columns} 
        data={websites} 
        rowActions={rowActions} 
        noData={noData} 
        pagination={{
            itemsPerPage: 4,
            itemLabel: 'Websites',
            totalItems: websites.length
        }}
      />
    );;
};

export default WebsitesTab;
