import { ClientsBookmark } from '@/types';
import { LunaInput, LunaFormControlGroup, LunaButton } from '@luna/react';
import { FC, useState } from 'react';

interface NewClientFormProps {
    saveClient: (item: ClientsBookmark) => void;
    goBack: () => void;
}

export const NewClientForm: FC<NewClientFormProps> = ({ saveClient, goBack }) => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  return (
    <>

    <LunaFormControlGroup label='Name' id='name'>
        <LunaInput
            name='name'
            id='name'
            onChange={(e: any) => setName(e.target.value)}
            value={name}
        />
    </LunaFormControlGroup>

    <LunaFormControlGroup label='Note' id='note'>
        <LunaInput
            name='note'
            id='note'
            onChange={(e: any) => setNote(e.target.value)}
            value={note}
        />
    </LunaFormControlGroup>

    <LunaButton
        type='secondary'
        onClick={() => {
            goBack();
        }}
        align='right'
    >
        Cancel
    </LunaButton>

    <LunaButton
        type='primary'
        onClick={() => {
            saveClient({ client: { name, note } });
            goBack();
        }}
        align='right'
    >
        Save
    </LunaButton>
    </>
  );
};
