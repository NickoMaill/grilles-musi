import { createTheme } from '@mui/material';

class StyleResources {
    public get theme() {
        const theme = createTheme({
            palette: {
                primary: {
                    main: '#383e42',
                },
                secondary: {
                    main: '#f1f1f1',
                    dark: '#383e42',
                    light: '#f1f1f1',
                },
                success: {
                    main: '#43a047',
                },
                error: {
                    main: '#e53935',
                },
                warning: {
                    main: '#d8692d',
                },
                info: {
                    main: '#1e88e5',
                },
            },
        });
        return theme;
    }
}

// eslint-disable-next-line
export default new StyleResources();