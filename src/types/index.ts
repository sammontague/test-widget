import React from 'react';
export * from './bookmarks';

export interface AppContextProps {
    appname: string;
}

export interface AppProviderProps {
    appname: string;
    children: React.ReactNode;
};
