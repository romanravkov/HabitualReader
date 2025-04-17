const HOME_STACK_PAGES = {
    Home: 'Home',
} as const;

const BOOKS_STACK_PAGES = {
    BooksList: 'BooksList',
    AddBook: 'AddBook',
} as const;

const MORE_STACK_PAGES = {
    More: 'More',
    Settings: 'Settings',
} as const;

export const STACKS = {
    HOME_STACK: {
        StackName: 'HomeStack',
        ...HOME_STACK_PAGES,
    },
    BOOKS_STACK: {
        StackName: 'BooksStack',
        ...BOOKS_STACK_PAGES,
    },
    MORE_STACK: {
        StackName: 'MoreStack',
        ...MORE_STACK_PAGES,
    },
    BOTTOM_BAR_STACK: {
        StackName: 'BottomBarStack',
    },
    ROOT_STACK: {
        BookDetails: 'BookDetails',
    }
} as const;
