export interface WebsitesBookmarkTitle {
    label: string;
    description: string;
    url: string;
}

export interface WebsitesBookmark {
    icon: string;
    title: WebsitesBookmarkTitle;
}

export interface ClientsBookmark {
    client: {
        name: string;
        note: string;
    };
}