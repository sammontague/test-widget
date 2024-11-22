import { ClientsBookmark, WebsitesBookmark } from '@/types';
import { LunaGlyphs } from '@luna/react';

export const mockWebsites: Record<string, WebsitesBookmark> = {
  ['phoebe']: {
    icon: 'dollar',
    title: {
      label: 'Phoebe Buffay',
      description: 'AKA - Regina Phalange, is wildly funny character who is the creator of “Smelly Cat” and loves all creatures.',
      url: ''
    }
  },
  ['joey']: {
    icon: 'phone',
    title: {
      label: 'Joey Tribbiani',
      description: 'AKA - Ken Adams or Dr. Drake Ramoray on the hit TV show “Days of Our Lives” is the actor of the group and loves his buddy Chandler.',
      url: ''
    }
  },
  ['chandler']: {
    icon: 'printer',
    title: {
      label: 'Chandler Bing',
      description: 'AKA - Miss Chanandler Bong, is the prankster of the group who loves sarcasm and wearing sweater vests.',
      url: ''
    }
  },
  ['ross']: {
    icon: 'dollar',
    title: {
      label: 'Ross Geller',
      description: 'AKA - Red Ross, is the intelligent one who is a paleontologist and professor of the group.',
      url: ''
    }
  }
};

export const mockClients: Record<string, ClientsBookmark> = {
  ['rachel']: {
    client: {
      name: 'Rachel Green',
      note: 'make sure to tell her happy birthday'
    }
  },
  ['gunther']: {
    client: {
      name: 'Gunther',
      note: 'Schedule time to get coffee with him'
    }
  }
}
