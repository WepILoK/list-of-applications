import makeStyles from "@material-ui/core/styles/makeStyles";

export const useComponentStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#D2DFED',
        height: 65,
        width: 'calc(100vw + 18%)',
        '& .MuiOutlinedInput-root': {
            borderRadius: 40,
        },
    },
    headerSearch: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        marginTop: 15,
        marginLeft: 20,
        width: 675,
        height: 40,
    },
    sideMenu: {
        position: 'sticky',
        width: 96,
        top: 0,
        left: 0,
        backgroundColor: '#012138',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
    },
    sideMenuLogo: {
        width: 96,
        height: 64,
        paddingTop: 18,
        position: 'relative',
        left: 26,
        top: 10,
    },
    sideMenuList: {
        paddingTop: 10,
        '& :hover': {
            backgroundColor: '#002B4B'
        },
        '& a': {
            color: '#FFFFFF',
            textDecoration: 'none',
        }
    },
    sideMenuListItem: {
        cursor: 'pointer',
        textAlign: 'center',
        paddingTop: 15,
        width: 95,
        height: 55,
    },
    sideMenuListItemLabel: {
        fontSize: 12,
    },
}))