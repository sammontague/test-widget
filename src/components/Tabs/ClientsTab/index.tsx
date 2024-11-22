import { LunaTextLink } from '@luna/react';
import { LunaBasicTable } from '@luna/react-tables';
import { FC } from 'react';
import { ClientsBookmark } from '@/types';

interface ClientsTabProps {
    clients: ClientsBookmark[];
}

const columns = [
    {
        accessor: 'client',
        luna: {
            headerText: '',
            cellType: 'text',
            format: (cell: { value: { name: string, note: string} }) => {
                return (
                  <>
                    <div><LunaTextLink disabled>{cell.value.name}</LunaTextLink></div>
                    <div><strong>Notes: </strong>{cell.value.note}</div>
                  </>
                );
            }
        }
    }
];

const ClientsTab: FC<ClientsTabProps> = ({ clients }) => {
    const noData = clients.length === 0;

    return (
        <LunaBasicTable data={clients} columns={columns} noData={noData} className='clients-tab-table' />
    );
};

export default ClientsTab;
