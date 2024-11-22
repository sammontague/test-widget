import { WebsitesBookmark } from '@/types';
import { LunaSelect, SelectSizes, LunaInput, LunaFormControlGroup, LunaButton } from '@luna/react';
import { FC, useState } from 'react';

interface NewWesbsiteFormProps {
    saveWebsite: (item: WebsitesBookmark) => void;
    goBack: () => void;
}

export const NewWebsiteForm: FC<NewWesbsiteFormProps> = ({ saveWebsite, goBack }) => {
  const [icon, setIcon] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  return (
    <>
    <LunaSelect 
      label='Icon'
      size={SelectSizes.small}
      onChange={(e: any) => setIcon(e.target.value)}
    >
        <LunaSelect.LunaOption value=''>
            Choose an option
        </LunaSelect.LunaOption>

        <LunaSelect.LunaOption value='dollar'>
            Dollar
        </LunaSelect.LunaOption>

        <LunaSelect.LunaOption value='flag'>
            Flag
        </LunaSelect.LunaOption>

        <LunaSelect.LunaOption value='phone'>
            Phone
        </LunaSelect.LunaOption>

        <LunaSelect.LunaOption value='printer'>
            Printer
        </LunaSelect.LunaOption>

    </LunaSelect>

    <LunaFormControlGroup label='Title' id='title'>
        <LunaInput
            name='title'
            id='title'
            onChange={(e: any) => setTitle(e.target.value)}
            value={title}
        />
    </LunaFormControlGroup>

    <LunaFormControlGroup label='URL' id='url'>
        <LunaInput
            name='url'
            id='url'
            onChange={(e: any) => setUrl(e.target.value)}
            value={url}
        />
    </LunaFormControlGroup>

    <LunaFormControlGroup label='Description' id='description'>
        <LunaInput
            name='description'
            id='description'
            onChange={(e: any) => setDescription(e.target.value)}
            value={description}
        />
    </LunaFormControlGroup>

    <LunaButton
        type='secondary'
        onClick={() => {
            goBack();
        }}
    >
        Cancel
    </LunaButton>

    <LunaButton
        type='primary'
        onClick={() => {
            saveWebsite({ icon, title: { label: title, description, url } });
            goBack();
        }}
    >
        Save
    </LunaButton>
    </>
  );
};
