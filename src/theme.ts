// @ts-nocheck
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {red} from "@material-ui/core/colors";


export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFront',
            'Segoe UI',
            'Roboto Light',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ],
    },
    palette: {
        primary: {
            main: 'rgb(1, 140, 241)',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFFFFF',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#14171a'
        },
    },
    shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                padding: '16px 35px',
                fontSize: 16,
                height: 40,
                fontWeight: 400,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(12, 111, 111)',
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)',
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(29, 161, 242)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
});
